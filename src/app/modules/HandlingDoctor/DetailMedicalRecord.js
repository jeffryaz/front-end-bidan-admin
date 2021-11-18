import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { getMedicalRecord } from "./_redux/CrudHandlingDoctor";
import { MODAL } from "../../../service/modalSession/ModalService";
import { useSubheader } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory, Link } from "react-router-dom";
import {
  getMedicineById,
  cancelMedicalRecord,
  saveMedicalRecord,
  submitMedicalRecord,
  getTakaran,
} from "./_redux/CrudHandlingDoctor";
import { publish } from "../../../redux/MqttOptions";
import { rupiah } from "../../components/currency";
import NumberFormat from "react-number-format";
import * as auth from "../Auth/_redux/ActionAuth";
import Select from "react-select";
import { cloneDeep } from "lodash";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const optionParameter = [
  { value: "1", label: "Rawat Inap" },
  { value: "2", label: "Rawat Jalan" },
];

const screeningItem = [
  {
    label: "Anamnesa",
    item: [],
  },
  {
    label: "Pemeriksaan Fisik",
    item: [],
  },
  {
    label: "Pemeriksaan Penunjang",
    item: [],
  },
  {
    label: "Diagnosa",
    item: [],
  },
  {
    label: "Penata Laksanaan",
    item: [],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
}));

function DetailMedicalRecord(props) {
  const { intl } = props;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState({});
  const [Lab, setLab] = useState({});
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();
  const [dataScreening, setDataScreening] = useState(screeningItem);
  const [dataMedicine, setDataMedicine] = useState([]);
  const [specialCase, setSpecialCase] = useState({});
  const [handlingFee, setHandlingFee] = useState(0);
  const id = props.match.params.id;
  const antrian_id = props.match.params.antrian_id;
  const medicalRecordId = props.match.params.medicalRecordId;
  let { medicinePatient, screeningPatient } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const [selectedParameter, setSelectedParameter] = useState({
    value: "2",
    label: "Rawat Jalan",
  });
  const classes = useStyles();
  const [selectedTakaran, setSelectedTakaran] = useState(null);
  const [optionTakaran, setOptionTakaran] = useState([]);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/doctor/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/doctor/handling-page/process/${id}/${antrian_id}/${medicalRecordId}`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }));
  }, []);

  const callApiGetMedical = () => {
    setLoading(true);
    getMedicalRecord(medicalRecordId)
      .then((result) => {
        setLoading(false);
        setSpecialCase(result.data.data.transaksi);
        setData(result.data.data.form[0]);
        setHandlingFee(result.data.data.form[0].fee || 0);
        if (
          (screeningPatient && screeningPatient.length === 0) ||
          !screeningPatient
        ) {
          var data = cloneDeep(dataScreening);
          var items = result.data.data.screen;
          data[0].item = items.filter((item) => item.group_id === 1);
          data[1].item = items.filter((item) => item.group_id === 2);
          data[2].item = items.filter((item) => item.group_id === 3);
          data[3].item = items.filter((item) => item.group_id === 4);
          data[4].item = items.filter((item) => item.group_id === 5);
          props.setScreeningPatient(data);
          setDataScreening(data);
        } else {
          setDataScreening(screeningPatient);
        }
        setLab(result.data.data.labs ? result.data.data.labs : {});
        if (
          (medicinePatient && medicinePatient.length === 0) ||
          !medicinePatient
        ) {
          // setDataMedicine(result.data.data.resep ? result.data.data.resep : []);
          props.setMedicinePatient(
            result.data.data.resep ? result.data.data.resep : []
          );
          callApiGetMedicine(
            result.data.data.resep ? result.data.data.resep : []
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

  const countSubTotal = (data) => {
    var count = 0;
    data.map((item) => {
      count += item.harga * item.qty;
    });
    return count;
  };

  const callApiSaveMedicalRecord = () => {
    setLoadingSave(true);
    dataMedicine.forEach((element) => (element.barang_id = element.id));
    var screenitems = [];
    var screenitems_ = [
      ...dataScreening[0].item,
      ...dataScreening[1].item,
      ...dataScreening[2].item,
      ...dataScreening[3].item,
      ...dataScreening[4].item,
    ];
    for (let i = 0; i < screenitems_.length; i++) {
      if (
        screenitems_[i].val_desc &&
        screenitems_[i].val_desc.toString().trim().length != 0
      )
        screenitems.push(screenitems_[i]);
    }
    var data = {
      treatment_kind: selectedParameter.value,
      screenitems,
      detail_resep: dataMedicine,
      fee: handlingFee,
      special: specialCase.special,
      payamt: specialCase.payamt,
    };
    saveMedicalRecord(medicalRecordId, data)
      .then((result) => {
        setLoadingSave(false);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        setLoadingSave(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const callApiSubmitMedicalRecord = () => {
    setLoadingSubmit(true);
    dataMedicine.forEach((element) => (element.barang_id = element.id));
    var screenitems = [];
    var screenitems_ = [
      ...dataScreening[0].item,
      ...dataScreening[1].item,
      ...dataScreening[2].item,
      ...dataScreening[3].item,
      ...dataScreening[4].item,
    ];
    for (let i = 0; i < screenitems_.length; i++) {
      if (
        screenitems_[i].val_desc &&
        screenitems_[i].val_desc.toString().trim().length != 0
      )
        screenitems.push(screenitems_[i]);
    }
    var data = {
      treatment_kind: selectedParameter.value,
      screenitems,
      detail_resep: dataMedicine,
      fee: handlingFee,
      special: specialCase.special,
      payamt: specialCase.payamt,
    };
    submitMedicalRecord(medicalRecordId, data)
      .then((result) => {
        setLoadingSubmit(false);
        props.setMedicinePatient([]);
        props.setScreeningPatient([]);
        history.replace(`/doctor/dashboard`);
        mqttPublish();
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
                  <h4 className="text-dark mb-1">{data.pasien}</h4>
                  <span className="text-muted">{data.poli}</span>
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
            <CardHeader title="Screening Data">
              <CardHeaderToolbar>
                <Link
                  to={`/doctor/handling-page/process/${id}/${antrian_id}/${medicalRecordId}/list`}
                  className="btn btn-primary"
                >
                  <i className="fas fa-history mx-1"></i>
                  <FormattedMessage id="LABEL.HISTORY" />
                </Link>
              </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
              <div className="row">
                {dataScreening.map((item, index) => {
                  return (
                    <ExpansionPanel
                      defaultExpanded={true}
                      key={index.toString()}
                      className="my-5 rounded-top w-100"
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                        {item.label}
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>
                        <div className="row w-100">
                          {item.item.map((value, idx) => {
                            return (
                              <div
                                key={idx.toString()}
                                className="col-12 px-10"
                              >
                                <div className="form-group">
                                  <span className="d-flex justify-content-between">
                                    <label>{value.label_kind}</label>
                                    <small
                                      id="emailHelp"
                                      className="form-text text-muted"
                                    >
                                      {value.updated_at
                                        ? window
                                            .moment(new Date(value.updated_at))
                                            .format("DD MMM YYYY HH:mm:ss")
                                        : ""}
                                      <span className="text-uppercase">
                                        {value.upd_user || ""}
                                      </span>
                                    </small>
                                  </span>
                                  {value.datatype === 1 ||
                                  value.datatype === 2 ||
                                  value.datatype === 3 ||
                                  value.datatype === 4 ? (
                                    <input
                                      type={
                                        value.datatype === 1
                                          ? "text"
                                          : value.datatype === 2 ||
                                            value.datatype === 3
                                          ? "number"
                                          : "date"
                                      }
                                      className="form-control"
                                      id={(value.label_kind + value.id)
                                        .match(/[a-zA-Z0-9]+/g)
                                        .join("")}
                                      value={value.val_desc || ""}
                                      onChange={(e) => {
                                        var data = cloneDeep(dataScreening);
                                        data[index].item[idx].val_desc =
                                          e.target.value;
                                        setDataScreening(data);
                                        props.setScreeningPatient(data);
                                      }}
                                    />
                                  ) : (
                                    <textarea
                                      rows="3"
                                      className="form-control"
                                      id={(value.label_kind + value.id)
                                        .match(/[a-zA-Z0-9]+/g)
                                        .join("")}
                                      value={value.val_desc}
                                      onChange={(e) => {
                                        var data = cloneDeep(dataScreening);
                                        data[index].item[idx].val_desc =
                                          e.target.value;
                                        setDataScreening(data);
                                        props.setScreeningPatient(data);
                                      }}
                                    ></textarea>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </ExpansionPanelDetails>
                      <Divider />
                    </ExpansionPanel>
                  );
                })}
              </div>
              {/* <div className="row">
                <div className="col-12">Diagnosa Dokter</div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea rows="3" className="form-control"></textarea>
                  </div>
                </div>
              </div> */}
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title=""></CardHeader>
            <CardBody>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Hemoglobin (HB)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.hb}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Hepatitis B Surface Antigen (HBsAg)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.hbsag}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Human Immunodeficiency Virus (HIV)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.hiv}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Raja Singa (Sifilis)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.sifilis}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Asam Urat</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.asam_urat}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Kolestrol</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.kolesterol}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Gelongan Darah</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.gol_dar}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Plano Test (PP Test)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.pp_test}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Protein Urine</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.protein_urine}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>PH</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.ph}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Gula Darah (Glucose)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled={true}
                      value={Lab?.glukosa}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Resep Yang Diberikan">
              <CardHeaderToolbar>
                <Link
                  to={`/doctor/handling-page/process/${id}/${antrian_id}/${medicalRecordId}/medicine-list`}
                  className="btn btn-primary"
                >
                  <i className="fas fa-prescription-bottle-alt mx-1"></i>
                  Penambahan Obat
                </Link>
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
                        <td className="td-10">
                          <input
                            type="number"
                            min="1"
                            className="form-control"
                            value={item?.eat_qty}
                            onChange={(e) => {
                              var data = Object.assign([], dataMedicine);
                              var idx = data.findIndex(
                                (value) => value.id === item.id
                              );
                              data[idx].eat_qty = e.target.value
                                ? e.target.value
                                : 0;
                              setDataMedicine(data);
                            }}
                          />
                        </td>
                        <td
                          className="td-1"
                          style={{ verticalAlign: "middle" }}
                        >
                          X
                        </td>
                        <td className="td-10">
                          <input
                            type="number"
                            min="1"
                            className="form-control"
                            value={item?.day_qty}
                            onChange={(e) => {
                              var data = Object.assign([], dataMedicine);
                              var idx = data.findIndex(
                                (value) => value.id === item.id
                              );
                              data[idx].day_qty = e.target.value
                                ? e.target.value
                                : 0;
                              setDataMedicine(data);
                            }}
                          />
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
                            isDisabled={false}
                            isClearable={true}
                            className="form-control form-control-sm border-0 p-0 h-100"
                            classNamePrefix="react-select"
                            onChange={(value) => {
                              var data = Object.assign([], dataMedicine);
                              var idx = data.findIndex(
                                (value) => value.id === item.id
                              );
                              data[idx].takaran_id = value ? value.value : null;
                              setDataMedicine(data);
                              setSelectedTakaran(value);
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
                    <th>Biaya Penanganan</th>
                    <th colSpan="2">
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
                    <th colSpan="2"></th>
                    <th>
                      <span
                        style={{ verticalAlign: "middle" }}
                        onClick={() => {
                          var item = cloneDeep(specialCase);
                          item.special = specialCase.special === 0 ? 1 : 0;
                          setSpecialCase(item);
                        }}
                      >
                        {specialCase?.special !== 0 ? (
                          <i className="fas fa-toggle-on text-primary font-size-h1 px-1 cursor-pointer"></i>
                        ) : (
                          <i className="fas fa-toggle-off text-danger font-size-h1 px-1 cursor-pointer"></i>
                        )}
                      </span>
                      Spesial Kasus
                    </th>
                    <th colSpan="2">
                      <NumberFormat
                        id={
                          specialCase?.special !== 0
                            ? "NumberFormat-input"
                            : "NumberFormat-text"
                        }
                        value={specialCase.payamt}
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
                    <th colSpan="2"></th>
                    <th>Total</th>
                    <td colSpan="2">
                      {specialCase.special === 0
                        ? rupiah(handlingFee + countSubTotal(dataMedicine))
                        : rupiah(specialCase.payamt)}
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
            mqttPublish();
            cancelMedicalRecord(data.id)
              .then((result) => {
                history.push(`/doctor/dashboard`);
              })
              .catch((err) => {
                MODAL.showSnackbar(
                  intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
                );
              });
            props.setMedicinePatient([]);
            props.setScreeningPatient([]);
          }}
        >
          <i className="fas fa-times-circle d-block p-0"></i>
          <span className="font-size-xs">Cancel</span>
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm my-2"
          style={{ width: 60 }}
          disabled={loadingSave || loadingSubmit}
          onClick={() => {
            callApiSaveMedicalRecord();
          }}
        >
          {loadingSave ? (
            <i className="fas fa-spinner fa-pulse p-2"></i>
          ) : (
            <i className="fas fa-save d-block p-0"></i>
          )}

          <span className="font-size-xs">Save</span>
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

export default injectIntl(connect(null, auth.actions)(DetailMedicalRecord));
