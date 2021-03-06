import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/ActionAuth";
import { login } from "../_redux/CrudAuth";
import Select from "react-select";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const optionPosition = [
  { value: 1, label: "Pendaftaran/Screening" },
  { value: 3, label: "Kasir" },
  { value: 4, label: "Apotek" },
  { value: 2, label: "Dokter/Bidan" },
  { value: 5, label: "Owner" },
];

const initialValues = {
  email: "",
  password: "",
  position: "",
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState({});
  const [read, setRead] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    position: Yup.string().required(
      intl.formatMessage({
        id: "AUTH.VALIDATION.REQUIRED_FIELD",
      })
    ),
  });

  useEffect(() => {
    // if (window.navigator.geolocation) {
    //   window.navigator.geolocation.getCurrentPosition(showPosition, showError, {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0,
    //   });
    // } else {
    //   console.log("Geolocation is not supported by this browser.");
    // }
  });

  // const showPosition = (position) => {
  //   console.log(
  //     "Latitude: " +
  //       position.coords.latitude +
  //       "<br>Longitude: " +
  //       position.coords.longitude
  //   );
  // };
  // const showError = (error) => {
  //   switch (error.code) {
  //     case error.PERMISSION_DENIED:
  //       console.log("User denied the request for Geolocation.");
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       console.log("Location information is unavailable.");
  //       break;
  //     case error.TIMEOUT:
  //       console.log("The request to get user location timed out.");
  //       break;
  //     case error.UNKNOWN_ERROR:
  //       console.log("An unknown error occurred.");
  //       break;
  //   }
  // };

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      var formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      setTimeout(() => {
        login(formData)
          .then((result) => {
            disableLoading();
            switch (result?.data?.data?.data?.role_id) {
              case 1:
              case 2:
              case 3:
              case 4:
                console.log(result?.data?.data?.data?.role_id);
                switch (values.position) {
                  case 1:
                    result.data.data.data.position = "registry";
                    break;
                  case 2:
                    result.data.data.data.position = "doctor";
                    break;
                  case 3:
                    result.data.data.data.position = "teller";
                    break;
                  case 4:
                    result.data.data.data.position = "pharmacist";
                    break;
                  default:
                    result.data.data.data.position = "invalid";
                    break;
                }
                break;
              case 5:
                switch (values.position) {
                  case 1:
                    result.data.data.data.position = "registry";
                    break;
                  case 2:
                    result.data.data.data.position = "doctor";
                    break;
                  case 3:
                    result.data.data.data.position = "teller";
                    break;
                  case 4:
                    result.data.data.data.position = "pharmacist";
                    break;
                  case 5:
                    result.data.data.data.position = "administrator";
                    break;
                  default:
                    result.data.data.data.position = "invalid";
                    break;
                }
                break;
            }
            if (result.data.data.data.position === "invalid") {
              setStatus(
                intl.formatMessage({
                  id: "AUTH.VALIDATION.INVALID_LOGIN_LOGIN",
                })
              );
              setSubmitting(false);
            } else {
              props.login(result.data.data.token);
              props.fulfillUser(result.data.data.data);
            }
          })
          .catch(() => {
            disableLoading();
            setSubmitting(false);
            setStatus(
              intl.formatMessage({
                id: "AUTH.VALIDATION.INVALID_LOGIN",
              })
            );
          });
      }, 1000);
    },
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          Enter your username and password
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}

        <div className="form-group fv-plugins-icon-container">
          <Select
            value={selectedPosition}
            options={optionPosition}
            isDisabled={false}
            className={`form-control form-control-solid h-auto border-0 p-0 h-100 ${getInputClasses(
              "position"
            )}`}
            name="position"
            classNamePrefix="react-select"
            onChange={(value) => {
              setSelectedPosition(value);
              formik.setFieldValue("position", value.value);
            }}
            onBlur={() => {
              formik.setFieldTouched({ ...formik, position: true });
            }}
          />
          {formik.touched.position && formik.errors.position ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.position}</div>
            </div>
          ) : null}
        </div>

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <div className="input-group mb-3">
            <input
              placeholder="Password"
              type={read ? "text" : "password"}
              className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
                "password"
              )}`}
              name="password"
              {...formik.getFieldProps("password")}
            />
            <div className="input-group-append">
              <span
                className="input-group-text cursor-pointer"
                onClick={() => {
                  setRead(!read);
                }}
              >
                {read ? (
                  <i className="far fa-eye-slash text-dark"></i>
                ) : (
                  <i className="far fa-eye text-dark"></i>
                )}
              </span>
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <div></div>
          {/* <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link> */}
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
