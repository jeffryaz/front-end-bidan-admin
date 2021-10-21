import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import { listAllPatient, testimonialByStaf } from "./_redux/CrudTestimonial";
import { MODAL } from "../../../service/modalSession/ModalService";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";

const initialValues = {};

function TestimonialPage(props) {
  const { intl } = props;
  const [selectedParameterPatient, setSelectedParameterPatient] = useState({});
  const [optionParameterPatient, setOptionParameterPatient] = useState([]);
  const [dialogRegis, setDialogRegis] = useState(false);
  const [loadingRegis, setLoadingRegis] = useState(false);
  const [loading, setLoading] = useState(false);
  const suhbeader = useSubheader();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/registry/testimonial",
        title: intl.formatMessage({ id: "LABEL.TESTIMONIAL" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.TESTIMONIAL" }));
  }, []);

  const callApiListPatient = () => {
    listAllPatient()
      .then((result) => {
        var data = result.data.data.rows;
        data.forEach((element) => {
          element.value = element.id;
          element.label = element.kode_pasien + "-" + element.nama;
        });
        setOptionParameterPatient(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };
  useEffect(callApiListPatient, []);

  const Schema = Yup.object().shape({
    star: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    testimoni: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoadingRegis(true);
      var data = values;
      data.pasien_id = selectedParameterPatient.value;
      testimonialByStaf(data)
        .then((result) => {
          setSelectedParameterPatient({});
          setDialogRegis(false);
          setLoadingRegis(false);
          formik.resetForm();
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
            "success",
            3000
          );
        })
        .catch((err) => {
          setLoadingRegis(false);
          MODAL.showSnackbar(err.response?.data.messages);
        });
    },
  });

  const changesStar = (count) => {
    formik.setFieldValue("star", count);
    for (let i = 1; i <= 5; i++) {
      window.$(`#star${i}`).removeClass("fas far");
      if (i <= count) {
        window.$(`#star${i}`).addClass("fas");
      } else {
        window.$(`#star${i}`).addClass("far");
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialogRegis}
        // keepMounted
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <DialogTitle>
            <FormattedMessage id="LABEL.TESTIMONIAL" />
          </DialogTitle>
          <DialogContent>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.SATISFACTION_LAVEL" />
              </label>
              <div className="col-sm-9">
                <div className="mb-3">
                  <i
                    className="far fa-star cursor-pointer mx-2"
                    style={{
                      color: "#FFD700",
                      fontSize: "large",
                      verticalAlign: "bottom",
                    }}
                    id="star1"
                    onClick={() => {
                      changesStar(1);
                    }}
                  ></i>
                  <i
                    className="far fa-star cursor-pointer mx-2"
                    style={{
                      color: "#FFD700",
                      fontSize: "large",
                      verticalAlign: "bottom",
                    }}
                    id="star2"
                    onClick={() => {
                      changesStar(2);
                    }}
                  ></i>
                  <i
                    className="far fa-star cursor-pointer mx-2"
                    style={{
                      color: "#FFD700",
                      fontSize: "large",
                      verticalAlign: "bottom",
                    }}
                    id="star3"
                    onClick={() => {
                      changesStar(3);
                    }}
                  ></i>
                  <i
                    className="far fa-star cursor-pointer mx-2"
                    style={{
                      color: "#FFD700",
                      fontSize: "large",
                      verticalAlign: "bottom",
                    }}
                    id="star4"
                    onClick={() => {
                      changesStar(4);
                    }}
                  ></i>
                  <i
                    className="far fa-star cursor-pointer mx-2"
                    style={{
                      color: "#FFD700",
                      fontSize: "large",
                      verticalAlign: "bottom",
                    }}
                    id="star5"
                    onClick={() => {
                      changesStar(5);
                    }}
                  ></i>
                </div>
                {formik.touched.star && formik.errors.star && (
                  <span className="text-left text-danger">
                    {formik.errors.star}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.COMMENT" />
              </label>
              <div className="col-sm-9">
                <textarea
                  rows="3"
                  className="form-control"
                  {...formik.getFieldProps("testimoni")}
                ></textarea>
                {formik.touched.testimoni && formik.errors.testimoni && (
                  <span className="text-left text-danger">
                    {formik.errors.testimoni}
                  </span>
                )}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              onClick={() => {
                setDialogRegis(false);
                setSelectedParameterPatient({});
                formik.resetForm();
              }}
              className="btn btn-danger"
              disabled={loadingRegis}
            >
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                !formik.isValid ||
                (Object.keys(formik.touched).length === 0 &&
                  formik.touched.constructor === Object) ||
                loadingRegis
              }
            >
              {loadingRegis ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingRegis ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Card>
        <CardBody>
          <div>
            <h1 className="text-uppercase text-center mb-5 pb-5">
              <FormattedMessage id="LABEL.TESTIMONIAL" />
            </h1>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-qrcode"></i>
              </span>
            </div>
            <Select
              value={selectedParameterPatient}
              options={optionParameterPatient}
              isDisabled={false}
              className="form-control border-0 p-0 h-100 rounded-0"
              classNamePrefix="react-select"
              onChange={(value) => {
                setSelectedParameterPatient(value);
                setDialogRegis(true);
                formik.setFieldTouched("star", true);
              }}
            />
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(TestimonialPage));
