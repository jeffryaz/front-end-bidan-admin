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
  getReservationById,
  getFormformat,
} from "./_redux/CrudScreening";
import { MODAL } from "../../../service/modalSession/ModalService";
import { publish, callDoctor } from "../../../redux/MqttOptions";
import { cloneDeep } from "lodash";
import {
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
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

function ScreeningPatientPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [dataCheckIn, setDataCheckIn] = useState({});
  const [dataScreeningLoading, setDataScreeningLoading] = useState(false);
  const [dataScreeningErr, setDataScreeningErr] = useState(false);
  const patient_id = props.match.params.patient_id;
  const poli = props.match.params.poli;
  const reservasi_id = props.match.params.reservasi_id;
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const classes = useStyles();
  const [dataCustom, setDataCustom] = React.useState([]);
  let dataLoopSave = [];

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

  const loopSaveScreening = async (data) => {
    await new Promise(async (res, rej) => {
      if (data.input.length > 0) {
        data.input.forEach((element, index, array) => {
          var val_desc = element.val_desc ? element.val_desc : "";
          var item = {
            medkind_id: element.medkind_id,
            medform_id: element.id,
            formkind_id: data.formkind_id,
            val_desc,
          };
          if (val_desc.trim().length != 0) {
            dataLoopSave.push(item);
          }
          if (index === array.length - 1) res();
        });
      } else {
        res();
      }
    });

    await new Promise(async (res, rej) => {
      if (data.subtitle.length > 0) {
        data.subtitle.forEach(async (element, index, array) => {
          await loopSaveScreening(element);
          if (index === array.length - 1) res();
        });
      } else {
        res();
      }
    });
  };

  const saveScreening = (e) => {
    e.preventDefault();
    setDataScreeningLoading(true);
    let data = cloneDeep(dataCustom);
    data.forEach(async (element) => {
      await loopSaveScreening(element);
    });
    setTimeout(() => {
      var dataReq = {
        reservasi_id,
        screenitems: dataLoopSave,
        formkind_id: poli,
      };
      regisScreeningData(dataReq)
        .then((result) => {
          setDataScreeningLoading(false);
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
    }, 1500);
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

  const callApiDetail = () => {
    getFormformat(poli)
      .then((result) => {
        setDataCustom(result.data.data);
      })
      .catch((err) => {
        MODAL.showSnackbar(err.response?.data.messages);
      });
  };

  useEffect(callApiDetail, []);

  const callApiGetPasienById = () => {
    getReservationById(reservasi_id)
      .then((result) => {
        setDataCheckIn(result.data.data);
      })
      .catch((err) => {
        MODAL.showSnackbar(err.response?.data.messages);
      });
  };

  useEffect(callApiGetPasienById, []);

  const onChangesValue = (indexList, indexInput, e) => {
    let listIndex = indexList.split(",");
    let data_ = cloneDeep(dataCustom);
    if (listIndex.length === 1) {
      data_[listIndex[0]].input[indexInput].val_desc = e.target.value;
      setDataCustom(data_);
    } else if (listIndex.length === 2) {
      data_[listIndex[0]].subtitle[listIndex[1]].input[indexInput].val_desc =
        e.target.value;
      setDataCustom(data_);
    } else if (listIndex.length === 3) {
      data_[listIndex[0]].subtitle[listIndex[1]].subtitle[listIndex[2]].input[
        indexInput
      ].val_desc = e.target.value;
      setDataCustom(data_);
    } else if (listIndex.length === 4) {
      data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
        listIndex[2]
      ].subtitle[listIndex[3]].input[indexInput].val_desc = e.target.value;
      setDataCustom(data_);
    } else if (listIndex.length === 5) {
      data_[listIndex[0]].subtitle[listIndex[1]].subtitle[
        listIndex[2]
      ].subtitle[listIndex[3]].subtitle[listIndex[4]].input[
        indexInput
      ].val_desc = e.target.value;
      setDataCustom(data_);
    }
  };

  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="LABEL.SCREENING" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            {dataScreeningLoading && (
              <span className="text-danger">
                <i className="fas fa-spinner fa-pulse px-2"></i>
                <FormattedMessage id="LABEL.WAITING" />
              </span>
            )}
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => {
                props.history.goBack();
              }}
              disabled={dataScreeningLoading}
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
            {dataCustom.map((item, index) => (
              <ListItem
                key={index.toString()}
                index={index.toString()}
                item={item}
                classes={classes}
                onChangesValue={onChangesValue}
              />
            ))}
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

function ListItem({ item, classes, index, onChangesValue }) {
  let children = null;
  children = (
    <div className="w-100">
      <div className="row">
        {item.subtitle.map((i, idx) => (
          <div className="col-12" key={idx.toString()}>
            <ListItem
              item={i}
              index={
                index && typeof index === "string"
                  ? index + "," + idx.toString()
                  : null
              }
              classes={classes}
              onChangesValue={onChangesValue}
            />
          </div>
        ))}

        {item.input.map((a, adx) => (
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
                    disabled={a.dokter_only === 2}
                    value={a.val_desc || ""}
                    onChange={(e) => {
                      onChangesValue(index, adx, e);
                    }}
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
                    disabled={a.dokter_only === 2}
                    value={a.val_desc || ""}
                    onChange={(e) => {
                      onChangesValue(index, adx, e);
                    }}
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

export default injectIntl(connect(null, null)(ScreeningPatientPage));
