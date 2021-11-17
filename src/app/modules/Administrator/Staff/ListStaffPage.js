import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  ListStaffPagination,
  createStaff,
  editDoctorById,
  activeStaff,
  inActiveStaff,
} from "../_redux/CrudAdministrator";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
import Tables from "../../../components/tableCustomV1/table";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../../Auth/_redux/ActionAuth";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import Select from "react-select";
import * as Yup from "yup";
import { useFormik } from "formik";

const headerTable = [
  {
    title: "LABEL.NAME",
    name: "nama",
    order: {
      active: true,
      status: true,
      type: true,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.EMAIL",
    name: "email",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.POSITION",
    name: "role_id",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "text",
    },
  },
  {
    title: "LABEL.STATUS",
    name: "status",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "text",
    },
  },
];

const data_ops = [
  {
    label: "LABEL.DETAIL",
    icon: "fas fa-external-link-alt text-primary",
    type: "open",
  },
];

const initialValues = {};

const optionParameter = [
  { value: 1, label: "Pendaftaran" },
  { value: 3, label: "Kasir" },
  { value: 4, label: "Apoteker" },
  { value: 5, label: "Administrator" },
];

function ListStaffPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const history = useHistory();
  const [dialog, setDialog] = useState(false);
  const [paramTable, setParamTable] = useState("");
  const [statusDialog, setStatusDialog] = useState(null);
  const [selectedParameter, setSelectedParameter] = useState({});

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/staff-page/list`,
        title: intl.formatMessage({ id: "LABEL.STAFF_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.STAFF_LIST" }));
  }, []);

  const Schema = Yup.object().shape({
    nama: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    email: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    role: Yup.string().required(
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
      if (!statusDialog) {
        createStaff(selectedParameter.value, values)
          .then((result) => {
            requestApi(paramTable);
            formik.resetForm();
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success",
              3000
            );
            setDialog(false);
            setLoadingSave(false);
            setSelectedParameter({});
          })
          .catch((err) => {
            setLoadingSave(false);
            MODAL.showSnackbar(err.response?.data.messages);
          });
      } else {
        editDoctorById(statusDialog, values)
          .then((result) => {
            requestApi(paramTable);
            formik.resetForm();
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success",
              3000
            );
            setDialog(false);
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

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    setParamTable(params);
    ListStaffPagination(params)
      .then((result) => {
        setLoading(false);
        setData({
          ...data,
          count: 0,
          data: result.data.data,
        });
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const callApiActive = (id) => {
    activeStaff(id)
      .then((result) => {
        requestApi(paramTable);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const callApiInActive = (id) => {
    inActiveStaff(id)
      .then((result) => {
        requestApi(paramTable);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialog}
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {statusDialog ? (
            <FormattedMessage id="LABEL.EDIT" />
          ) : (
            <FormattedMessage id="LABEL.ADD" />
          )}
        </DialogTitle>
        <form
          className="form"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <DialogContent>
            <div style={{ minHeight: "20rem" }}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  <FormattedMessage id="LABEL.POSITION" />
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <Select
                    value={selectedParameter}
                    options={optionParameter}
                    isDisabled={loadingSave}
                    className="form-control border-0 p-0 h-100 rounded-0"
                    classNamePrefix="react-select"
                    // menuPlacement="top"
                    onChange={(value) => {
                      setSelectedParameter(value);
                      formik.setFieldValue("role", value.value);
                    }}
                    onBlur={() => {
                      formik.setFieldTouched({ ...formik, role: true });
                    }}
                  />
                  {formik.errors.role && (
                    <span className="text-left text-danger">
                      {formik.errors.role}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  <FormattedMessage id="LABEL.NAME" />
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    disabled={loadingSave}
                    {...formik.getFieldProps("nama")}
                  />
                  {formik.errors.nama && (
                    <span className="text-left text-danger">
                      {formik.errors.nama}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  <FormattedMessage id="LABEL.EMAIL" />
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    disabled={loadingSave}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.errors.email && (
                    <span className="text-left text-danger">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formik.isValid || loadingSave}
            >
              {loadingSave ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingSave ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setDialog(false);
                formik.resetForm();
                setSelectedParameter({});
              }}
              disabled={loadingSave}
            >
              <i className="fas fa-times px-1"></i>
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Card>
        <CardHeader title="">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setStatusDialog(null);
                setDialog(true);
              }}
            >
              <i className="fas fa-user-plus"></i>
              <FormattedMessage id="LABEL.ADD" />
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <Tables
            dataHeader={headerTable}
            handleParams={requestApi}
            loading={loading}
            err={err}
            countData={data.count}
            hecto={10}
          >
            {data.data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item?.nama}</TableCell>
                  <TableCell>{item?.email}</TableCell>
                  <TableCell>
                    {item?.role_id === 1 ? (
                      <FormattedMessage id="LABEL.REGISTRY" />
                    ) : item?.role_id === 2 ? (
                      <FormattedMessage id="LABEL.DOCTOR" />
                    ) : item?.role_id === 3 ? (
                      <FormattedMessage id="LABEL.CASHIER" />
                    ) : item?.role_id === 4 ? (
                      <FormattedMessage id="LABEL.PHARMACISTS" />
                    ) : (
                      <FormattedMessage id="LABEL.ADMINISTRATOR" />
                    )}
                  </TableCell>
                  <TableCell>
                    {item.stop_mk === "N" ? (
                      <i
                        className="fas fa-toggle-on font-size-h2 text-primary cursor-pointer"
                        onClick={() => {
                          callApiInActive(item.id);
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-toggle-off font-size-h2 text-danger cursor-pointer"
                        onClick={() => {
                          callApiActive(item.id);
                        }}
                      ></i>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </Tables>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(ListStaffPage));
