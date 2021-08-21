import React, {
  useState,
  useEffect,
  // useCallback
} from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import NumberFormat from "react-number-format";
import LinearProgress from "@material-ui/core/LinearProgress";
import { getDataPatient, updateDataPatient } from "./_redux/CrudPatient";
import { MODAL } from "../../../service/modalSession/ModalService";
import Navs from "../../components/navs";
import MedicalRecord from "./patientPages/MedicalRecord";
import Select from "react-select";
import Avatar from "@material-ui/core/Avatar";
import { hostBase } from "../../../redux/setupAxios";
import { makeStyles } from "@material-ui/core/styles";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

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

const optionParameter = [
  { value: "2", label: "Lajang" },
  { value: "1", label: "Menikah" },
  { value: "3", label: "Duda/Janda" },
];

const optionParameterGender = [
  { value: "L", label: "Laki-Laki" },
  { value: "P", label: "Perempuan" },
];

const useStyles = makeStyles({
  bigAvatar: {
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    width: 100,
    height: 100,
  },
});

function PatientPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [statusForm, setStatusForm] = useState(true);
  const [dataForm, setDataForm] = useState({});
  const [navActive, setNavActive] = useState(navLists[0].id);
  const [selectedParameter, setSelectedParameter] = useState({});
  const [selectedParameterGender, setSelectedParameterGender] = useState({});
  const [nama, setNama] = useState("");
  const [ktp, setKtp] = useState("");
  const id = props.match.params.id;

  suhbeader.setTitle(intl.formatMessage({ id: "LABEL.PATIENT" }));

  const callApiDataPatient = () => {
    setLoading(true);
    getDataPatient(id)
      .then((result) => {
        setLoading(false);
        setDataForm(result.data.data);
        setNama(result.data.data.nama);
        setKtp(result.data.data.ktpno);
        var statusIndex = optionParameter.findIndex(
          (item) => item.value === result.data.data.status_nikah
        );
        setSelectedParameter(optionParameter[statusIndex]);
        var genderIndex = optionParameterGender.findIndex(
          (item) => item.value === result.data.data.jk
        );
        setSelectedParameterGender(optionParameterGender[genderIndex]);
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
    setLoadingUpdate(true);
    let newParams = new FormData();
    Object.keys(dataForm).forEach((element) => {
      if (element !== "photo_pasien")
        newParams.append(element, dataForm[element]);
    });
    updateDataPatient(id, newParams)
      .then((result) => {
        setLoadingUpdate(false);
        setStatusForm(!statusForm);
        setNama(dataForm.nama);
        setKtp(dataForm.ktpno);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        setLoadingUpdate(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
    console.log("dataForm", dataForm);
  };
  return (
    <React.Fragment>
      {loading && <LinearProgress />}
      <Card>
        <CardBody>
          <div className="d-flex">
            <Avatar
              alt="Foto"
              src={
                dataForm?.photo_pasien
                  ? `${hostBase()}/storage/app/photo_pasien/${
                      dataForm?.photo_pasien
                    }`
                  : toAbsoluteUrl("/media/svg/avatars/004-boy-1.svg")
              }
              className={classes.bigAvatar}
            />
            <div className="py-5">
              <h1>{nama}</h1>
              <h6>{ktp}</h6>
            </div>
          </div>
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
                        statusForm || loadingUpdate
                          ? "NumberFormat-text"
                          : "NumberFormat-input"
                      }
                      value={dataForm?.ktpno}
                      displayType={
                        statusForm || loadingUpdate ? "text" : "input"
                      }
                      className="form-control"
                      format="################"
                      mask="_"
                      allowEmptyFormatting={true}
                      allowLeadingZeros={true}
                      onValueChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          ktpno: e.floatValue,
                        });
                      }}
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
                      disabled={statusForm || loadingUpdate}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          tempat_lahir: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Jenis Kelamin</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-venus-mars"></i>
                      </span>
                    </div>
                    <Select
                      value={selectedParameterGender}
                      options={optionParameterGender}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      // styles={customStyles}
                      onChange={(value) => {
                        setSelectedParameterGender(value);
                        setDataForm({
                          ...dataForm,
                          jk: value.value,
                        });
                      }}
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
                        statusForm || loadingUpdate
                          ? "NumberFormat-text"
                          : "NumberFormat-input"
                      }
                      value={dataForm?.no_telp}
                      displayType={
                        statusForm || loadingUpdate ? "text" : "input"
                      }
                      className="form-control"
                      format="+62 ###-###-###-####"
                      mask="_"
                      allowEmptyFormatting={true}
                      allowLeadingZeros={true}
                      onValueChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          no_telp: e.floatValue,
                        });
                      }}
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
                        statusForm || loadingUpdate
                          ? "NumberFormat-text"
                          : "NumberFormat-input"
                      }
                      value={dataForm?.no_kk}
                      displayType={
                        statusForm || loadingUpdate ? "text" : "input"
                      }
                      className="form-control"
                      format="################"
                      mask="_"
                      allowEmptyFormatting={true}
                      allowLeadingZeros={true}
                      onValueChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          no_kk: e.floatValue,
                        });
                      }}
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
                      disabled={statusForm || loadingUpdate}
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
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.pekerjaan || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          pekerjaan: e.target.value,
                        });
                      }}
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
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.nama || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          nama: e.target.value,
                        });
                      }}
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
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.tgl_lahir || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          tgl_lahir: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Status</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-house-user"></i>
                      </span>
                    </div>
                    <Select
                      value={selectedParameter}
                      options={optionParameter}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      // styles={customStyles}
                      onChange={(value) => {
                        setSelectedParameter(value);
                        setDataForm({
                          ...dataForm,
                          status_nikah: value.value,
                        });
                      }}
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
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.email || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Kecamatan</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-map-marker"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kecamatan"
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.kec || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          kec: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Kota</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kecamatan"
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.kota || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          kota: e.target.value,
                        });
                      }}
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
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.alamat || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          alamat: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <h3>Kontak Darurat</h3>
                <div className="form-group mx-5 mb-5">
                  <label>Nama Lengkap</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-user-shield"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Lengkap"
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.partner || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          partner: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Hubungan</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-user-shield"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hubungan"
                      disabled={statusForm || loadingUpdate}
                      value={dataForm?.partner_status || ""}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          partner_status: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Nomor Phone</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-user-shield"></i>
                      </span>
                    </div>
                    <NumberFormat
                      id={
                        statusForm || loadingUpdate
                          ? "NumberFormat-text"
                          : "NumberFormat-input"
                      }
                      value={dataForm?.partner_tel}
                      displayType={
                        statusForm || loadingUpdate ? "text" : "input"
                      }
                      className="form-control"
                      format="+62 ###-###-###-####"
                      mask="_"
                      allowEmptyFormatting={true}
                      allowLeadingZeros={true}
                      onValueChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          partner_tel: e.floatValue,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-right">
                <button
                  type="button"
                  className={`btn btn-primary mx-1 ${!statusForm && "d-none"}`}
                  onClick={() => {
                    setStatusForm(!statusForm);
                  }}
                >
                  <i className="far fa-edit"></i>
                  <span>Edit</span>
                </button>
                <button
                  type="submit"
                  className={`btn btn-success mx-1 ${statusForm && "d-none"}`}
                  disabled={loadingUpdate}
                >
                  {loadingUpdate ? (
                    <i className="fas fa-spinner fa-pulse px-2"></i>
                  ) : (
                    <i className="fas fa-save"></i>
                  )}

                  {loadingUpdate ? (
                    <FormattedMessage id="LABEL.WAITING" />
                  ) : (
                    <span>Simpan</span>
                  )}
                </button>
                <button
                  type="button"
                  className={`btn btn-danger mx-1 ${statusForm && "d-none"}`}
                  onClick={() => {
                    setStatusForm(!statusForm);
                    callApiDataPatient();
                  }}
                  disabled={loadingUpdate}
                >
                  <i className="far fa-times-circle"></i>
                  <span>Batal</span>
                </button>
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
