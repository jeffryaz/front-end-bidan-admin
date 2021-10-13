import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import {
  listProvince,
  listCity,
  listDistricts,
  listWard,
} from "../_redux/CrudPatient";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MODAL } from "../../../../service/modalSession/ModalService";

function Address(props) {
  const {
    intl,
    handleProgress,
    dataAddress = {},
    handleData,
    handleStatus,
    statusAddress = false,
  } = props;
  const [loading, setLoading] = useState(true);
  const [selectedParameterProvince, setSelectedParameterProvince] = useState(
    {}
  );
  const [optionParameterProvince, setOptionParameterProvince] = useState([]);
  const [selectedParameterCity, setSelectedParameterCity] = useState({});
  const [optionParameterCity, setOptionParameterCity] = useState([]);
  const [selectedParameterDistricts, setSelectedParameterDistricts] = useState(
    {}
  );
  const [optionParameterDistricts, setOptionParameterDistricts] = useState([]);
  const [selectedParameterWard, setSelectedParameterWard] = useState({});
  const [optionParameterWard, setOptionParameterWard] = useState([]);
  const [status, setStatus] = useState(statusAddress);

  const Schema = Yup.object().shape({
    alamat: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    prov: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    kota: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    kec: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    kel: Yup.string().required(
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
      setStatus(true);
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
      formik.setFieldTouched({ ...formik, alamat: true });
    if (dataAddress?.prov) {
      setSelectedParameterProvince(dataAddress?.prov);
      if (dataAddress?.kota) {
        setSelectedParameterCity(dataAddress?.kota);
        if (dataAddress?.kec) {
          setSelectedParameterDistricts(dataAddress?.kec);
          if (dataAddress?.kel) {
            setSelectedParameterWard(dataAddress?.kel);
          }
        }
      }
    }
  }, []);

  const callApiListProvince = () => {
    listProvince()
      .then((result) => {
        var data = result.data.data;
        data.forEach((item) => {
          item.value = item.id;
          item.label = item.nama;
        });
        setOptionParameterProvince(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const callApiListCity = () => {
    if (selectedParameterProvince.value) {
      if (!status) setSelectedParameterCity({});
      listCity(selectedParameterProvince.value)
        .then((result) => {
          var data = result.data.data;
          data.forEach((item) => {
            item.value = item.id_kota;
            item.label = item.nama;
          });
          setOptionParameterCity(data);
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else if (!status) {
      setSelectedParameterCity({});
      setOptionParameterCity([]);
    }
  };

  const callApiListDistricts = () => {
    if (selectedParameterCity.value) {
      if (!status) setSelectedParameterDistricts({});
      listDistricts(
        selectedParameterProvince.value,
        selectedParameterCity.value
      )
        .then((result) => {
          var data = result.data.data;
          data.forEach((item) => {
            item.value = item.id_kec;
            item.label = item.nama;
          });
          setOptionParameterDistricts(data);
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else if (!status) {
      setSelectedParameterDistricts({});
      setOptionParameterDistricts([]);
    }
  };

  const callApiListWard = () => {
    if (selectedParameterDistricts.value) {
      if (!status) setSelectedParameterWard({});
      listWard(
        selectedParameterProvince.value,
        selectedParameterCity.value,
        selectedParameterDistricts.value
      )
        .then((result) => {
          var data = result.data.data;
          data.forEach((item) => {
            item.value = item.id_kel;
            item.label = item.nama;
          });
          setOptionParameterWard(data);
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else if (!status) {
      setSelectedParameterWard({});
      setOptionParameterWard([]);
    }
  };

  useEffect(callApiListProvince, [selectedParameterProvince]);
  useEffect(callApiListCity, [selectedParameterProvince]);
  useEffect(callApiListDistricts, [selectedParameterCity]);
  useEffect(callApiListWard, [selectedParameterDistricts]);

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
                Provinsi<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <Select
                  value={selectedParameterProvince}
                  options={optionParameterProvince}
                  isDisabled={false}
                  className="form-control border-0 p-0 h-100"
                  classNamePrefix="react-select"
                  onChange={(value) => {
                    setStatus(false);
                    setSelectedParameterProvince(value);
                    formik.setFieldValue("prov", value);
                  }}
                />
                {formik.touched.prov && formik.errors.prov && (
                  <span className="text-left text-danger">
                    {formik.errors.prov}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Kota/Kabupaten<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <Select
                  value={selectedParameterCity}
                  options={optionParameterCity}
                  isDisabled={false}
                  className="form-control border-0 p-0 h-100"
                  classNamePrefix="react-select"
                  onChange={(value) => {
                    setStatus(false);
                    setSelectedParameterCity(value);
                    formik.setFieldValue("kota", value);
                  }}
                />
                {formik.touched.kota && formik.errors.kota && (
                  <span className="text-left text-danger">
                    {formik.errors.kota}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Kecamatan<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <Select
                  value={selectedParameterDistricts}
                  options={optionParameterDistricts}
                  isDisabled={false}
                  className="form-control border-0 p-0 h-100"
                  classNamePrefix="react-select"
                  onChange={(value) => {
                    setStatus(false);
                    setSelectedParameterDistricts(value);
                    formik.setFieldValue("kec", value);
                  }}
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
                Kelurahan/Desa<span className="text-danger">*</span>
              </label>
              <div className="col-sm-9">
                <Select
                  value={selectedParameterWard}
                  options={optionParameterWard}
                  isDisabled={false}
                  className="form-control border-0 p-0 h-100"
                  classNamePrefix="react-select"
                  onChange={(value) => {
                    setStatus(false);
                    setSelectedParameterWard(value);
                    formik.setFieldValue("kel", value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched({ ...formik, kel: true });
                  }}
                />
                {formik.touched.kel && formik.errors.kel && (
                  <span className="text-left text-danger">
                    {formik.errors.kel}
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
