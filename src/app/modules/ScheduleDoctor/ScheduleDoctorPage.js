import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import {
  createScheduleDoctor,
  getScheduleDoctor,
  listAllPoli,
  listDoctor,
} from "./_redux/CrudScheduleDoctor";
import { MODAL } from "../../../service/modalSession/ModalService";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";

const initialValues = {};

function ScheduleDoctor(props) {
  const { intl } = props;
  const [dialogRegis, setDialogRegis] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [dialogDetail, setDialogDetail] = useState(false);
  const [detail, setDetail] = useState({});
  const [dataCalendar, setDataCalendar] = useState([]);
  const [optionParameterPoli, setOptionParameterPoli] = useState([]);
  const [selectedParameterPoli, setSelectedParameterPoli] = useState({});
  const [optionParameterDoctor, setOptionParameterDoctor] = useState([]);
  const [selectedParameterDoctor, setSelectedParameterDoctor] = useState({});
  const suhbeader = useSubheader();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/registry/regis-doctor",
        title: intl.formatMessage({ id: "LABEL.SCHEDULE_DOCTOR" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.SCHEDULE_DOCTOR" }));
  }, []);

  const callApiListSchedule = () => {
    getScheduleDoctor()
      .then((result) => {
        result.data.data.forEach((element) => {
          element.title = element?.dokter?.nama + " - " + element?.poli?.poli;
          element.start = element?.praktek_date;
        });
        result.data.data.sort((a, b) =>
          new Date(a.praktek_date) < new Date(b.praktek_date)
            ? 1
            : new Date(b.praktek_date) < new Date(a.praktek_date)
            ? -1
            : 0
        );
        setDataCalendar(result.data.data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };
  useEffect(callApiListSchedule, []);

  const Schema = Yup.object().shape({
    poli_id: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    dokter_id: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    praktek_date: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoadingSave(true);
      createScheduleDoctor(values)
        .then((result) => {
          setLoadingSave(false);
          setDialogRegis(false);
          setSelectedParameterDoctor({});
          setSelectedParameterPoli({});
          formik.resetForm();
          callApiListSchedule();
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
            "success"
          );
        })
        .catch((err) => {
          setLoadingSave(false);
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    },
  });

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

  const callApiListDoctor = () => {
    listDoctor()
      .then((result) => {
        var data = result.data.data;
        data.forEach((element) => {
          element.value = element.id;
          element.label = element.nama;
        });
        setOptionParameterDoctor(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListDoctor, []);

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
            <FormattedMessage id="LABEL.ADD" />
          </DialogTitle>
          <DialogContent>
            <div style={{ height: 400 }}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  <FormattedMessage id="LABEL.DOCTOR" />
                </label>
                <div className="col-sm-9">
                  <Select
                    value={selectedParameterDoctor}
                    options={optionParameterDoctor}
                    isDisabled={loadingSave}
                    className="form-control border-0 p-0 h-100 rounded-0"
                    classNamePrefix="react-select"
                    menuPlacement="auto"
                    onChange={(value) => {
                      setSelectedParameterDoctor(value);
                      formik.setFieldValue("dokter_id", value.value);
                    }}
                    onBlur={() => {
                      formik.setFieldTouched({ ...formik, dokter_id: true });
                    }}
                  />
                  {formik.touched.dokter_id && formik.errors.dokter_id && (
                    <span className="text-left text-danger">
                      {formik.errors.dokter_id}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  <FormattedMessage id="LABEL.POLI" />
                </label>
                <div className="col-sm-9">
                  <Select
                    value={selectedParameterPoli}
                    options={optionParameterPoli}
                    isDisabled={loadingSave}
                    className="form-control border-0 p-0 h-100 rounded-0"
                    classNamePrefix="react-select"
                    menuPlacement="auto"
                    onChange={(value) => {
                      setSelectedParameterPoli(value);
                      formik.setFieldValue("poli_id", value.value);
                    }}
                    onBlur={() => {
                      formik.setFieldTouched({ ...formik, poli_id: true });
                    }}
                  />
                  {formik.touched.poli_id && formik.errors.poli_id && (
                    <span className="text-left text-danger">
                      {formik.errors.poli_id}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  <FormattedMessage id="LABEL.SCHEDULE_DOCTOR" />
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    min={window.moment(new Date()).format("YYYY-MM-DD")}
                    required
                    className="form-control"
                    disabled={loadingSave}
                    {...formik.getFieldProps("praktek_date")}
                  />
                  {formik.touched.praktek_date &&
                    formik.errors.praktek_date && (
                      <span className="text-left text-danger">
                        {formik.errors.praktek_date}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                !formik.isValid ||
                (Object.keys(formik.touched).length === 0 &&
                  formik.touched.constructor === Object) ||
                loadingSave
              }
            >
              {loadingSave ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingSave ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setDialogRegis(false);
                setSelectedParameterDoctor({});
                setSelectedParameterPoli({});
                formik.resetForm();
              }}
              disabled={loadingSave}
            >
              <i className="fas fa-times px-1"></i>
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Dialog
        open={dialogDetail}
        // keepMounted
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.DETAIL" />
        </DialogTitle>
        <DialogContent>
          <div style={{ height: 400 }}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.DOCTOR" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  required
                  className="form-control"
                  disabled
                  value={detail?.nama}
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.POLI" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  required
                  className="form-control"
                  disabled
                  value={detail?.poli?.poli}
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.SCHEDULE_DOCTOR" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  required
                  className="form-control"
                  disabled
                  value={moment(new Date(detail?.praktek_date)).format(
                    "DD MMM YYYY"
                  )}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              setDialogDetail(false);
            }}
          >
            <FormattedMessage id="LABEL.OK" />
          </button>
        </DialogActions>
      </Dialog>
      <Card>
        <CardHeader title="">
          <CardHeaderToolbar>
            <button
              type="button"
              className={`btn btn-primary mx-1`}
              onClick={() => {
                setDialogRegis(true);
              }}
            >
              <FormattedMessage id="LABEL.ADD" />
              <i className="far fa-calendar-plus ml-2"></i>
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            initialEvents={dataCalendar} // alternatively, use the `events` setting to fetch from a feed
            events={dataCalendar}
            select={(e) => {
              // console.log("select", e);
            }}
            // eventContent={renderEventContent} // custom render function
            eventClick={(e) => {
              // console.log("eventClick", e);
            }}
            eventsSet={(e) => {
              // console.log("eventsSet", e);
            }} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(ScheduleDoctor));
