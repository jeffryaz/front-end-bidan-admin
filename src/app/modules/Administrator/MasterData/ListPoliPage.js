import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  listPoliPagination,
  craetePoli,
  getPoliById,
  editPoliById,
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
import ButtonAction from "../../../components/buttonAction/ButtonAction";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import Select from "react-select";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import * as Yup from "yup";
import { useFormik } from "formik";
import { hostBase } from "../../../../redux/setupAxios";

const headerTable = [
  {
    title: "LABEL.POLI",
    name: "poli",
    order: {
      active: true,
      status: true,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.ROOM",
    name: "ruangan",
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
    title: "LABEL.DATE_UPDATED",
    name: "updated_at",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "date",
    },
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "true",
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

function ListPoliPage(props) {
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

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/master-data-page/poli`,
        title: intl.formatMessage({ id: "LABEL.POLI" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.POLI" }));
  }, []);

  const Schema = Yup.object().shape({
    poli: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    ruangan: Yup.string().required(
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
        craetePoli(values)
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
            setLoadingSave(false);
            MODAL.showSnackbar(err.response?.data.messages);
          });
      } else {
        editPoliById(statusDialog, values)
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
    listPoliPagination(params)
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

  const handleAction = (type, data) => {
    setStatusDialog(data.id);
    getPoliById(data.id)
      .then((result) => {
        formik.setValues(result.data.data);
        formik.setFieldTouched("poli", true);
        setDialog(true);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialog}
        maxWidth="xs"
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
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                <FormattedMessage id="LABEL.POLI" />
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("poli")}
                />
                {formik.touched.poli && formik.errors.poli && (
                  <span className="text-left text-danger">
                    {formik.errors.poli}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                <FormattedMessage id="LABEL.ROOM" />
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("ruangan")}
                />
                {formik.touched.ruangan && formik.errors.ruangan && (
                  <span className="text-left text-danger">
                    {formik.errors.ruangan}
                  </span>
                )}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                !formik.isValid ||
                (Object.keys(formik.touched).length === 0 &&
                  formik.touched.constructor === Object) ||
                loadingSave
              }
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
              <i className="fas fa-plus-circle"></i>
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
            hecto={5}
          >
            {data.data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item?.poli}</TableCell>
                  <TableCell>{item?.ruangan}</TableCell>
                  <TableCell>
                    {window
                      .moment(new Date(item?.updated_at))
                      .format("DD MMM YYYY")}
                  </TableCell>
                  <TableCell>
                    <ButtonAction
                      data={item}
                      handleAction={handleAction}
                      ops={data_ops}
                    />
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

export default injectIntl(connect(null, auth.actions)(ListPoliPage));
