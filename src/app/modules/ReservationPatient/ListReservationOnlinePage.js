import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import {
  listReservationOnline,
  cancelReservation,
  getScreeningData,
  regisScreeningData,
} from "./_redux/CrudReservationPatient";
import { MODAL } from "../../../service/modalSession/ModalService";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import * as Yup from "yup";
import { useFormik } from "formik";

const headerTable = [
  {
    title: "LABEL.PATIENT_CODE",
  },
  {
    title: "LABEL.REGISTRATION_NO",
  },
  {
    title: "LABEL.PATIENT_NAME",
  },
  {
    title: "LABEL.DATE_OF_VISIT",
  },
  {
    title: "LABEL.POLI",
  },
  {
    title: "LABEL.STATUS",
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
  },
];

const data_ops = [
  {
    label: "LABEL.CHECK_IN",
    icon: "fas fa-user-check text-primary",
    type: "checkin",
  },
  {
    label: "LABEL.CANCEL",
    icon: "fas fa-ban text-danger",
    type: "cancel",
  },
];

const initialValues = {};

function ListReservationOnlinePage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [data, setData] = useState([]);
  const [dialogCancel, setDialogCancel] = useState(false);
  const [dialogCheckIn, setDialogCheckIn] = useState(false);
  const [dataCheckIn, setDataCheckIn] = useState({});
  const [dataScreening, setDataScreening] = useState([]);
  const [dataScreeningErr, setDataScreeningErr] = useState(false);
  const [dataScreeningLoading, setDataScreeningLoading] = useState(false);
  const [itemPasien, setItemPasien] = useState({});
  const suhbeader = useSubheader();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/registry/regis-page/list-online",
        title: intl.formatMessage({ id: "LABEL.REGISTER_ONLINE_RESERVATION" }),
      },
    ]);
    suhbeader.setTitle(
      intl.formatMessage({ id: "LABEL.REGISTER_ONLINE_RESERVATION" })
    );
  }, []);

  const Schema = Yup.object().shape({
    cancel_reason: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoadingCancel(true);
      cancelReservation(itemPasien.id, values)
        .then((result) => {
          callApiListReservationOnline();
          setDialogCancel(false);
          setLoadingCancel(false);
          formik.resetForm();
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
            "success",
            3000
          );
        })
        .catch((err) => {
          setLoadingCancel(false);
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    },
  });

  const callApiListReservationOnline = () => {
    setLoading(true);
    listReservationOnline()
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListReservationOnline, []);

  const handleAction = (type, data) => {
    if (type === "cancel") {
      setItemPasien(data);
      setDialogCancel(true);
    } else if (type === "checkin") {
      callApiGetScreeningData(data.poli_id);
      setDataCheckIn(data);
      setDialogCheckIn(true);
    }
  };

  const callApiGetScreeningData = (idPoli) => {
    setDataScreeningErr(false);
    setDataScreeningLoading(true);
    setDataScreening([]);
    getScreeningData(idPoli)
      .then((result) => {
        setDataScreeningLoading(false);
        setDataScreening(result.data.data);
      })
      .catch((err) => {
        setDataScreeningErr(true);
        setDataScreeningLoading(false);
        MODAL.showSnackbar(err.response.data.messages);
      });
  };
  const saveScreening = (e) => {
    e.preventDefault();
    setDataScreeningLoading(true);
    var screenitems = [];
    for (let i = 0; i < dataScreening.length; i++) {
      var val_desc = document.getElementById(
        (dataScreening[i].nama + dataScreening[i].id)
          .match(/[a-zA-Z0-9]+/g)
          .join("")
      ).value;
      var item = {
        medkind_id: dataScreening[i].medkind_id,
        medform_id: dataScreening[i].medform_id,
        val_desc,
      };
      screenitems.push(item);
    }
    var dataReq = {
      reservasi_id: dataCheckIn.id,
      screenitems,
    };
    regisScreeningData(dataReq)
      .then((result) => {
        callApiListReservationOnline();
        setDialogCheckIn(false);
        setDataScreeningLoading(false);
        setDataScreening([]);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success",
          3000
        );
      })
      .catch((err) => {
        setDataScreeningLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };
  return (
    <React.Fragment>
      <Dialog
        open={dialogCancel}
        maxWidth="sm"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.CANCELLATION_REASON" />
        </DialogTitle>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <DialogContent>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    <FormattedMessage id="LABEL.PATIENT_CODE" />
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={itemPasien.kode_pasien}
                    onChange={() => {}}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="LABEL.PATIENT_NAME" />
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={itemPasien.nama}
                    onChange={() => {}}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="LABEL.DATE_OF_VISIT" />
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={
                      itemPasien.tgl_book
                        ? window
                            .moment(new Date(itemPasien.tgl_book))
                            .format("DD MMM YYYY")
                        : ""
                    }
                    onChange={() => {}}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    <FormattedMessage id="LABEL.REGISTRATION_NO" />
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={itemPasien.code_reg}
                    onChange={() => {}}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="LABEL.POLI" />
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={itemPasien.poli}
                    onChange={() => {}}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cancllationReason">
                <FormattedMessage id="LABEL.NOTES" />:
              </label>
              <textarea
                rows="3"
                className="form-control"
                id="cancllationReason"
                {...formik.getFieldProps("cancel_reason")}
                onFocus={() => {
                  formik.setFieldTouched("cancel_reason", true);
                }}
                required
                disabled={loadingCancel}
              ></textarea>
              {formik.touched.cancel_reason && formik.errors.cancel_reason && (
                <span className="text-left text-danger">
                  {formik.errors.cancel_reason}
                </span>
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setDialogCancel(false);
                formik.resetForm();
              }}
              disabled={loadingCancel}
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
                loadingCancel
              }
            >
              {loadingCancel ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
              {loadingCancel ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Dialog
        open={dialogCheckIn}
        maxWidth="lg"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.CHECKIN_SCREENING" />
          {dataScreeningLoading && (
            <span className="text-danger">
              <i className="fas fa-spinner fa-pulse px-2"></i>
              <FormattedMessage id="LABEL.WAITING" />
            </span>
          )}
        </DialogTitle>
        <form autoComplete="off" onSubmit={saveScreening}>
          <DialogContent>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.PATIENT_CODE" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={dataCheckIn.kode_pasien}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.PATIENT_NAME" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={dataCheckIn.nama}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.POLI" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={dataCheckIn.poli}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.DATE_OF_VISIT" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={window
                        .moment(new Date(dataCheckIn.tgl_book))
                        .format("DD MMM YYYY")}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <h6>
                  <FormattedMessage id="LABEL.PATIENT_SCREENING" />
                </h6>
              </div>
            </div>
            <div className="row">
              {dataScreening.map((item, index) => {
                return (
                  <div key={index.toString()} className="col-md-4">
                    <div className="form-group">
                      <label>{item.nama}</label>
                      {item.datatype === 1 ||
                      item.datatype === 2 ||
                      item.datatype === 3 ||
                      item.datatype === 4 ? (
                        <input
                          type={
                            item.datatype === 1
                              ? "text"
                              : item.datatype === 2 || item.datatype === 3
                              ? "number"
                              : "date"
                          }
                          className="form-control"
                          id={(item.nama + item.id)
                            .match(/[a-zA-Z0-9]+/g)
                            .join("")}
                          disabled={dataScreeningLoading}
                        />
                      ) : (
                        <textarea
                          rows="3"
                          id={(item.nama + item.id)
                            .match(/[a-zA-Z0-9]+/g)
                            .join("")}
                          disabled={dataScreeningLoading}
                        ></textarea>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setDialogCheckIn(false);
              }}
            >
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
            <button
              type="submit"
              className={`btn btn-primary ${dataScreeningErr ? "d-none" : ""}`}
              disabled={dataScreeningLoading}
            >
              <FormattedMessage id="LABEL.SAVE" />
              <i className="fas fa-save ml-2"></i>
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Card>
        <CardBody>
          <TableOnly dataHeader={headerTable} loading={loading} hecto={10}>
            {data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item.kode_pasien}</TableCell>
                  <TableCell>{item.code_reg}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.tgl_book}</TableCell>
                  <TableCell>{item.poli}</TableCell>
                  <TableCell>
                    {item.status === "1" ? (
                      <FormattedMessage id="LABEL.BOOKING" />
                    ) : item.status === "2" ? (
                      <FormattedMessage id="LABEL.CANCELED" />
                    ) : (
                      <FormattedMessage id="LABEL.CHECK_IN" />
                    )}
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
          </TableOnly>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(ListReservationOnlinePage));
