import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import Select from "react-select";
import {
  listAllPatient,
  listAllPoli,
  getPatientById,
  regisReservation,
  listPatientPagination,
} from "./_redux/CrudReservationPatient";
import { MODAL } from "../../../service/modalSession/ModalService";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Avatar,
  Collapse,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Tables from "../../components/tableCustomV1/table";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { publish, callDoctor } from "../../../redux/MqttOptions";

const useStyles = makeStyles({
  bigAvatar: {
    width: 80,
    height: 80,
  },
});

const headerTable = [
  {
    title: "LABEL.PATIENT_CODE",
    name: "kode_pasien",
    order: {
      active: true,
      status: true,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.PATIENT_NAME",
    name: "nama",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.REGISTRATION_DATE",
    name: "created_at",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.ADDRESS",
    name: "kota",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.PHONE_NUMBER",
    name: "no_telp",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "number",
    },
  },
  {
    title: "LABEL.GENDER",
    name: "jk",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: false,
      type: "text",
    },
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "text",
    },
  },
];

const initialValues = {};

function RegisReservationPage(props) {
  const { intl } = props;
  const [loadingRegis, setLoadingRegis] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const [selectedParameterPatient, setSelectedParameterPatient] = useState({});
  const [optionParameterPatient, setOptionParameterPatient] = useState([]);
  const [selectedParameterPoli, setSelectedParameterPoli] = useState({});
  const [optionParameterPoli, setOptionParameterPoli] = useState([]);
  const [dialogRegis, setDialogRegis] = useState(false);
  const [dataRegis, setDataRegis] = useState({});
  const [statusTable, setStatusTable] = useState(false);
  const classes = useStyles();
  const suhbeader = useSubheader();
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/regis-page/reservation`,
        title: intl.formatMessage({ id: "LABEL.RESERVATION" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.RESERVATION" }));
  }, []);

  const Schema = Yup.object().shape({
    tgl_book: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    poli_id: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoadingRegis(true);
      var data = values;
      data.pasien_id = selectedParameterPatient.id;
      regisReservation(data)
        .then((result) => {
          setSelectedParameterPatient({});
          setDialogRegis(false);
          setLoadingRegis(false);
          setSelectedParameterPoli({});
          setStatusTable(false);
          formik.resetForm();
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
            "success",
            3000
          );
          mqttPublish();
        })
        .catch((err) => {
          setLoadingRegis(false);
          MODAL.showSnackbar(err.response?.data.messages);
        });
    },
  });

  const mqttPublish = () => {
    if (client) {
      const { topic, qos, payload } = publish;
      const { topicCallDoctor, qosCallDoctor, payloadCallDoctor } = callDoctor;
      client.publish(topic, payload, { qos }, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        }
      });
      client.publish(
        topicCallDoctor,
        payloadCallDoctor,
        { qosCallDoctor },
        (error) => {
          if (error) {
            console.log("Publish error: ", error);
          }
        }
      );
    }
  };

  const callApiListPatient = () => {
    listAllPatient()
      .then((result) => {
        result.data.data.rows = result.data.data.rows.filter(
          (item) => item.active_user === 1
        );
        console.log(result.data.data.rows);
        var data = result.data.data.rows;
        data.forEach((element) => {
          element.value = element.kode_pasien;
          element.label = element.kode_pasien + "-" + element.nama;
        });
        setOptionParameterPatient(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const callApiListPoli = () => {
    listAllPoli()
      .then((result) => {
        var data = result.data.data;
        data.forEach((element) => {
          element.value = element.id;
          element.label = element.poli;
        });
        setOptionParameterPoli(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListPoli, []);
  useEffect(callApiListPatient, []);

  const callApiPatient = (id) => {
    getPatientById(id)
      .then((result) => {
        setDataRegis(result.data.data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    listPatientPagination(params)
      .then((result) => {
        setLoading(false);
        result.data.data.rows = result.data.data.rows.filter(
          (item) => item.active_user === 1
        );
        setData({
          ...data,
          count: result.data.data.count || 0,
          data: result.data.data.rows,
        });
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialogRegis}
        // keepMounted
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <DialogTitle>
            <FormattedMessage id="LABEL.REGISTRATION" />
          </DialogTitle>
          <DialogContent>
            <div className="row bg-primary p-5 rounded">
              <div className="col-md-2 pt-5">
                <Avatar
                  alt="Foto"
                  src={toAbsoluteUrl("/media/svg/avatars/004-boy-1.svg")}
                  className={classes.bigAvatar + " m-auto"}
                />
                <div className="text-center pt-5">
                  <Link
                    to={`/registry/patient/list/${dataRegis?.id}`}
                    className="btn btn-success"
                  >
                    Detail
                  </Link>
                </div>
              </div>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label text-light">
                        NIK
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          value={dataRegis?.ktpno || ""}
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label text-light">
                        Nama Lengkap
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          value={dataRegis?.nama || ""}
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label text-light">
                        Tempat, Tanggal Lahir
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          value={
                            (dataRegis?.tempat_lahir
                              ? dataRegis?.tempat_lahir
                              : "") +
                              ", " +
                              (dataRegis?.tgl_lahir
                                ? window
                                    .moment(new Date(dataRegis?.tgl_lahir))
                                    .format("DD MMM YYYY")
                                : "") || ""
                          }
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label text-light">
                        No Pasien
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          value={dataRegis?.kode_pasien || ""}
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label text-light">
                        Terakhir Kunjungan
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          value={
                            dataRegis?.last_time
                              ? window
                                  .moment(new Date(dataRegis?.last_time))
                                  .format("DD MMM YYYY")
                              : ""
                          }
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label text-light">
                        Alamat
                      </label>
                      <div className="col-sm-8">
                        <textarea
                          rows="3"
                          className="form-control"
                          value={dataRegis?.alamat || ""}
                          onChange={() => {}}
                          disabled
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12 col-md-8"></div>
              <div className="col-12 col-md-4 px-0 py-5">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary">
                      <i className="far fa-calendar-plus text-light"></i>
                    </span>
                  </div>
                  <input
                    type="date"
                    className="form-control"
                    min={window.moment(new Date()).format("YYYY-MM-DD")}
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("tgl_book")}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary">
                      <i className="far fa-list-alt text-light"></i>
                    </span>
                  </div>
                  <Select
                    value={selectedParameterPoli}
                    options={optionParameterPoli}
                    isDisabled={loadingRegis}
                    className="form-control border-0 p-0 h-100 rounded-0"
                    classNamePrefix="react-select"
                    menuPlacement="top"
                    onChange={(value) => {
                      setSelectedParameterPoli(value);
                      formik.setFieldValue("poli_id", value.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              onClick={() => {
                setDialogRegis(false);
                setSelectedParameterPoli({});
                setSelectedParameterPatient({});
                formik.resetForm();
              }}
              className="btn btn-danger"
              disabled={loadingRegis}
            >
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                !formik.isValid ||
                (Object.keys(formik.touched).length === 0 &&
                  formik.touched.constructor === Object) ||
                loadingRegis
              }
            >
              {loadingRegis ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingRegis ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Card>
        <CardBody>
          <div>
            <h1 className="text-uppercase text-center mb-5 pb-5">
              <FormattedMessage id="LABEL.RESERVATION" />
            </h1>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-qrcode"></i>
              </span>
            </div>
            <Select
              value={selectedParameterPatient}
              options={optionParameterPatient}
              isDisabled={false}
              className="form-control border-0 p-0 h-100 rounded-0"
              classNamePrefix="react-select"
              onChange={(value) => {
                setSelectedParameterPatient(value);
                callApiPatient(value.id);
                setDialogRegis(true);
              }}
            />
            <div
              className="input-group-append cursor-pointer"
              onClick={() => {
                setStatusTable(!statusTable);
              }}
            >
              <span className="input-group-text bg-primary text-light">
                <FormattedMessage id="LABEL.ADVANCED_SEARCH" />
              </span>
            </div>
          </div>

          <Collapse in={statusTable}>
            <div className="m-5">
              <Tables
                dataHeader={headerTable}
                handleParams={requestApi}
                loading={loading}
                err={err}
                countData={data.count}
                hecto={10}
              >
                {data.data.map((item, index) => {
                  return (
                    <TableRow key={index.toString()}>
                      <TableCell>{item.kode_pasien}</TableCell>
                      <TableCell>{item?.nama}</TableCell>
                      <TableCell>
                        {window
                          .moment(new Date(item?.created_at))
                          .format("DD MMM YYYY")}
                      </TableCell>
                      <TableCell>{item?.kota}</TableCell>
                      <TableCell>{item?.no_telp}</TableCell>
                      <TableCell>
                        {item?.jk === "L" ? "Laki-Laki" : "Perempuan"}
                      </TableCell>
                      <TableCell>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            var data = item;
                            data.value = data.kode_pasien;
                            data.label = data.kode_pasien + "-" + data.nama;
                            setSelectedParameterPatient(data);
                            callApiPatient(item.id);
                            setDialogRegis(true);
                          }}
                        >
                          Pilih
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </Tables>
            </div>
          </Collapse>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(RegisReservationPage));
