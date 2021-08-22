import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import { listPatientPagination } from "../_redux/CrudPatient";
import Select from "react-select";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import * as Yup from "yup";

function Address(props) {
  const {
    intl,
    handleProgress,
    dataAddress = {},
    handleData,
    handleStatus,
  } = props;
  const [loading, setLoading] = useState(true);

  const Schema = Yup.object().shape({
    alamat: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    kec: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    kota: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });
  const formik = useFormik({
    initialValues: dataAddress,
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
      handleData(formik.values, 1, "COMPLETE");
      handleProgress(1, "COMPLETE");
    } else {
      handleProgress(1, "ON PROGRESS");
    }
  }, [formik]);

  useEffect(() => {
    if (Object.keys(dataAddress).length > 0)
      formik.setFieldTouched("alamat", true);
  }, []);

  return (
    <React.Fragment>
      <div className="mb-5 pb-5">
        <h1 className="text-center">Alamat</h1>
      </div>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Alamat Lengkap<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <textarea
                  rows="5"
                  className="form-control"
                  required
                  {...formik.getFieldProps("alamat")}
                ></textarea>

                {formik.touched.alamat && formik.errors.alamat && (
                  <span className="text-left text-danger">
                    {formik.errors.alamat}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Kecamatan<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kecamatan"
                  required
                  {...formik.getFieldProps("kec")}
                />
                {formik.touched.kec && formik.errors.kec && (
                  <span className="text-left text-danger">
                    {formik.errors.kec}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Kota/Kabupaten<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kota/Kabupaten"
                  required
                  {...formik.getFieldProps("kota")}
                />
                {formik.touched.kota && formik.errors.kota && (
                  <span className="text-left text-danger">
                    {formik.errors.kota}
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
                  formik.touched.constructor === Object)
              }
            >
              Selanjutnya
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(Address));
