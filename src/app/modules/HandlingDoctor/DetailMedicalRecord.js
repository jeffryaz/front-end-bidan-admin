import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
// import { getMedicalRecord } from "../_redux/CrudPatient";
import { MODAL } from "../../../service/modalSession/ModalService";
import { useSubheader } from "../../../_metronic/layout";

function DetailMedicalRecord(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [Lab, setLab] = useState({});
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();
  const [dataScreening, setDataScreening] = useState([]);
  const id = props.match.params.id;
  // const medicalRecordId = props.match.params.medicalRecordId;

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/doctor/handling-page/process`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }));
  }, []);

  // const callApiGetMedical = () => {
  //   setLoading(true);
  //   getMedicalRecord(medicalRecordId)
  //     .then((result) => {
  //       setLoading(false);
  //       setData(result.data.data.form[0]);
  //       setDataScreening(result.data.data.screen);
  //       setLab(result.data.data.labs ? result.data.data.labs : {});
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
  //     });
  // };

  // useEffect(callApiGetMedical, []);

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
          <div className="card card-custom gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                {/* <div className="symbol symbol-40 symbol-light-danger mr-5">
                  <span className="symbol-label">
                    <i className="fas fa-user-md h-75 align-self-end font-size-h1"></i>
                  </span>
                </div> */}
                {/* <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <h3 className="text-dark mb-1">{data.dokter}</h3>
                  <span className="text-muted">{data.poli}</span>
                </div> */}
                <button type="button" className="btn btn-danger">
                  Cancel
                </button>
                <button type="button" className="btn btn-success">
                  Save
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
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
              <div className="row">
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
            <CardHeader title="Labs"></CardHeader>
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
                <button type="button" className="btn btn-primary">
                  <i className="fas fa-prescription-bottle-alt mx-1"></i>
                  Penambahan Obat
                </button>
              </CardHeaderToolbar>
            </CardHeader>
            <CardBody>Resep Yang Diberikan</CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(DetailMedicalRecord));
