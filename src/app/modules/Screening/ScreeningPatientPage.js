import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  CardHeaderTitle,
} from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import {
  regisScreeningData,
  getScreeningData,
  getReservationById,
} from "./_redux/CrudScreening";
import { MODAL } from "../../../service/modalSession/ModalService";
import { publish, callDoctor } from "../../../redux/MqttOptions";

function ScreeningPatientPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const suhbeader = useSubheader();
  const [dataCheckIn, setDataCheckIn] = useState({});
  const [dataScreeningLoading, setDataScreeningLoading] = useState(false);
  const [dataScreening, setDataScreening] = useState([]);
  const [dataScreeningErr, setDataScreeningErr] = useState(false);
  const patient_id = props.match.params.patient_id;
  const poli = props.match.params.poli;
  const reservasi_id = props.match.params.reservasi_id;
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/registry/screening/list",
        title: intl.formatMessage({ id: "LABEL.SCREENING_LIST" }),
      },
      {
        pathname: `/registry/screening/patient/${patient_id}/${poli}/${reservasi_id}`,
        title: intl.formatMessage({ id: "LABEL.PATIENT_SCREENING" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.PATIENT_SCREENING" }));
  }, []);

  const saveScreening = (e) => {
    e.preventDefault();
    setDataScreeningLoading(true);
    var screenitems = [];
    for (let i = 0; i < dataScreening.length; i++) {
      var val_desc = document.getElementById(
        (dataScreening[i].nama + dataScreening[i].id)
          .match(/[a-zA-Z0-9]+/g)
          .join("")
      ).value;
      var item = {
        medkind_id: dataScreening[i].medkind_id,
        medform_id: dataScreening[i].medform_id,
        val_desc,
      };
      if (val_desc.trim().length != 0) screenitems.push(item);
    }
    var dataReq = {
      reservasi_id,
      screenitems,
    };
    regisScreeningData(dataReq)
      .then((result) => {
        setDataScreeningLoading(false);
        setDataScreening([]);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success",
          3000
        );
        mqttPublish();
        props.history.goBack();
      })
      .catch((err) => {
        setDataScreeningLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

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

  const callApiGetScreeningData = () => {
    setDataScreeningErr(false);
    setDataScreeningLoading(true);
    setDataScreening([]);
    getScreeningData(poli)
      .then((result) => {
        setDataScreeningLoading(false);
        setDataScreening(result.data.data);
      })
      .catch((err) => {
        setDataScreeningErr(true);
        setDataScreeningLoading(false);
        MODAL.showSnackbar(err.response.data.messages);
      });
  };

  useEffect(callApiGetScreeningData, []);

  const callApiGetPasienById = () => {
    getReservationById(reservasi_id)
      .then((result) => {
        setDataCheckIn(result.data.data);
      })
      .catch((err) => {
        MODAL.showSnackbar(err.response.data.messages);
      });
  };

  useEffect(callApiGetPasienById, []);

  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="LABEL.SCREENING" />
            </CardHeaderTitle>
            {dataScreeningLoading && (
              <span className="text-danger">
                <i className="fas fa-spinner fa-pulse px-2"></i>
                <FormattedMessage id="LABEL.WAITING" />
              </span>
            )}
          </div>
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => {
                props.history.goBack();
              }}
            >
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
            <button
              type="button"
              className={`btn btn-primary mx-1 ${
                dataScreeningErr ? "d-none" : ""
              }`}
              disabled={dataScreeningLoading}
              onClick={saveScreening}
            >
              <FormattedMessage id="LABEL.SAVE" />
              <i className="fas fa-save ml-2"></i>
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <form autoComplete="off">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.PATIENT_CODE" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={dataCheckIn.kode_pasien}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.PATIENT_NAME" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={dataCheckIn.nama}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.POLI" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={dataCheckIn.poli}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4">
                    <FormattedMessage id="LABEL.DATE_OF_VISIT" />
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={
                        dataCheckIn.tgl_book
                          ? window
                              .moment(new Date(dataCheckIn.tgl_book))
                              .format("DD MMM YYYY")
                          : ""
                      }
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <h6>
                  <FormattedMessage id="LABEL.PATIENT_SCREENING" />
                </h6>
              </div>
            </div>
            <div className="row">
              {dataScreening.map((item, index) => {
                return (
                  <div key={index.toString()} className="col-sm-4">
                    <div className="form-group">
                      <label>{item.nama}</label>
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
                          id={(item.nama + item.id)
                            .match(/[a-zA-Z0-9]+/g)
                            .join("")}
                          disabled={
                            dataScreeningLoading || item.dokter_only === 2
                          }
                        />
                      ) : (
                        <textarea
                          rows="3"
                          id={(item.nama + item.id)
                            .match(/[a-zA-Z0-9]+/g)
                            .join("")}
                          className="form-control"
                          disabled={
                            dataScreeningLoading || item.dokter_only === 2
                          }
                        ></textarea>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(ScreeningPatientPage));
