import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { listPatientPagination } from "../_redux/CrudPatient";
import Select from "react-select";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import * as Yup from "yup";

function EmergencyContact(props) {
  const {
    intl,
    handleProgress,
    dataEmergencyContact = {},
    handleData,
    handleStatus,
    loading,
  } = props;

  const Schema = Yup.object().shape({
    partner: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    partner_status: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    partner_tel: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });
  const formik = useFormik({
    initialValues: dataEmergencyContact,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      handleStatus(true, values);
    },
  });

  useEffect(() => {
    if (
      Object.keys(formik.touched).length > 0 &&
      formik.touched.constructor === Object &&
      formik.isValid
    ) {
      handleData(formik.values, 2, "COMPLETE");
      handleProgress(2, "COMPLETE");
    } else {
      handleProgress(2, "ON PROGRESS");
    }
  }, [formik]);

  useEffect(() => {
    if (Object.keys(dataEmergencyContact).length > 0)
      formik.setFieldTouched("partner", true);
  }, []);

  return (
    <React.Fragment>
      <div className="mb-5 pb-5">
        <h1 className="text-center">Kontak Darurat</h1>
      </div>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Nama Lengkap<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Lengkap"
                  required
                  {...formik.getFieldProps("partner")}
                  disabled={loading}
                />

                {formik.touched.partner && formik.errors.partner && (
                  <span className="text-left text-danger">
                    {formik.errors.partner}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Hubungan<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hubungan"
                  required
                  {...formik.getFieldProps("partner_status")}
                  disabled={loading}
                />
                {formik.touched.partner_status &&
                  formik.errors.partner_status && (
                    <span className="text-left text-danger">
                      {formik.errors.partner_status}
                    </span>
                  )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Nomor Phone<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <NumberFormat
                  id={loading ? "NumberFormat-text" : "NumberFormat-input"}
                  value={formik.values?.partner_tel}
                  displayType={loading ? "text" : "input"}
                  className="form-control"
                  format="+62 ###-###-###-####"
                  mask="_"
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  onValueChange={(e) => {
                    if (e.floatValue === undefined) {
                      formik.setErrors({
                        partner_tel: intl.formatMessage({
                          id: "LABEL.VALIDATION_REQUIRED_FIELD",
                        }),
                      });
                    }
                    formik.setFieldValue("partner_tel", e.floatValue);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("partner_tel", true);
                  }}
                />
                {formik.touched.partner_tel && formik.errors.partner_tel && (
                  <span className="text-left text-danger">
                    {formik.errors.partner_tel}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-right">
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                handleStatus(false);
              }}
              disabled={loading}
            >
              <i className="fas fa-chevron-left"></i>
              Sebelumnya
            </button>
            <button
              type="submit"
              className="btn btn-primary mx-2"
              disabled={
                !formik.isValid ||
                (Object.keys(formik.touched).length === 0 &&
                  formik.touched.constructor === Object) ||
                loading
              }
            >
              {loading ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
              {loading ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(EmergencyContact));
