/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual, connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import * as auth from "../Auth/_redux/ActionAuth";
import { MODAL } from "../../../service/modalSession/ModalService";
import { changePass } from "../Auth/_redux/CrudAuth";
import { injectIntl } from "react-intl";

function ChangePassword(props) {
  const { intl } = props;
  const [loading, setloading] = useState(false);
  const user = useSelector((state) => state.auth.user, shallowEqual);
  const history = useHistory();
  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    changePass(values)
      .then((result) => {
        setTimeout(() => {
          setloading(false);
          setSubmitting(false);
          formik.resetForm();
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
            "success"
          );
        }, 1000);
      })
      .catch((error) => {
        setloading(false);
        setSubmitting(false);
        MODAL.showSnackbar(error.response?.data.messages);
      });
  };
  // UI Helpers
  const initialValues = {
    old_password: "",
    new_password: "",
    retype_password: "",
  };
  const Schema = Yup.object().shape({
    old_password: Yup.string().required("Current password is required"),
    new_password: Yup.string().required("New Password is required"),
    retype_password: Yup.string()
      .required("Password confirmation is required")
      .when("new_password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("new_password")],
          "Password and Confirm Password didn't match"
        ),
      }),
  });
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
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      saveUser(values, setStatus, setSubmitting);
    },
  });

  return (
    <form className="card card-custom" onSubmit={formik.handleSubmit}>
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Change Password
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Change your account password
          </span>
        </div>
        <div className="card-toolbar">
          <button
            type="submit"
            className="btn btn-success mr-2"
            disabled={
              formik.isSubmitting || (formik.touched && !formik.isValid)
            }
          >
            Save Changes
            {formik.isSubmitting}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              history.goBack();
            }}
            disabled={formik.isSubmitting}
          >
            Cancel
          </button>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form">
        <div className="card-body">
          {/* end::Alert */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-alert">
              Current Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                type="password"
                placeholder="Current Password"
                className={`form-control form-control-lg form-control-solid mb-2 ${getInputClasses(
                  "old_password"
                )}`}
                name="old_password"
                {...formik.getFieldProps("old_password")}
              />
              {formik.touched.old_password && formik.errors.old_password ? (
                <div className="invalid-feedback">
                  {formik.errors.old_password}
                </div>
              ) : null}
              {/* <a href="#" className="text-sm font-weight-bold">
                Forgot password ?
              </a> */}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-alert">
              New Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                type="password"
                placeholder="New Password"
                className={`form-control form-control-lg form-control-solid ${getInputClasses(
                  "new_password"
                )}`}
                name="new_password"
                {...formik.getFieldProps("new_password")}
              />
              {formik.touched.new_password && formik.errors.new_password ? (
                <div className="invalid-feedback">
                  {formik.errors.new_password}
                </div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-alert">
              Verify Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                type="password"
                placeholder="Verify Password"
                className={`form-control form-control-lg form-control-solid ${getInputClasses(
                  "retype_password"
                )}`}
                name="retype_password"
                {...formik.getFieldProps("retype_password")}
              />
              {formik.touched.retype_password &&
              formik.errors.retype_password ? (
                <div className="invalid-feedback">
                  {formik.errors.retype_password}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* end::Form */}
    </form>
  );
}

export default injectIntl(connect(null, auth.actions)(ChangePassword));
