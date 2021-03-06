import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { MODAL } from "../../../service/modalSession/ModalService";
import { useSubheader } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory, Link } from "react-router-dom";
import {
  getMedicineById,
  cancelMedicalRecord,
  saveApotek,
  getMedicalRecord,
} from "./_redux/CrudHandlingPharmacist";
import { publish } from "../../../redux/MqttOptions";
import { rupiah } from "../../components/currency";
import NumberFormat from "react-number-format";
import * as auth from "../Auth/_redux/ActionAuth";
import Select from "react-select";
import { getTakaran } from "../HandlingDoctor/_redux/CrudHandlingDoctor";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function comparerData(otherArray) {
  return function (current) {
    return (
      otherArray.filter(function (other) {
        // wajib compare data yang tidak boleh berubah. contoh ID. sisanya boleh compare dengan data yang berubah.
        return other.id === current.id;
      }).length === 0
    );
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  heading_new: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "96.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  details: {
    alignItems: "center",
    display: "block",
  },
  column: {
    flexBasis: "33.33%",
  },
}));

function DetailPharmacist(props) {
  const { intl } = props;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({});
  const [Lab, setLab] = useState({});
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();
  const [dataScreening, setDataScreening] = useState([]);
  const [dataMedicine, setDataMedicine] = useState([]);
  const [readyOrder, setReadyOrder] = useState([]);
  const [dialogResume, setDialogResume] = useState(false);
  const id = props.match.params.id;
  const resep_id = props.match.params.resep_id;
  const medical_id = props.match.params.medical_id;
  let medicinePatient = useSelector(
    (state) => state.auth.medicinePatient,
    shallowEqual
  );
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const [optionTakaran, setOptionTakaran] = useState([]);
  const [selectedTakaran] = useState(null);
  const classes = useStyles();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/pharmacist/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/pharmacist/handling-page/process/${medical_id}/${resep_id}`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }));
  }, []);

  const callApiGetMedical = () => {
    setLoading(true);
    getMedicalRecord(medical_id)
      .then((result) => {
        setLoading(false);
        setData(result.data.data.form[0]);
        setDataScreening(result.data.data.screen);
        setLab(result.data.data.labs ? result.data.data.labs : {});

        callApiGetMedicine(
          result.data.data.resep ? result.data.data.resep : []
        );
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiGetMedical, []);

  const callApiGetTakaran = () => {
    setLoading(true);
    getTakaran()
      .then((result) => {
        result.data.data.forEach((element) => {
          element.value = element.id;
          element.label = element.takaran;
        });
        setOptionTakaran(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiGetTakaran, []);

  async function callApiGetMedicine(dataMedicinePatient) {
    if (dataMedicinePatient && dataMedicinePatient.length > 0) {
      var data = dataMedicinePatient;
      var waiting = new Promise(async (resolve, reject) => {
        for (let i = 0; i < data.length; i++) {
          try {
            var result = await getMedicineById(data[i].id);
            data[i].composite_item = result.data.data.composite_item;
            data[i].qty = data[i].qty ? data[i].qty : 1;
            if (i === data.length - 1) resolve();
          } catch (error) {
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
            if (i === data.length - 1) resolve();
          }
        }
      });
      await waiting;
      setDataMedicine(data);
    }
  }

  // useEffect(() => {
  //   async function callApiGetMedicine() {
  //     if (medicinePatient && medicinePatient.length > 0) {
  //       var data = medicinePatient;
  //       var waiting = new Promise(async (resolve, reject) => {
  //         for (let i = 0; i < data.length; i++) {
  //           try {
  //             var result = await getMedicineById(data[i].id);
  //             data[i].composite_item = result.data.data.composite_item;
  //             data[i].qty = data[i].qty ? data[i].qty : 1;
  //             if (i === data.length - 1) resolve();
  //           } catch (error) {
  //             MODAL.showSnackbar(
  //               intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
  //             );
  //             if (i === data.length - 1) resolve();
  //           }
  //         }
  //       });
  //       await waiting;
  //       setDataMedicine(data);
  //     }
  //   }
  //   callApiGetMedicine();
  // }, []);

  const mqttPublish = () => {
    if (client) {
      const { topic, qos, payload } = publish;
      client.publish(topic, payload, { qos }, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        }
      });
    }
  };

  const callApiSubmitMedicalRecord = () => {
    setLoadingSubmit(true);
    var data = dataMedicine.filter(comparerData(readyOrder));
    data.forEach((element) => (element.barang_id = element.id));
    var data = {
      resep_id,
      preorder: data,
    };
    saveApotek(data)
      .then((result) => {
        mqttPublish();
        setLoadingSubmit(false);
        history.replace(`/pharmacist/dashboard`);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        setLoadingSubmit(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialogResume}
        maxWidth="lg"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.MEDICAL_RECORD" />
        </DialogTitle>
        <DialogContent>
          {dataScreening.map((item, index) => (
            <ListItem
              key={index.toString()}
              index={index.toString()}
              item={item}
              classes={classes}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setDialogResume(false);
            }}
          >
            <FormattedMessage id="LABEL.OK" />
          </button>
        </DialogActions>
      </Dialog>
      <div className="row">
        <div className="col-md-6">
          <div className="card card-custom wave wave-animate-fast wave-primary gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-40 symbol-light-danger mr-5">
                  <span className="symbol-label">
                    <i className="fas fa-hospital-user h-75 align-self-end font-size-h1"></i>
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <h4 className="text-dark mb-1">
                    Nomor Kunjungan: {data.code_reg}
                  </h4>
                  <span className="text-muted">
                    {data.created_at
                      ? window
                          .moment(new Date(data.created_at))
                          .format("DD MMM YYYY")
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-custom wave wave-animate-fast wave-primary gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-40 symbol-light-danger mr-5">
                  <span className="symbol-label">
                    <i className="fas fa-user-nurse h-75 align-self-end font-size-h1"></i>
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <h4 className="text-dark mb-1">{data.pasien}</h4>
                  <span className="text-muted">{data.poli}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Resep Yang Diberikan">
              <CardHeaderToolbar>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setDialogResume(true);
                  }}
                >
                  Lihat Rekam Medis
                </button>
              </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nama Obat</th>
                    <th>Unit</th>
                    <th colSpan={4} className="text-center">
                      Takaran
                    </th>
                    <th>Harga</th>
                    <th>Sub Total</th>
                    <th>
                      <FormattedMessage id="LABEL.AVAILABLE" />
                    </th>
                  </tr>
                </thead>
                {dataMedicine.map((item, index) => {
                  return (
                    <tbody key={index.toString()}>
                      <tr>
                        <td>{item.nama}</td>
                        <td>
                          <NumberFormat
                            value={item.qty}
                            id="NumberFormat-text"
                            displayType="text"
                            className="form-control"
                            allowEmptyFormatting={true}
                            allowLeadingZeros={false}
                            allowNegative={false}
                            onValueChange={(e) => {
                              var data = Object.assign([], dataMedicine);
                              var idx = data.findIndex(
                                (value) => value.id === item.id
                              );
                              data[idx].qty = e.floatValue ? e.floatValue : 0;
                              setDataMedicine(data);
                            }}
                          />
                        </td>
                        <td
                          style={{
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          {item?.eat_qty}
                        </td>
                        <td
                          className="td-1"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          X
                        </td>
                        <td
                          style={{
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          {item?.day_qty}
                        </td>
                        <td className="td-20">
                          <Select
                            value={
                              item?.takaran_id
                                ? optionTakaran.filter(
                                    (value) => value.value === item?.takaran_id
                                  ).length > 0
                                  ? optionTakaran.filter(
                                      (value) =>
                                        value.value === item?.takaran_id
                                    )[0]
                                  : selectedTakaran
                                : null
                            }
                            options={optionTakaran}
                            isDisabled={true}
                            isClearable={false}
                            className="form-control form-control-sm border-0 p-0 h-100"
                            classNamePrefix="react-select"
                            onChange={(value) => {
                              // var data = Object.assign([], dataMedicine);
                              // var idx = data.findIndex(
                              //   (value) => value.id === item.id
                              // );
                              // data[idx].takaran_id = value ? value.value : null;
                              // setDataMedicine(data);
                            }}
                          />
                        </td>
                        <td>{rupiah(item.harga)}</td>
                        <td>{rupiah(item.harga * item.qty)}</td>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            style={{ width: 25, height: 25 }}
                            onChange={(e) => {
                              var data = Object.assign([], readyOrder);
                              if (e.target.checked) {
                                data.push(item);
                              } else {
                                var idx = data.findIndex(
                                  (value) => value.id === item.id
                                );
                                data.splice(idx, 1);
                              }
                              setReadyOrder(data);
                            }}
                            disabled={loadingSubmit}
                          />
                        </td>
                      </tr>
                      {item.composite_item &&
                        item.composite_item.map((value, idx) => {
                          return (
                            <tr
                              key={idx.toString()}
                              style={{ backgroundColor: "#F3F6F9" }}
                            >
                              <td className="pl-10">{value.nama}</td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={value.qty * item.qty}
                                  onChange={() => {}}
                                  disabled
                                />
                              </td>
                              <td>{rupiah(0)}</td>
                              <td>{rupiah(0)}</td>
                              <td></td>
                            </tr>
                          );
                        })}
                    </tbody>
                  );
                })}
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="toolbar-custom scrolltop">
        <button
          type="button"
          className="btn btn-danger btn-sm my-2"
          style={{ width: 60 }}
          disabled={loadingSave || loadingSubmit}
          onClick={() => {
            history.push(`/pharmacist/dashboard`);
          }}
        >
          <i className="fas fa-times-circle d-block p-0"></i>
          <span className="font-size-xs">Cancel</span>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm my-2"
          style={{ width: 60 }}
          disabled={loadingSave || loadingSubmit}
          onClick={() => {
            callApiSubmitMedicalRecord();
          }}
        >
          {loadingSubmit ? (
            <i className="fas fa-spinner fa-pulse p-2"></i>
          ) : (
            <i className="fas fa-check d-block p-0"></i>
          )}
          <span className="font-size-xs">Submit</span>
        </button>
      </div>
    </React.Fragment>
  );
}

function ListItem({ item, classes, index }) {
  let children = null;
  children = (
    <div className="w-100">
      <div className="row">
        {item.subtitle &&
          item.subtitle.map((i, idx) => (
            <div className="col-12" key={idx.toString()}>
              <ListItem
                item={i}
                index={
                  index && typeof index === "string"
                    ? index + "," + idx.toString()
                    : null
                }
                classes={classes}
              />
            </div>
          ))}

        {item.input &&
          item.input.map((a, adx) => (
            <div className="col-12" key={adx.toString()}>
              <div className="form-group">
                <label>{a.medkind?.nama}</label>
                <div className="input-group mb-3">
                  {a.medkind.datatype === 1 ||
                  a.medkind.datatype === 2 ||
                  a.medkind.datatype === 3 ||
                  a.medkind.datatype === 4 ? (
                    <input
                      id={`input-${item.id}-${a.id}`}
                      type={
                        a.medkind.datatype === 1
                          ? "text"
                          : a.medkind.datatype === 2 || a.medkind.datatype === 3
                          ? "number"
                          : "date"
                      }
                      className={`form-control ${
                        a.val_desc && a.val_desc.trim().length !== 0
                          ? "border-valid-input"
                          : ""
                      }`}
                      value={a.val_desc || ""}
                      onChange={(e) => {}}
                      disabled
                    />
                  ) : (
                    <textarea
                      rows="3"
                      id={`input-${item.id}-${a.id}`}
                      className={`form-control ${
                        a.val_desc && a.val_desc.trim().length !== 0
                          ? "border-valid-input"
                          : ""
                      }`}
                      value={a.val_desc || ""}
                      onChange={(e) => {}}
                      disabled
                    ></textarea>
                  )}
                  <div className="input-group-append">
                    <span className="input-group-text">{a.medkind?.unit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <ExpansionPanel defaultExpanded={false} className="my-5 rounded-top w-100">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <span className={classes.heading_new} id={index}>
          {item.title}
        </span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        {children}
      </ExpansionPanelDetails>
      <Divider />
    </ExpansionPanel>
  );
}

export default injectIntl(connect(null, auth.actions)(DetailPharmacist));
