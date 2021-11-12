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
import { cloneDeep } from "lodash";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

function ScreeningPatientPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const suhbeader = useSubheader();
  const [dataCheckIn, setDataCheckIn] = useState({});
  const [dataScreeningLoading, setDataScreeningLoading] = useState(false);
  const [dataScreening, setDataScreening] = useState(screeningItem);
  const [dataScreeningErr, setDataScreeningErr] = useState(false);
  const patient_id = props.match.params.patient_id;
  const poli = props.match.params.poli;
  const reservasi_id = props.match.params.reservasi_id;
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

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
    var screenitems_ = [
      ...dataScreening[0].item,
      ...dataScreening[1].item,
      ...dataScreening[2].item,
      ...dataScreening[3].item,
      ...dataScreening[4].item,
    ];
    for (let i = 0; i < screenitems_.length; i++) {
      var val_desc = document.getElementById(
        (screenitems_[i].nama + screenitems_[i].id)
          .match(/[a-zA-Z0-9]+/g)
          .join("")
      ).value;
      var item = {
        medkind_id: screenitems_[i].medkind_id,
        medform_id: screenitems_[i].medform_id,
        val_desc,
      };
      if (val_desc.trim().length != 0) screenitems.push(item);
    }
    var dataReq = {
      reservasi_id,
      screenitems,
      formkind_id: poli,
    };
    regisScreeningData(dataReq)
      .then((result) => {
        setDataScreeningLoading(false);
        setDataScreening(screeningItem);
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
    setDataScreening(screeningItem);
    getScreeningData(poli)
      .then((result) => {
        setDataScreeningLoading(false);
        var data = cloneDeep(dataScreening);
        var items = result.data.data;
        data[0].item = items.filter((item) => item.group_id === 1);
        data[1].item = items.filter((item) => item.group_id === 2);
        data[2].item = items.filter((item) => item.group_id === 3);
        data[3].item = items.filter((item) => item.group_id === 4);
        data[4].item = items.filter((item) => item.group_id === 5);
        setDataScreening(data);
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
                            <div key={idx.toString()} className="col-sm-4">
                              <div className="form-group">
                                <label>{value.nama}</label>
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
                                    id={(value.nama + value.id)
                                      .match(/[a-zA-Z0-9]+/g)
                                      .join("")}
                                    disabled={
                                      dataScreeningLoading ||
                                      value.dokter_only === 2
                                    }
                                  />
                                ) : (
                                  <textarea
                                    rows="3"
                                    id={(value.nama + value.id)
                                      .match(/[a-zA-Z0-9]+/g)
                                      .join("")}
                                    className="form-control"
                                    disabled={
                                      dataScreeningLoading ||
                                      value.dokter_only === 2
                                    }
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
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(ScreeningPatientPage));
