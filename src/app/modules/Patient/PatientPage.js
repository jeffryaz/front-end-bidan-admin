import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import NumberFormat from "react-number-format";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  getDataPatient,
  updateDataPatient,
  listProvince,
  listCity,
  listDistricts,
  listWard,
} from "./_redux/CrudPatient";
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

const optionParameterEducation = [
  { value: "Tidak Sekolah", label: "Tidak Sekolah" },
  { value: "Sekolah Dasar", label: "Sekolah Dasar" },
  { value: "Sekolah Menengah Pertama", label: "Sekolah Menengah Pertama" },
  { value: "Sekolah Menengah Atas", label: "Sekolah Menengah Atas" },
  { value: "Diploma", label: "Diploma" },
  { value: "Sarjana", label: "Sarjana" },
  { value: "Magister", label: "Magister" },
  { value: "Doktor", label: "Doktor" },
];

const optionParameterProfession = [
  { value: "Tidak Berkerja", label: "Tidak Berkerja" },
  { value: "Pelajar/Mahasiswa", label: "Pelajar/Mahasiswa" },
  { value: "Ibu Rumah Tangga", label: "Ibu Rumah Tangga" },
  { value: "Harian Lepas", label: "Harian Lepas" },
  { value: "Karyawan Swasta", label: "Karyawan Swasta" },
  { value: "PNS", label: "PNS" },
  { value: "Pengusaha", label: "Pengusaha" },
  { value: "Freelance", label: "Freelance" },
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
  const [selectedParameterEducation, setSelectedParameterEducation] = useState(
    {}
  );
  const [selectedParameterProfession, setSelectedParameterProfession] =
    useState({});
  const [selectedParameterProvince, setSelectedParameterProvince] = useState(
    {}
  );
  const [optionParameterProvince, setOptionParameterProvince] = useState([]);
  const [selectedParameterCity, setSelectedParameterCity] = useState({});
  const [optionParameterCity, setOptionParameterCity] = useState([]);
  const [selectedParameterDistricts, setSelectedParameterDistricts] = useState(
    {}
  );
  const [optionParameterDistricts, setOptionParameterDistricts] = useState([]);
  const [selectedParameterWard, setSelectedParameterWard] = useState({});
  const [optionParameterWard, setOptionParameterWard] = useState([]);
  const [statusData, setStatusData] = useState({
    prov: true,
    kota: true,
    kec: true,
    kel: true,
  });
  let id_user = useSelector((state) => state.auth.user.id, shallowEqual);
  let position = useSelector((state) => state.auth.user.position, shallowEqual);
  const id = props.match.params.id;

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/${position}/patient/list`,
        title: intl.formatMessage({ id: "LABEL.PATIENT_LIST" }),
      },
      {
        pathname: `/${position}/patient/list/${id}`,
        title: intl.formatMessage({ id: "LABEL.PATIENT" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.PATIENT" }));
  }, []);

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

        if (result.data.data?.pendidikan) {
          var statusIndex = optionParameterEducation.findIndex(
            (item) => item.value === result.data.data?.pendidikan
          );
          setSelectedParameterEducation(optionParameterEducation[statusIndex]);
        }
        if (result.data.data?.pekerjaan) {
          var statusIndex = optionParameterProfession.findIndex(
            (item) => item.value === result.data.data?.pekerjaan
          );
          setSelectedParameterProfession(
            optionParameterProfession[statusIndex]
          );
        }
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
    var data = Object.assign({}, dataForm);
    data.pendidikan = selectedParameterEducation.value;
    data.pekerjaan = selectedParameterProfession.value;
    data.email = data.email.trim() === "" ? null : data.email;
    Object.keys(data).forEach((element) => {
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
  };

  const callApiListProvince = () => {
    if (optionParameterProvince.length === 0) {
      listProvince()
        .then((result) => {
          var data = result.data.data;
          data.forEach((item) => {
            item.value = item.id;
            item.label = item.nama;
          });
          setOptionParameterProvince(data);
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else {
      if (dataForm?.prov) {
        var statusIndex = optionParameterProvince.findIndex(
          (item) => item.value === Number(dataForm?.prov)
        );
        if (statusIndex !== -1)
          setSelectedParameterProvince(optionParameterProvince[statusIndex]);
      }
    }
  };

  const callApiListCity = () => {
    if (selectedParameterProvince?.value) {
      setSelectedParameterCity({});
      listCity(selectedParameterProvince.value)
        .then((result) => {
          var data = result.data.data;
          data.forEach((item) => {
            item.value = item.id_kota;
            item.label = item.nama;
          });
          setOptionParameterCity(data);
          if (statusData?.kota) {
            var statusIndex = data.findIndex(
              (item) => item.value === dataForm?.kota
            );
            if (statusIndex !== -1) setSelectedParameterCity(data[statusIndex]);
          }
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else {
      setSelectedParameterCity({});
      setOptionParameterCity([]);
    }
  };

  const callApiListDistricts = () => {
    if (selectedParameterCity?.value) {
      setSelectedParameterDistricts({});
      listDistricts(
        selectedParameterProvince.value,
        selectedParameterCity.value
      )
        .then((result) => {
          var data = result.data.data;
          data.forEach((item) => {
            item.value = item.id_kec;
            item.label = item.nama;
          });
          setOptionParameterDistricts(data);
          if (statusData?.kec) {
            var statusIndex = data.findIndex(
              (item) => item.value === dataForm?.kec
            );
            if (statusIndex !== -1)
              setSelectedParameterDistricts(data[statusIndex]);
          }
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else {
      setSelectedParameterDistricts({});
      setOptionParameterDistricts([]);
    }
  };

  const callApiListWard = () => {
    if (selectedParameterDistricts?.value) {
      setSelectedParameterWard({});
      listWard(
        selectedParameterProvince.value,
        selectedParameterCity.value,
        selectedParameterDistricts.value
      )
        .then((result) => {
          var data = result.data.data;
          data.forEach((item) => {
            item.value = item.id_kel;
            item.label = item.nama;
          });
          setOptionParameterWard(data);
          if (statusData?.kel) {
            var statusIndex = data.findIndex(
              (item) => item.value === dataForm?.kel
            );
            if (statusIndex !== -1) setSelectedParameterWard(data[statusIndex]);
          }
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else {
      setSelectedParameterWard({});
      setOptionParameterWard([]);
    }
  };

  useEffect(callApiListProvince, [dataForm]);
  useEffect(callApiListCity, [selectedParameterProvince]);
  useEffect(callApiListDistricts, [selectedParameterCity]);
  useEffect(callApiListWard, [selectedParameterDistricts]);

  return (
    <React.Fragment>
      {loading && <LinearProgress />}
      <Card>
        <CardBody>
          <div className="row">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6 text-md-right">
              <a
                className="btn btn-danger"
                href={`${hostBase()}/api/v1/cetakkartu/${id}`}
                target="_blankk"
              >
                <i className="fas fa-print px-1"></i>
                Cetak Kartu
              </a>
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
                    <Select
                      value={selectedParameterEducation}
                      options={optionParameterEducation}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      onChange={(value) => {
                        setSelectedParameterEducation(value);
                        setDataForm({
                          ...dataForm,
                          pendidikan: value.value,
                        });
                      }}
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
                    <Select
                      value={selectedParameterProfession}
                      options={optionParameterProfession}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      onChange={(value) => {
                        setSelectedParameterProfession(value);
                        setDataForm({
                          ...dataForm,
                          pekerjaan: value.value,
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
                  <label>Provinsi</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                    </div>
                    <Select
                      value={selectedParameterProvince}
                      options={optionParameterProvince}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      onChange={(value) => {
                        setSelectedParameterProvince(value);
                        setSelectedParameterCity({});
                        setSelectedParameterDistricts({});
                        setSelectedParameterWard({});
                        setStatusData({ ...statusData, prov: false });
                        setDataForm({
                          ...dataForm,
                          prov: value.value,
                          kota: null,
                          kec: null,
                          kel: null,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Kota/Kabupaten</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                    </div>
                    <Select
                      value={selectedParameterCity}
                      options={optionParameterCity}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      onChange={(value) => {
                        setSelectedParameterCity(value);
                        setSelectedParameterDistricts({});
                        setSelectedParameterWard({});
                        setStatusData({ ...statusData, kota: false });
                        setDataForm({
                          ...dataForm,
                          kota: value.value,
                          kec: null,
                          kel: null,
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
                    <Select
                      value={selectedParameterDistricts}
                      options={optionParameterDistricts}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      onChange={(value) => {
                        setSelectedParameterDistricts(value);
                        setSelectedParameterWard({});
                        setStatusData({ ...statusData, kec: false });
                        setDataForm({
                          ...dataForm,
                          kec: value.value,
                          kel: null,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mx-5 mb-5">
                  <label>Kelurahan/Desa</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ width: 45 }}>
                        <i className="fas fa-map-marker"></i>
                      </span>
                    </div>
                    <Select
                      value={selectedParameterWard}
                      options={optionParameterWard}
                      isDisabled={statusForm || loadingUpdate}
                      className="form-control border-0 p-0 h-100"
                      classNamePrefix="react-select"
                      onChange={(value) => {
                        setSelectedParameterWard(value);
                        setStatusData({ ...statusData, kel: false });
                        setDataForm({
                          ...dataForm,
                          kel: value.value,
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
                  className={`btn btn-primary mx-1 ${
                    !statusForm || (position !== "registry" && "d-none")
                  }`}
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
              <MedicalRecord {...props} />
            </div>
          )}
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(PatientPage));
