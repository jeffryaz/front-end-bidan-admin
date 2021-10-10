import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
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
  listAllPatient,
  getMedicineById,
  addDrugNonDoctor,
} from "./_redux/CrudHandlingPharmacist";
import { MODAL } from "../../../service/modalSession/ModalService";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import * as Yup from "yup";
import { useFormik } from "formik";
import { rupiah } from "../../components/currency";
import Select from "react-select";
import NumberFormat from "react-number-format";
import { useHistory, Link } from "react-router-dom";
import { publish } from "../../../redux/MqttOptions";
import * as auth from "../Auth/_redux/ActionAuth";

function DrugPurchasePage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [stateForm, setStateForm] = useState(2);
  const suhbeader = useSubheader();
  const [selectedParameterPatient, setSelectedParameterPatient] = useState({});
  const [optionParameterPatient, setOptionParameterPatient] = useState([]);
  const [formNonMember, setFormNonMember] = useState({
    cust_nm: "",
    phone_no: "",
  });
  const history = useHistory();
  const [dataMedicine, setDataMedicine] = useState([]);
  let { medicinePatient } = useSelector((state) => state.auth, shallowEqual);
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/pharmacist/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/pharmacist/drug-purchase",
        title: intl.formatMessage({ id: "LABEL.DRUG_PURCHASE" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.DRUG_PURCHASE" }));
  }, []);

  const callApiListPatient = () => {
    listAllPatient()
      .then((result) => {
        var data = result.data.data.rows;
        data.forEach((element) => {
          element.value = element.id;
          element.label = element.kode_pasien + "-" + element.nama;
        });
        setOptionParameterPatient(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListPatient, []);

  const countSubTotal = (data) => {
    var count = 0;
    data.map((item) => {
      count += item.harga * item.qty;
    });
    return count;
  };

  useEffect(() => {
    async function callApiGetMedicine() {
      if (medicinePatient && medicinePatient.length > 0) {
        var data = medicinePatient;
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
    callApiGetMedicine();
  }, []);

  const callApiSubmitMedicalRecord = () => {
    setLoading(true);
    dataMedicine.forEach((element) => (element.barang_id = element.id));
    var data = {
      transtype: stateForm,
      detail_resep: dataMedicine,
    };
    if (stateForm === 2) {
      data.pasien_id = selectedParameterPatient.value;
    } else {
      data.cust_nm = formNonMember.cust_nm;
      data.phone_no = formNonMember.phone_no;
    }
    addDrugNonDoctor(data)
      .then((result) => {
        setLoading(false);
        props.setMedicinePatient([]);
        setDataMedicine([]);
        setSelectedParameterPatient({});
        setFormNonMember({ ...formNonMember, cust_nm: "", phone_no: "" });
        mqttPublish();
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

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

  console.log("medicinePatient", medicinePatient);

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="row gutter-b">
            <div className="col-6">
              <div
                className={`bg-light-${
                  stateForm === 2 ? "primary" : "secondary"
                } px-3 py-4 rounded-xl text-left`}
              >
                <div
                  className={`font-size-h4 d-block my-2 text-${
                    stateForm === 2 ? "primary" : "secondary"
                  } d-flex justify-content-between`}
                  style={{ minHeight: 30 }}
                >
                  <div>
                    <FormattedMessage id="LABEL.PATIENT" />
                  </div>
                  <div>
                    <i
                      className={`far ${
                        stateForm === 2 ? "fa-check-circle" : "fa-circle"
                      } text-${
                        stateForm === 2 ? "primary" : "secondary"
                      } font-size-h1 cursor-pointer`}
                      onClick={() => {
                        setStateForm(2);
                        setFormNonMember({
                          ...formNonMember,
                          cust_nm: "",
                          phone_no: "",
                        });
                      }}
                    ></i>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FormattedMessage id="LABEL.CHOOSE" />
                    </label>
                    <Select
                      value={selectedParameterPatient}
                      options={optionParameterPatient}
                      isDisabled={stateForm !== 2}
                      className="form-control border-0 p-0 h-100 rounded-0"
                      classNamePrefix="react-select"
                      onChange={(value) => {
                        setSelectedParameterPatient(value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className={`bg-light-${
                  stateForm === 3 ? "primary" : "secondary"
                } px-3 py-4 rounded-xl text-left`}
              >
                <div
                  className={`font-size-h4 d-block my-2 text-${
                    stateForm === 3 ? "primary" : "secondary"
                  } d-flex justify-content-between`}
                  style={{ minHeight: 30 }}
                >
                  <div>
                    <FormattedMessage id="LABEL.NON_PATIENT" />
                  </div>
                  <div>
                    <i
                      className={`far ${
                        stateForm === 3 ? "fa-check-circle" : "fa-circle"
                      } text-${
                        stateForm === 3 ? "primary" : "secondary"
                      } font-size-h1 cursor-pointer`}
                      onClick={() => {
                        setStateForm(3);
                        setSelectedParameterPatient({});
                      }}
                    ></i>
                  </div>
                </div>
                <div className="mt-2">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">
                            <FormattedMessage id="LABEL.NAME" />
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder={intl.formatMessage({
                              id: "LABEL.NAME",
                            })}
                            value={formNonMember.cust_nm}
                            onChange={(e) => {
                              setFormNonMember({
                                ...formNonMember,
                                cust_nm: e.target.value,
                              });
                            }}
                            disabled={stateForm !== 3}
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">
                            <FormattedMessage id="LABEL.NAME" />
                          </label>
                          <NumberFormat
                            id={
                              stateForm !== 3
                                ? "NumberFormat-text"
                                : "NumberFormat-input"
                            }
                            value={formNonMember.phone_no}
                            displayType={stateForm !== 3 ? "text" : "input"}
                            className="form-control"
                            format="+62 ###-###-###-####"
                            mask="_"
                            allowEmptyFormatting={true}
                            allowLeadingZeros={true}
                            onValueChange={(e) => {
                              setFormNonMember({
                                ...formNonMember,
                                phone_no: e.floatValue,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader title="Resep Yang Diberikan">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                history.push(`/pharmacist/drug-purchase/medicine-list`);
              }}
            >
              <i className="fas fa-prescription-bottle-alt mx-1"></i>
              Penambahan Obat
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <table className="table">
            <thead>
              <tr>
                <th>Nama Obat</th>
                <th>Unit</th>
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
                    <td>
                      <NumberFormat
                        value={item.qty}
                        displayType="input"
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
                        onClick={(e) => {
                          e.target.focus();
                          e.target.select();
                        }}
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
                <th colSpan="2"></th>
                <th>Total</th>
                <td colSpan="2">{rupiah(countSubTotal(dataMedicine))}</td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
      <div className="toolbar-custom scrolltop">
        <button
          type="button"
          className="btn btn-danger btn-sm my-2"
          style={{ width: 60 }}
          disabled={loading}
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
          disabled={loading || medicinePatient.length === 0}
          onClick={() => {
            callApiSubmitMedicalRecord();
          }}
        >
          {loading ? (
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

export default injectIntl(connect(null, auth.actions)(DrugPurchasePage));
