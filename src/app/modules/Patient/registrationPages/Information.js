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

const optionParameter = [
  { value: "L", label: "Laki-Laki" },
  { value: "P", label: "Perempuan" },
];

const optionParameterStatus = [
  { value: "2", label: "Lajang" },
  { value: "1", label: "Menikah" },
  { value: "3", label: "Duda/Janda" },
];

function Information(props) {
  const {
    intl,
    handleProgress,
    dataInformation = {},
    handleData,
    handleStatus,
  } = props;
  const [loading, setLoading] = useState(true);
  const [selectedParameter, setSelectedParameter] = useState({});
  const [selectedParameterStatus, setSelectedParameterStatus] = useState({});

  const Schema = Yup.object().shape({
    nama: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    tempat_lahir: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    tgl_lahir: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    jk: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    status_nikah: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    email: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    no_kk: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    ktpno: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    pekerjaan: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    no_telp: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });
  const formik = useFormik({
    initialValues: dataInformation,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      // setLoading(true);
      handleData(values);
      handleStatus(true);
    },
  });

  useEffect(() => {
    if (
      Object.keys(formik.touched).length > 0 &&
      formik.touched.constructor === Object &&
      formik.isValid
    ) {
      handleProgress(0, "COMPLETE");
    } else {
      handleProgress(0, "ON PROGRESS");
    }
  }, [formik]);

  useEffect(() => {
    if (Object.keys(dataInformation).length > 0)
      formik.setFieldTouched("nama", true);
    if (dataInformation?.jk) {
      var statusIndex = optionParameter.findIndex(
        (item) => item.value === dataInformation?.jk
      );
      setSelectedParameter(optionParameter[statusIndex]);
    }
    if (dataInformation?.status_nikah) {
      var statusIndex = optionParameterStatus.findIndex(
        (item) => item.value === dataInformation?.status_nikah
      );
      setSelectedParameterStatus(optionParameterStatus[statusIndex]);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="mb-5 pb-5">
        <h1 className="text-center">Informasi Umum</h1>
      </div>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
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
                  {...formik.getFieldProps("nama")}
                />
                {formik.touched.nama && formik.errors.nama && (
                  <span className="text-left text-danger">
                    {formik.errors.nama}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Tempat Lahir<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tempat Lahir"
                  required
                  {...formik.getFieldProps("tempat_lahir")}
                />
                {formik.touched.tempat_lahir && formik.errors.tempat_lahir && (
                  <span className="text-left text-danger">
                    {formik.errors.tempat_lahir}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Tanggal Lahir<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Tanggal Lahir"
                  max={window.moment(new Date()).format("YYYY-MM-DD")}
                  required
                  {...formik.getFieldProps("tgl_lahir")}
                />
                {formik.touched.tgl_lahir && formik.errors.tgl_lahir && (
                  <span className="text-left text-danger">
                    {formik.errors.tgl_lahir}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Jenis Kelamin<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <Select
                  value={selectedParameter}
                  options={optionParameter}
                  isDisabled={false}
                  className="form-control border-0 p-0 h-100"
                  classNamePrefix="react-select"
                  onChange={(value) => {
                    setSelectedParameter(value);
                    formik.setFieldValue("jk", value.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Status<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <Select
                  value={selectedParameterStatus}
                  options={optionParameterStatus}
                  isDisabled={false}
                  className="form-control border-0 p-0 h-100"
                  classNamePrefix="react-select"
                  onChange={(value) => {
                    setSelectedParameterStatus(value);
                    formik.setFieldValue("status_nikah", value.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Email<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-left text-danger">
                    {formik.errors.email}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Nomor Kartu Keluarga<span className="text-danger">*</span>
              </label>
              <div className="col-sm-8">
                <NumberFormat
                  value={formik.values?.no_kk}
                  displayType="input"
                  className="form-control"
                  format="################"
                  mask="_"
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  onValueChange={(e) => {
                    if (e.floatValue === undefined) {
                      formik.setErrors({
                        no_kk: intl.formatMessage({
                          id: "LABEL.VALIDATION_REQUIRED_FIELD",
                        }),
                      });
                    }
                    formik.setFieldValue("no_kk", e.floatValue);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("no_kk", true);
                  }}
                />
                {formik.touched.no_kk && formik.errors.no_kk && (
                  <span className="text-left text-danger">
                    {formik.errors.no_kk}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Nomor KTP<span className="text-danger">*</span>
              </label>
              <div className="col-sm-8">
                <NumberFormat
                  value={formik.values?.ktpno}
                  displayType="input"
                  className="form-control"
                  format="################"
                  mask="_"
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  onValueChange={(e) => {
                    if (e.floatValue === undefined) {
                      formik.setErrors({
                        ktpno: intl.formatMessage({
                          id: "LABEL.VALIDATION_REQUIRED_FIELD",
                        }),
                      });
                    }
                    formik.setFieldValue("ktpno", e.floatValue);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("ktpno", true);
                  }}
                />
                {formik.touched.ktpno && formik.errors.ktpno && (
                  <span className="text-left text-danger">
                    {formik.errors.ktpno}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Pendidikan Terakhir<span className="text-danger">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Exp: SD, SMP, SMA, Diploma 1-4, Sarjana, Magister, Doktor"
                  required
                  {...formik.getFieldProps("pendidikan")}
                />
                {formik.touched.pendidikan && formik.errors.pendidikan && (
                  <span className="text-left text-danger">
                    {formik.errors.pendidikan}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Pekerjaan<span className="text-danger">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pekerjaan"
                  required
                  {...formik.getFieldProps("pekerjaan")}
                />
                {formik.touched.pekerjaan && formik.errors.pekerjaan && (
                  <span className="text-left text-danger">
                    {formik.errors.pekerjaan}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Nomor Phone<span className="text-danger">*</span>
              </label>
              <div className="col-sm-8">
                <NumberFormat
                  value={formik.values?.no_telp}
                  displayType="input"
                  className="form-control"
                  format="+62 ###-###-###-####"
                  mask="_"
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  onValueChange={(e) => {
                    if (e.floatValue === undefined) {
                      formik.setErrors({
                        no_telp: intl.formatMessage({
                          id: "LABEL.VALIDATION_REQUIRED_FIELD",
                        }),
                      });
                    }
                    formik.setFieldValue("no_telp", e.floatValue);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("no_telp", true);
                  }}
                />
                {formik.touched.no_telp && formik.errors.no_telp && (
                  <span className="text-left text-danger">
                    {formik.errors.no_telp}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-right">
            <button type="button" className="btn btn-primary mx-2" disabled>
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

export default injectIntl(connect(null, null)(Information));
