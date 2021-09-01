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
  listReservationOffline,
  cancelReservation,
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
    label: "LABEL.CANCEL",
    icon: "fas fa-ban text-danger",
    type: "cancel",
  },
];

const initialValues = {};

function ListReservationOfflinePage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [data, setData] = useState([]);
  const [dialogCancel, setDialogCancel] = useState(false);
  const [itemPasien, setItemPasien] = useState({});
  const suhbeader = useSubheader();
  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/registry/regis-page/list-offline",
        title: intl.formatMessage({ id: "LABEL.REGISTER_OFFLINE_RESERVATION" }),
      },
    ]);
    suhbeader.setTitle(
      intl.formatMessage({ id: "LABEL.REGISTER_OFFLINE_RESERVATION" })
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
          callApiListReservationOffline();
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

  const callApiListReservationOffline = () => {
    setLoading(true);
    listReservationOffline()
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListReservationOffline, []);

  const handleAction = (type, data) => {
    if (type === "cancel") {
      setItemPasien(data);
      setDialogCancel(true);
    }
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
                    ) : item.status === "3" ? (
                      <FormattedMessage id="LABEL.CHECKIN_SCREENING" />
                    ) : item.status === "4" ? (
                      <FormattedMessage id="LABEL.POLI_PROCESS" />
                    ) : item.status === "5" ? (
                      <FormattedMessage id="LABEL.PHARMACIST" />
                    ) : item.status === "6" ? (
                      <FormattedMessage id="LABEL.PAYMENT" />
                    ) : (
                      <FormattedMessage id="LABEL.FINISH" />
                    )}
                  </TableCell>
                  <TableCell>
                    {item.status !== "2" && (
                      <ButtonAction
                        data={item}
                        handleAction={handleAction}
                        ops={data_ops}
                      />
                    )}
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

export default injectIntl(connect(null, null)(ListReservationOfflinePage));
