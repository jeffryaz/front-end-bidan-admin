import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  createService,
  editService,
  getServiceById,
} from "../_redux/CrudAdministrator";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  CardHeaderTitle,
} from "../../../../_metronic/_partials/controls";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../../Auth/_redux/ActionAuth";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextEditor from "../../../components/textEditor/TextEditor";

const initialValues = {};
const toolbar = {
  toolbar: [
    ["style", ["style"]],
    ["font", ["bold", "underline", "clear"]],
    ["fontname", ["fontname"]],
    ["color", ["color"]],
    ["para", ["ul", "ol", "paragraph"]],
    ["insert", ["link"]],
  ],
};

function DetailServicePage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loadingSave, setLoadingSave] = useState(false);
  const history = useHistory();
  const state = props.match.params.state;

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/master-data-page/service`,
        title: intl.formatMessage({ id: "LABEL.LIST_SERVICE" }),
      },
      {
        pathname: `/administrator/master-data-page/service/${state}`,
        title: intl.formatMessage({ id: "LABEL.SERVICE" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.SERVICE" }));
  }, []);

  const Schema = Yup.object().shape({
    service_name: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    service_desc: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoadingSave(true);
      if (state === "new") {
        createService(values)
          .then((result) => {
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success",
              3000
            );
            setLoadingSave(false);
          })
          .catch((err) => {
            setLoadingSave(false);
            MODAL.showSnackbar(err.response?.data.messages);
          });
      } else {
        editService(state, values)
          .then((result) => {
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success",
              3000
            );
            setLoadingSave(false);
          })
          .catch((err) => {
            console.log(err);
            setLoadingSave(false);
            MODAL.showSnackbar(err.response?.data.messages);
          });
      }
    },
  });

  const callApiGetById = () => {
    if (state !== "new") {
      getServiceById(state)
        .then((result) => {
          formik.setValues({
            service_name: result.data.data.service_name,
            service_desc: result.data.data.service_desc,
          });
          formik.setFieldTouched("service_desc", true);
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    }
  };
  useEffect(callApiGetById, []);

  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              {state !== "new" ? (
                <FormattedMessage id="LABEL.EDIT" />
              ) : (
                <FormattedMessage id="LABEL.ADD" />
              )}
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar></CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <form
            className="form"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                <FormattedMessage id="LABEL.SERVICE" />
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("service_name")}
                />
                {formik.touched.service_name && formik.errors.service_name && (
                  <span className="text-left text-danger">
                    {formik.errors.service_name}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>
                <FormattedMessage id="LABEL.DESC" />
              </label>
              <TextEditor
                initialData={formik.values.service_desc}
                getData={(e) => {
                  formik.setFieldValue("service_desc", e);
                }}
                onBlur={() => {
                  formik.setFieldTouched("service_desc", true);
                }}
                options={toolbar}
              />
              {formik.touched.service_desc && formik.errors.service_desc && (
                <span className="text-left text-danger">
                  {formik.errors.service_desc}
                </span>
              )}
            </div>
            <div className="toolbar-custom scrolltop">
              <button
                type="submit"
                className="btn btn-primary btn-sm my-2"
                disabled={
                  !formik.isValid ||
                  (Object.keys(formik.touched).length === 0 &&
                    formik.touched.constructor === Object) ||
                  loadingSave
                }
                style={{ width: 70 }}
              >
                {loadingSave ? (
                  <i className="fas fa-spinner fa-pulse d-block p-0"></i>
                ) : (
                  <i className="fas fa-save d-block p-0"></i>
                )}
                {loadingSave ? (
                  <FormattedMessage id="LABEL.WAITING" />
                ) : (
                  <FormattedMessage id="LABEL.SAVE" />
                )}
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm my-2"
                onClick={() => {
                  formik.resetForm();
                  history.push(`/administrator/master-data-page/sevice`);
                }}
                disabled={loadingSave}
                style={{ width: 70 }}
              >
                <i className="fas fa-times d-block p-0"></i>
                <FormattedMessage id="LABEL.CANCEL" />
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(DetailServicePage));
