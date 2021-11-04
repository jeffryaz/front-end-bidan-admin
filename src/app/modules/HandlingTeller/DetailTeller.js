import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
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
  savePayment,
  sendSpecialCase,
  getDataResep,
} from "./_redux/CrudHandlingTeller";
import { publish } from "../../../redux/MqttOptions";
import { rupiah } from "../../components/currency";
import NumberFormat from "react-number-format";
import * as auth from "../Auth/_redux/ActionAuth";
import { ReceiptContent } from "../../../service/print/ReceiptContent";
import ReactDOMServer from "react-dom/server";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";

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

function DetailTeller(props) {
  const { intl } = props;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();
  const [dataMedicine, setDataMedicine] = useState([]);
  const resep_id = props.match.params.resep_id;
  const medical_id = props.match.params.medical_id;
  const [handlingFee, setHandlingFee] = useState(0);
  const [dialogProcess, setDialogProcess] = useState(false);
  const [payment, setPayment] = useState(0);
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const user = useSelector(({ auth }) => auth.user, shallowEqual);
  const [content, setContent] = useState({});

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/teller/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/teller/handling-page/process/${resep_id}/${medical_id}`,
        title: intl.formatMessage({ id: "LABEL.DRUG_PAYMENT" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.DRUG_PAYMENT" }));
  }, []);

  const callApiGetMedical = () => {
    setLoading(true);
    // if (medical_id !== "null") {
    //   getMedicalRecord(medical_id)
    //     .then((result) => {
    //       setLoading(false);
    //       setData(result.data.data.form[0]);
    //       setHandlingFee(result.data.data.form[0].fee);
    //       callApiGetMedicine(
    //         result.data.data.resep ? result.data.data.resep : []
    //       );
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
    //     });
    // } else {
    getDataResep(resep_id)
      .then((result) => {
        setLoading(false);
        console.log(result);
        setData(result.data.data.form[0]);
        setHandlingFee(result.data.data.form[0].fee || 0);
        result.data.data.resep.forEach((element) => {
          element.id = element.barang_id;
        });
        callApiGetMedicine(
          result.data.data.resep ? result.data.data.resep : []
        );
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
    // }
  };

  useEffect(callApiGetMedical, []);
  useEffect(() => {
    setPayment(
      data?.special === 0
        ? (handlingFee || 0) + countSubTotal(dataMedicine || [])
        : data?.payamt
    );
  }, [handlingFee, dataMedicine]);

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
    var item = data;
    item.items = dataMedicine;
    item.petugas = user;
    item.handlingFee = handlingFee;
    item.payment = payment;
    setContent(item);
    setLoadingSubmit(true);
    var data_ = {
      resep_id,
      pay_amt: payment,
    };
    savePayment(data_)
      .then((result) => {
        setLoadingSubmit(false);
        setDialogProcess(true);
        handleContentPrint(item);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        console.log("err", err);
        setLoadingSubmit(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const handleContentPrint = (item = content) => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <ReceiptContent data={item} />
    );
    var mywindow = window.open();
    mywindow.document.write(
      "<html><head><title>" +
        data.code_reg +
        "-" +
        data.pasien +
        "-" +
        window.moment(new Date(data.created_at)).format("DD MMM YYYY") +
        "-" +
        data.poli +
        "</title>"
    );
    mywindow.document.write(
      "<html></head><body style='margin: 0 !important;' >"
    );
    mywindow.document.write(html.toString());
    mywindow.document.write("</body></html>");

    mywindow.document.close();
    mywindow.focus();
    setTimeout(() => {
      mywindow.print();
      mywindow.close();
    }, 500);
  };

  const countSubTotal = (data) => {
    var count = 0;
    data.map((item) => {
      count += item.harga * item.qty;
    });
    return count;
  };
  const handleSpecialCase = () => {
    setLoadingSubmit(true);
    sendSpecialCase(resep_id)
      .then((result) => {
        setLoadingSubmit(false);
        props.history.replace(`/teller/dashboard`);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        console.log("err", err);
        setLoadingSubmit(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialogProcess}
        // keepMounted
        maxWidth="xs"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.DONE" />
        </DialogTitle>

        <DialogContent>
          <button
            type="button"
            onClick={() => {
              handleContentPrint();
            }}
            className="btn btn-primary w-100 my-3"
          >
            <FormattedMessage id="LABEL.PRINT" />
          </button>
          <button
            type="button"
            onClick={() => {
              setDialogProcess(false);
              props.history.replace(`/teller/dashboard`);
            }}
            className="btn btn-success w-100 my-3"
          >
            <FormattedMessage id="LABEL.DONE" />
          </button>
        </DialogContent>
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
                    Nomor Kunjungan: {data.kode_trans}
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
                  <h4 className="text-dark mb-1">{data.nama}</h4>
                  <span className="text-muted">{data.poli || "-"}</span>
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
              <CardHeaderToolbar></CardHeaderToolbar>
            </CardHeader>
            <CardBody>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nama Obat</th>
                    <th>Unit</th>
                    <th>Harga</th>
                    <th>Sub Total</th>
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
                        <td>{rupiah(item.harga)}</td>
                        <td>{rupiah(item.harga * item.qty)}</td>
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
                            </tr>
                          );
                        })}
                    </tbody>
                  );
                })}
                <tbody>
                  <tr>
                    <th colSpan="2"></th>
                    <th>
                      <FormattedMessage id="LABEL.TOTAL" />
                    </th>
                    <th colSpan="2">
                      {data?.special === 0
                        ? rupiah(countSubTotal(dataMedicine))
                        : rupiah(data?.payamt)}
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
                    <th>Biaya Penanganan</th>
                    <th colSpan="2">{rupiah(handlingFee)}</th>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
                    <th>
                      <FormattedMessage id="LABEL.GRAND_TOTAL" />
                    </th>
                    <th colSpan="2">
                      {data?.special === 0
                        ? rupiah(handlingFee + countSubTotal(dataMedicine))
                        : rupiah(data?.payamt)}
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
                    <th>Bayar</th>
                    <th colSpan="2">
                      <NumberFormat
                        value={payment}
                        id={
                          loadingSubmit
                            ? "NumberFormat-text"
                            : "NumberFormat-input"
                        }
                        displayType="input"
                        className="form-control"
                        allowEmptyFormatting={true}
                        allowLeadingZeros={false}
                        allowNegative={false}
                        thousandSeparator={true}
                        prefix={"Rp "}
                        onValueChange={(e) => {
                          setPayment(e.floatValue ? e.floatValue : 0);
                        }}
                        onClick={(e) => {
                          e.target.focus();
                          e.target.select();
                        }}
                      />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
                    <th>Kembalian</th>
                    <th colSpan="2">
                      {data?.special === 0
                        ? rupiah(
                            payment -
                              (handlingFee + countSubTotal(dataMedicine))
                          )
                        : rupiah(payment - data?.payamt)}
                    </th>
                  </tr>
                </tbody>
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
          disabled={loadingSubmit}
          onClick={() => {
            history.push(`/teller/dashboard`);
          }}
        >
          <i className="fas fa-times-circle d-block p-0"></i>
          <span className="font-size-xs">Cancel</span>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm my-2"
          style={{ width: 60 }}
          disabled={
            loadingSubmit || data?.special === 0
              ? payment - (handlingFee + countSubTotal(dataMedicine)) < 0
              : payment - data?.payamt < 0
          }
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
        <button
          type="button"
          className="btn btn-warning btn-sm my-2"
          style={{ width: 60 }}
          disabled={loadingSubmit}
          onClick={() => {
            handleSpecialCase();
          }}
        >
          <i className="fas fa-info-circle d-block p-0"></i>
          <span className="font-size-xs">
            <FormattedMessage id="LABEL.SPECIAL_CASE" />
          </span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(DetailTeller));
