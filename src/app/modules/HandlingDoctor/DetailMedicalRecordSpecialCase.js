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
  submitMedicalRecordSpecialCase,
  getSpecialCase,
  getTakaran,
} from "./_redux/CrudHandlingDoctor";
import { publish, callSpecialCase } from "../../../redux/MqttOptions";
import { rupiah } from "../../components/currency";
import NumberFormat from "react-number-format";
import * as auth from "../Auth/_redux/ActionAuth";
import Select from "react-select";
import { cloneDeep } from "lodash";

const optionParameter = [
  { value: "1", label: "Rawat Inap" },
  { value: "2", label: "Rawat Jalan" },
];

function DetailMedicalRecordSpecialCase(props) {
  const { intl } = props;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({});
  const suhbeader = useSubheader();
  const [dataMedicine, setDataMedicine] = useState([]);
  const [specialCase, setSpecialCase] = useState({});
  const [handlingFee, setHandlingFee] = useState(0);
  const id = props.match.params.id;
  const antrian_id = props.match.params.antrian_id;
  const medicalRecordId = props.match.params.medicalRecordId;
  let { medicinePatient } = useSelector((state) => state.auth, shallowEqual);
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const [selectedParameter, setSelectedParameter] = useState({
    value: "2",
    label: "Rawat Jalan",
  });
  const [selectedTakaran, setSelectedTakaran] = useState(null);
  const [optionTakaran, setOptionTakaran] = useState([]);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/doctor/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/doctor/handling-page/process-special/${id}/${antrian_id}/${medicalRecordId}`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }));
  }, []);

  const callApiGetMedical = () => {
    setLoading(true);
    getSpecialCase(id)
      .then((result) => {
        setLoading(false);
        setSpecialCase({
          payamt: result.data.data.resep[0].payamt,
          special: result.data.data.resep[0].special,
        });
        setData(result.data.data.resep[0]);
        setHandlingFee(result.data.data.resep[0].fee || 0);
        if (
          (medicinePatient && medicinePatient.length === 0) ||
          !medicinePatient
        ) {
          // setDataMedicine(result.data.data.resep ? result.data.data.resep : []);
          props.setMedicinePatient(
            result.data.data.detail ? result.data.data.detail : []
          );
          callApiGetMedicine(
            result.data.data.detail ? result.data.data.detail : []
          );
        }
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
            var result = await getMedicineById(data[i].barang_id);
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

  useEffect(() => {
    async function callApiGetMedicine() {
      if (medicinePatient && medicinePatient.length > 0) {
        var data = medicinePatient;
        var waiting = new Promise(async (resolve, reject) => {
          for (let i = 0; i < data.length; i++) {
            try {
              var result = await getMedicineById(data[i].barang_id);
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
    callApiGetMedicine();
  }, []);

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

  const mqttPublishSpecialCase = () => {
    if (client) {
      const {
        topicCallSpecialCase,
        qosCallSpecialCase,
        payloadCallSpecialCase,
      } = callSpecialCase;
      client.publish(
        topicCallSpecialCase,
        payloadCallSpecialCase,
        { qosCallSpecialCase },
        (error) => {
          if (error) {
            console.log("Publish error: ", error);
          }
        }
      );
    }
  };

  const countSubTotal = (data) => {
    var count = 0;
    data.map((item) => {
      count += item.harga * item.qty;
    });
    return count;
  };

  const callApiSubmitMedicalRecord = () => {
    setLoadingSubmit(true);
    // dataMedicine.forEach((element) => (element.barang_id = element.id));
    var data = {
      payamt: specialCase?.payamt,
    };
    submitMedicalRecordSpecialCase(id, data)
      .then((result) => {
        setLoadingSubmit(false);
        props.setMedicinePatient([]);
        history.replace(`/doctor/dashboard`);
        mqttPublish();
        mqttPublishSpecialCase();
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
      <div className="row">
        <div className="col-md-4">
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
                    Nomor Kunjungan: {data.code_trans}
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
        <div className="col-md-4">
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
                  {/* <span className="text-muted">{data.poli}</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-custom gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-40 symbol-light-danger mr-5">
                  <span className="symbol-label">
                    <i className="fas fa-user-md h-75 align-self-end font-size-h1"></i>
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <Select
                    value={selectedParameter}
                    options={optionParameter}
                    isDisabled={false}
                    className="form-control form-control-sm border-0 p-0 h-100"
                    classNamePrefix="react-select"
                    onChange={(value) => {
                      setSelectedParameter(value);
                    }}
                  />
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
                {/* <Link
                  to={`/doctor/handling-page/process/${id}/${antrian_id}/${medicalRecordId}/medicine-list`}
                  className="btn btn-primary"
                >
                  <i className="fas fa-prescription-bottle-alt mx-1"></i>
                  Penambahan Obat
                </Link> */}
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
                    <th>Aksi</th>
                  </tr>
                </thead>
                {dataMedicine.map((item, index) => {
                  return (
                    <tbody key={index.toString()}>
                      <tr>
                        <td>{item.nama}</td>
                        <td className="td-10">
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
                              if (
                                data[idx].composite_item &&
                                data[idx].composite_item.length > 0
                              ) {
                                data[idx].composite_item.map((value) => {
                                  if (!value.initialQty) {
                                    value.initialQty = value.qty;
                                  }
                                  return (value.qty =
                                    value.initialQty * data[idx].qty);
                                });
                              }
                              setDataMedicine(data);
                            }}
                          />
                        </td>
                        <td className="td-10"></td>
                        <td className="td-1">X</td>
                        <td className="td-10"></td>
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
                            className="form-control form-control-sm border-0 p-0 h-100"
                            classNamePrefix="react-select"
                          />
                        </td>
                        <td>{rupiah(item.harga)}</td>
                        <td>{rupiah(item.harga * item.qty)}</td>
                        <td>
                          <i
                            className="far fa-trash-alt text-danger cursor-pointer"
                            onClick={() => {
                              var data = Object.assign([], dataMedicine);
                              var idx = data.findIndex(
                                (value) => value.id === item.id
                              );
                              data.splice(idx, 1);
                              setDataMedicine(data);
                              props.setMedicinePatient(data);
                            }}
                          ></i>
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
                                  value={value.qty}
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
                <tbody>
                  <tr>
                    <th colSpan="5"></th>
                    <th>Biaya Penanganan</th>
                    <th colSpan="3">
                      <NumberFormat
                        id={
                          specialCase?.special === 0
                            ? "NumberFormat-input"
                            : "NumberFormat-text"
                        }
                        value={handlingFee}
                        displayType={
                          specialCase?.special === 0 ? "input" : "text"
                        }
                        className="form-control"
                        allowEmptyFormatting={true}
                        allowLeadingZeros={true}
                        thousandSeparator={true}
                        allowNegative={false}
                        prefix={"Rp "}
                        onValueChange={(e) => {
                          setHandlingFee(e.floatValue ? e.floatValue : 0);
                        }}
                        onClick={(e) => {
                          if (specialCase?.special === 0) {
                            e.target.focus();
                            e.target.select();
                          }
                        }}
                      />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="5"></th>
                    <th>
                      <span
                        style={{ verticalAlign: "middle" }}
                        // onClick={() => {
                        //   var item = cloneDeep(specialCase);
                        //   item.special = specialCase.special === 0 ? 1 : 0;
                        //   setSpecialCase(item);
                        // }}
                      >
                        {specialCase?.special !== 0 ? (
                          <i className="fas fa-toggle-on text-primary font-size-h1 px-1 cursor-pointer"></i>
                        ) : (
                          <i className="fas fa-toggle-off text-danger font-size-h1 px-1 cursor-pointer"></i>
                        )}
                      </span>
                      Spesial Kasus
                    </th>
                    <th colSpan="3">
                      <NumberFormat
                        id={
                          specialCase?.special !== 0
                            ? "NumberFormat-input"
                            : "NumberFormat-text"
                        }
                        value={specialCase?.payamt || 0}
                        displayType={
                          specialCase?.special !== 0 ? "input" : "text"
                        }
                        className="form-control"
                        allowEmptyFormatting={true}
                        allowLeadingZeros={true}
                        thousandSeparator={true}
                        allowNegative={false}
                        prefix={"Rp "}
                        onValueChange={(e) => {
                          var item = cloneDeep(specialCase);
                          item.payamt = e.floatValue ? e.floatValue : 0;
                          setSpecialCase(item);
                        }}
                        onClick={(e) => {
                          if (specialCase?.special !== 0) {
                            e.target.focus();
                            e.target.select();
                          }
                        }}
                      />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="5"></th>
                    <th>Total</th>
                    <td colSpan="3">
                      {specialCase.special === 0
                        ? rupiah(handlingFee + countSubTotal(dataMedicine))
                        : rupiah(specialCase?.payamt || 0)}
                    </td>
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
          disabled={loadingSave || loadingSubmit}
          onClick={() => {
            history.replace(`/doctor/dashboard`);
            props.setMedicinePatient([]);
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

export default injectIntl(
  connect(null, auth.actions)(DetailMedicalRecordSpecialCase)
);
