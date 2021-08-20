import React, {
  useState,
  useEffect,
  // useCallback
} from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import NumberFormat from "react-number-format";
import LinearProgress from "@material-ui/core/LinearProgress";
import { getDataPatient } from "./_redux/CrudPatient";
import { MODAL } from "../../../service/modalSession/ModalService";
import Navs from "../../components/navs";
import MedicalRecord from "./patientPages/MedicalRecord";

const navLists = [
  {
    id: "1",
    label: "LABEL.MEDICAL_RECORD",
  },
  {
    id: "2",
    label: "LABEL.LAB_HISTORY",
  },
];

function PatientPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(false);
  const [statusForm, setStatusForm] = useState(true);
  const [dataForm, setDataForm] = useState({});
  const [navActive, setNavActive] = useState(navLists[0].id);
  const id = props.match.params.id;

  suhbeader.setTitle(intl.formatMessage({ id: "LABEL.PATIENT" }));

  const callApiDataPatient = () => {
    setLoading(true);
    getDataPatient(id)
      .then((result) => {
        setLoading(false);
        setDataForm(result.data.data);
        console.log("result", result);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiDataPatient, []);

  const saveData = (e) => {
    e.preventDefault();
    console.log("masuk");
  };
  return (
    <React.Fragment>
      {loading && <LinearProgress />}
      <Card>
        <CardBody>
          <form autoComplete="off" id="formData" onSubmit={saveData}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mx-5 mb-5">
                  <label>Nomor KTP</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-id-card"></i>
                      </span>
                    </div>
                    <NumberFormat
                      id={
                        statusForm ? "NumberFormat-text" : "NumberFormat-input"
                      }
                      value={dataForm?.ktpno}
                      displayType={statusForm ? "text" : "input"}
                      className="form-control"
                      format="################"
                      mask="_"
                      allowEmptyFormatting={true}
                      allowLeadingZeros={true}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Tempar Lahir</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-street-view"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tempar Lahir"
                      value={dataForm?.tempat_lahir || ""}
                      disabled={statusForm}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Nomor Phone</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                    </div>
                    <NumberFormat
                      id={
                        statusForm ? "NumberFormat-text" : "NumberFormat-input"
                      }
                      value={dataForm?.no_telp}
                      displayType={statusForm ? "text" : "input"}
                      className="form-control"
                      format="(###) ###-###-####"
                      mask="_"
                      allowEmptyFormatting={true}
                      allowLeadingZeros={true}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>No Kartu Keluarga</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-id-card"></i>
                      </span>
                    </div>
                    <NumberFormat
                      id={
                        statusForm ? "NumberFormat-text" : "NumberFormat-input"
                      }
                      value={dataForm?.no_kk}
                      displayType={statusForm ? "text" : "input"}
                      className="form-control"
                      format="################"
                      mask="_"
                      allowEmptyFormatting={true}
                      allowLeadingZeros={true}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Pendidikan Terakhir</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-school"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pendidikan Terakhir"
                      disabled={statusForm}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Pekerjaan</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-briefcase"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pekerjaan"
                      disabled={statusForm}
                      value={dataForm?.pekerjaan || ""}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mx-5 mb-5">
                  <label>Nama Lengkap</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="far fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Lengkap"
                      disabled={statusForm}
                      value={dataForm?.nama || ""}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Tanggal Lahir</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-baby"></i>
                      </span>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      disabled={statusForm}
                      value={dataForm?.tgl_lahir || ""}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-at"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      disabled={statusForm}
                      value={dataForm?.email || ""}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Alamat</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-map-marked-alt"></i>
                      </span>
                    </div>
                    <textarea
                      rows="5"
                      className="form-control"
                      disabled={statusForm}
                      value={dataForm?.alamat || ""}
                      onChange={() => {}}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-right">
                {statusForm ? (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {
                      setStatusForm(!statusForm);
                    }}
                  >
                    <i className="fas fa-save"></i>
                    <span>Edit</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      setStatusForm(!statusForm);
                    }}
                  >
                    <i className="fas fa-save"></i>
                    <span>Simpan</span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Navs
            navLists={navLists}
            defaultActiveKey={navActive}
            handleSelect={(selectedKey) => setNavActive(selectedKey)}
          />

          {navActive === "1" && (
            <div className="my-5 py-5 h-100">
              <MedicalRecord />
            </div>
          )}
          {navActive === "2" && <div className="my-5 py-5 h-100">riwayat</div>}
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(PatientPage));
