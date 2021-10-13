import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  craeteArticle,
  getArticleById,
  editArticle,
} from "../_redux/CrudAdministrator";
import { Card, CardBody } from "../../../../_metronic/_partials/controls";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../../Auth/_redux/ActionAuth";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import * as Yup from "yup";
import { useFormik } from "formik";
import { hostBase } from "../../../../redux/setupAxios";
import TextEditor from "../../../components/textEditor/TextEditor";

const initialValues = {};

function WriteArticlePage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const history = useHistory();
  const state = props.match.params.state;

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/article-page/list`,
        title: intl.formatMessage({ id: "LABEL.ARTICLE_LIST" }),
      },
      {
        pathname: `/administrator/article-page/write/${state}`,
        title: intl.formatMessage({ id: "LABEL.ARTICLE_WRITING" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.ARTICLE_WRITING" }));
  }, []);

  const Schema = Yup.object().shape({
    subject: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    content: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    thumbnail_img: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      let newParams = new FormData();
      var dataReq = Object.assign({}, values);
      delete dataReq.load_thumbnail_img;
      if (dataReq.file_thumbnail_img && dataReq.file_thumbnail_img !== null) {
        dataReq.thumbnail_img = dataReq.file_thumbnail_img;
      } else {
        delete dataReq.thumbnail_img;
      }
      delete dataReq.file_thumbnail_img;
      Object.keys(dataReq).forEach((element) => {
        newParams.append(element, dataReq[element]);
      });
      if (state === "new") {
        craeteArticle(newParams)
          .then((result) => {
            console.log("result create ->", result);
            history.push(`/administrator/article-page/list`);
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success"
            );
          })
          .catch((err) => {
            console.log("err -> new", err);
            setLoading(false);
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
          });
      } else {
        editArticle(state, newParams)
          .then((result) => {
            console.log("result edit ->", result);
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success"
            );
          })
          .catch((err) => {
            console.log("err -> edit", err);
            setLoading(false);
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
          });
      }
    },
  });

  const getUserPic = () => {
    if (!formik.values.thumbnail_img) {
      return "none";
    }

    return `url(${hostBase()}/storage/app/thumbnail_img/${
      formik.values.thumbnail_img
    })`;
  };

  const callApiArticleById = () => {
    if (state !== "new") {
      getArticleById(state)
        .then((result) => {
          formik.setValues(result.data.data);
          formik.setFieldTouched({ ...formik, subject: true });
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    }
  };

  useEffect(callApiArticleById, []);

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <form
            className="form"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div
              className="image-input image-input-outline"
              style={{
                backgroundImage: `url(${toAbsoluteUrl(
                  "/media/bg/image_2.jpg"
                )}`,
                margin: "0 4.5%",
                display: "block",
              }}
            >
              <div
                className="image-input-wrapper"
                style={{
                  backgroundImage: `${
                    formik.values?.file_thumbnail_img
                      ? `url('${formik.values?.load_thumbnail_img}')`
                      : getUserPic()
                  }`,
                  width: "100%",
                  height: "calc(60vh)",
                }}
              />
              <label
                className="btn btn-md btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                data-action="change"
                data-toggle="tooltip"
                title=""
                data-original-title="Change avatar"
              >
                <i className="fa fa-pen icon-md text-primary"></i>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => {
                    let fr = new FileReader();
                    fr.onload = () => {
                      formik.setFieldValue("load_thumbnail_img", fr.result);
                    };
                    fr.readAsDataURL(e.target.files[0]);
                    formik.setFieldValue(
                      "file_thumbnail_img",
                      e.target.files[0]
                    );

                    if (state === "new")
                      formik.setFieldValue("thumbnail_img", e.target.files[0]);
                  }}
                />
              </label>
            </div>
            <span className="form-text text-muted mt-5">
              Hanya menerima type file: png, jpg, jpeg.
              <span className="text-left text-danger">
                <FormattedMessage id="LABEL.VALIDATION_REQUIRED_FIELD" />
              </span>
            </span>
            <div className="mt-5 pt-5">
              <div className="form-group">
                <label>
                  <FormattedMessage id="LABEL.TITLE" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  {...formik.getFieldProps("subject")}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <span className="text-left text-danger">
                    {formik.errors.subject}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage id="LABEL.CONTENTS" />
                </label>
                <TextEditor
                  initialData={formik.values.content}
                  getData={(e) => {
                    formik.setFieldValue("content", e);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched({ ...formik, content: true });
                  }}
                />
                {formik.touched.content && formik.errors.content && (
                  <span className="text-left text-danger">
                    {formik.errors.content}
                  </span>
                )}
              </div>
            </div>

            <div className="toolbar-custom scrolltop">
              <button
                type="button"
                className="btn btn-danger btn-sm my-2"
                style={{ width: 60 }}
                disabled={loading}
                onClick={() => {
                  history.push(`/administrator/article-page/list`);
                }}
              >
                <i className="fas fa-times-circle d-block p-0"></i>
                <span className="font-size-xs">Cancel</span>
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm my-2"
                style={{ width: 60 }}
                disabled={
                  !formik.isValid ||
                  (Object.keys(formik.touched).length === 0 &&
                    formik.touched.constructor === Object) ||
                  loading
                }
                onClick={() => {}}
              >
                {loading ? (
                  <i className="fas fa-spinner fa-pulse p-2"></i>
                ) : (
                  <i className="fas fa-check d-block p-0"></i>
                )}
                <span className="font-size-xs">Submit</span>
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(WriteArticlePage));
