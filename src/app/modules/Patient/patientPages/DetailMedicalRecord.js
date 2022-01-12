import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
} from "../../../../_metronic/_partials/controls";
import { getMedicalRecord, getMedicineById } from "../_redux/CrudPatient";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useSubheader } from "../../../../_metronic/layout";
import { rupiah } from "../../../components/currency";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

function DetailMedicalRecord(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [Lab, setLab] = useState({});
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();
  const [dataScreening, setDataScreening] = useState([]);
  const id = props.match.params.id;
  const medicalRecordId = props.match.params.medicalRecordId;
  const medicalRecordIdPass = props.match.params.medicalRecordIdPass;
  const antrian_id = props.match.params.antrian_id;
  let position = useSelector((state) => state.auth.user.position, shallowEqual);
  const [dataMedicine, setDataMedicine] = useState([]);
  const [specialCase, setSpecialCase] = useState({});
  const classes = useStyles();

  useLayoutEffect(() => {
    if (window.location.pathname.split("/")[2] === "handling-page") {
      suhbeader.setBreadcrumbs([
        {
          pathname: `/doctor/dashboard`,
          title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
        },
        {
          pathname: `/doctor/handling-page/process/${id}/${antrian_id}/${medicalRecordId}`,
          title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
        },
        {
          pathname: `/doctor/handling-page/process/${id}/${antrian_id}/${medicalRecordId}/list`,
          title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD_LIST" }),
        },
        {
          pathname: `/doctor/handling-page/process/${id}/${antrian_id}/${medicalRecordId}/list/${medicalRecordIdPass}`,
          title: intl.formatMessage({ id: "LABEL.DATA" }),
        },
      ]);
      suhbeader.setTitle(intl.formatMessage({ id: "LABEL.DATA" }));
    } else {
      suhbeader.setBreadcrumbs([
        {
          pathname: `/${position}/patient/list`,
          title: intl.formatMessage({ id: "LABEL.PATIENT_LIST" }),
        },
        {
          pathname: `/${position}/patient/list/${id}`,
          title: intl.formatMessage({ id: "LABEL.PATIENT" }),
        },
        {
          pathname: `/${position}/patient/list/${id}/${medicalRecordId}`,
          title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
        },
      ]);
      suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }));
    }
  }, []);

  const callApiGetMedical = () => {
    setLoading(true);
    getMedicalRecord(
      window.location.pathname.split("/")[2] === "handling-page"
        ? medicalRecordIdPass
        : medicalRecordId
    )
      .then((result) => {
        setLoading(false);
        setSpecialCase(result.data.data.transaksi);
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

  async function callApiGetMedicine(dataMedicinePatient) {
    var data = dataMedicinePatient;
    var waiting = new Promise(async (resolve, reject) => {
      for (let i = 0; i < data.length; i++) {
        try {
          var result = await getMedicineById(data[i].id);
          data[i].composite_item = result.data.data.composite_item;
          data[i].qty = data[i].qty ? data[i].qty : 1;
          if (i === data.length - 1) resolve();
        } catch (error) {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
          if (i === data.length - 1) resolve();
        }
      }
    });
    await waiting;
    setDataMedicine(data);
  }

  const countSubTotal = (data) => {
    var count = 0;
    data.map((item) => {
      count += item.harga * item.qty;
    });
    return count;
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
                  <h3 className="text-dark mb-1">
                    Nomor Kunjungan: {data.code_reg}
                  </h3>
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
                  <h3 className="text-dark mb-1">{data.pasien}</h3>
                  <span className="text-muted">{data.poli}</span>
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
                    <i className="fas fa-user-md h-75 align-self-end font-size-h1"></i>
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <h3 className="text-dark mb-1">{data.dokter}</h3>
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
            <CardHeader title="Screening Data"></CardHeader>
            <CardBody>
              {dataScreening.map((item, index) => (
                <ListItem
                  key={index.toString()}
                  index={index.toString()}
                  item={item}
                  classes={classes}
                />
              ))}
              {/* <div className="row">
                {dataScreening.map((item, index) => {
                  return (
                    <div key={index.toString()} className="col-md-4">
                      <div className="form-group">
                        <label>{item.label_kind}</label>
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
                            id={(item.label_kind + item.id)
                              .match(/[a-zA-Z0-9]+/g)
                              .join("")}
                            value={item.val_desc}
                            onChange={() => {}}
                            disabled={true}
                          />
                        ) : (
                          <textarea
                            rows="3"
                            className="form-control"
                            id={(item.label_kind + item.id)
                              .match(/[a-zA-Z0-9]+/g)
                              .join("")}
                            value={item.val_desc}
                            onChange={() => {}}
                            disabled={true}
                          ></textarea>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div> */}
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Resep Yang Diberikan"></CardHeader>
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
                        {/* <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            style={{ width: 25, height: 25 }}
                            onChange={(e) => {
                              var data = Object.assign([], preOrder);
                              if (e.target.checked) {
                                data.push(item);
                              } else {
                                var idx = data.findIndex(
                                  (value) => value.id === item.id
                                );
                                data.splice(idx, 1);
                              }
                              setPreOrder(data);
                            }}
                            disabled={loadingSubmit}
                          />
                        </td> */}
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
                              {/* <td></td> */}
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
                    <th>
                      <NumberFormat
                        value={data.fee || 0}
                        id="NumberFormat-text"
                        displayType="text"
                        className="form-control"
                        allowEmptyFormatting={true}
                        allowLeadingZeros={true}
                        thousandSeparator={true}
                        allowNegative={false}
                        prefix={"Rp "}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        onValueChange={(e) => {}}
                      />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
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
                    <th colSpan="2">
                      <NumberFormat
                        id="NumberFormat-text"
                        value={specialCase.payamt}
                        displayType="text"
                        className="form-control"
                        allowEmptyFormatting={true}
                        allowLeadingZeros={true}
                        thousandSeparator={true}
                        allowNegative={false}
                        prefix={"Rp "}
                        onValueChange={(e) => {}}
                      />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
                    <th>Total</th>
                    <td>
                      {specialCase.special === 0
                        ? rupiah(data.fee + countSubTotal(dataMedicine))
                        : rupiah(specialCase.payamt)}
                    </td>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
                    <th>Bayar</th>
                    <th colSpan="2">
                      <NumberFormat
                        value={specialCase.pay_amt}
                        id="NumberFormat-text"
                        displayType="text"
                        className="form-control"
                        allowEmptyFormatting={true}
                        allowLeadingZeros={false}
                        allowNegative={false}
                        thousandSeparator={true}
                        prefix={"Rp "}
                        onValueChange={(e) => {}}
                      />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2"></th>
                    <th>Kembalian</th>
                    <th colSpan="2">
                      {specialCase?.special === 0
                        ? rupiah(
                            specialCase.pay_amt -
                              (data.fee + countSubTotal(dataMedicine))
                          )
                        : rupiah(specialCase.pay_amt - specialCase?.payamt)}
                    </th>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Lab"></CardHeader>
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
export default injectIntl(connect(null, null)(DetailMedicalRecord));
