import React, { useMemo, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { DropdownMenu2 } from "../../../_metronic/_partials/dropdowns";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { FormattedMessage, injectIntl } from "react-intl";
import { useHistory, Link } from "react-router-dom";
import { useHtmlClassService } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import {
  getDataChartDashboardDoctor,
  getDataQueueRegistry,
  setDataProcessDoctor,
} from "../_redux/CrudPages";
import { MODAL } from "../../../service/modalSession/ModalService";
import { connect, useSelector, shallowEqual } from "react-redux";
import { callPatient } from "../../../redux/MqttOptions";
import { publish } from "../../../redux/MqttOptions";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function Body1(props) {
  const { intl } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const uiService = useHtmlClassService();
  const [dataChart, setChart] = React.useState({
    data: [],
    categories: [],
  });
  const [dataQueue, setQueue] = React.useState([]);
  const [dataCount, setDataCount] = React.useState({
    waiting: 0,
    regqty: 0,
    done: 0,
    process: {},
  });
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const user = useSelector(({ auth }) => auth.user, shallowEqual);
  const history = useHistory();

  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseDanger: objectPath.get(
        uiService.config,
        "js.colors.theme.base.danger"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
      dataChart: dataChart,
      label: intl.formatMessage({ id: "LABEL.VISITORS" }),
      des: intl.formatMessage({ id: "LABEL.PATIENT" }),
    };
  }, [uiService, dataChart]);

  useEffect(() => {
    const element = document.getElementById("kt_mixed_widget_1_chart");
    if (!element) {
      return;
    }

    const options = getChartOptions(layoutProps);

    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  const callApiDataChartDasboard = () => {
    getDataChartDashboardDoctor()
      .then((result) => {
        setChart({
          ...dataChart,
          data: result.data.data.graph.data,
          categories: result.data.data.graph.category,
        });
        setDataCount({
          ...dataCount,
          regqty: result.data.data.regqty,
          waiting: result.data.data.waiting,
          done: result.data.data.done,
          process: result.data.data.process,
        });
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  // useEffect(callApiDataChartDasboard, []);

  const callApiDataQueue = () => {
    getDataQueueRegistry()
      .then((result) => {
        setQueue(result.data.data.queue[user.role_id]);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  // useEffect(callApiDataQueue, []);

  useEffect(() => {
    if (client?.on && typeof client?.on === "function") {
      client.on("message", (topic, message) => {
        const payload = { topic, message: message.toString() };
        if (payload.topic === "dashboard-registry") {
          callApiDataQueue();
          callApiDataChartDasboard();
        }
      });
    }
  }, [client]);

  const stateGo = (data) => {
    history.push(`/pharmacist/handling-page/process`);
    // setDataProcessDoctor(data.id)
    //   .then((result) => {
    //     history.push(
    //       `/pharmacist/handling-page/process/${data.pasien_id}/${data.id}/${data.medical_id}`
    //     );
    //     mqttPublish();
    //   })
    //   .catch((err) => {
    //     MODAL.showSnackbar(err.response.data.messages);
    //   });
  };

  const mqttPublish = () => {
    if (client) {
      const { topic, qos, payload } = publish;
      client.publish(topic, payload, { qos }, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        }
      });
    }
  };

  return (
    <React.Fragment>
      <div className="row gutter-b">
        <div className="col-md-4">
          <div className={`card card-custom bg-gray-100 card-stretch gutter-b`}>
            {/* Header */}
            <div className="card-header border-0 bg-danger py-5">
              <h3 className="card-title font-weight-bolder text-white">
                <FormattedMessage id="LABEL.MONITORING" />
              </h3>
              <div className="card-toolbar"></div>
            </div>
            {/* Body */}
            <div className="card-body p-0 position-relative overflow-hidden">
              {/* Chart */}
              <div
                id="kt_mixed_widget_1_chart"
                className="card-rounded-bottom bg-danger"
                style={{ height: "200px" }}
              ></div>

              {/* Stat */}
              <div className="card-spacer mt-n25">
                <div className="row m-0">
                  <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                    <span className="font-size-h1 d-block my-2 text-warning">
                      {dataCount.regqty}
                    </span>
                    <Link
                      to={`/pharmacist/handling-page/list-reservation`}
                      className="text-warning font-weight-bold font-size-h6"
                    >
                      <FormattedMessage id="LABEL.OUT_OF_MEDICINE" />
                    </Link>
                  </div>
                  <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                    <span className="font-size-h2 d-block my-2 text-primary">
                      {dataCount.regqty}
                    </span>
                    <Link
                      to={`/pharmacist/handling-page/process/${dataCount.process.pasien_id}/${dataCount.process.id}/${dataCount.process.medical_id}`}
                      className="text-primary d-block font-weight-bold font-size-h6 mt-2"
                    >
                      <FormattedMessage id="LABEL.PRE_ORDER" />
                    </Link>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                    <span className="font-size-h1 d-block my-2 text-danger">
                      {dataCount.waiting}
                    </span>
                    <span className="text-danger font-weight-bold font-size-h6 mt-2">
                      <FormattedMessage id="LABEL.DRUG_STOCKS_ARE_RUNNING_OUT" />
                    </span>
                  </div>
                  <div className="col bg-light-success px-6 py-8 rounded-xl">
                    <span className="font-size-h1 d-block my-2 text-success">
                      {dataCount.done}
                    </span>
                    <Link
                      to={`/pharmacist/handling-page/done`}
                      className="text-success font-weight-bold font-size-h6 mt-2"
                    >
                      <FormattedMessage id="LABEL.NEED_PREPARE" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resize */}
              <div className="resize-triggers">
                <div className="expand-trigger">
                  <div style={{ width: "411px", height: "461px" }} />
                </div>
                <div className="contract-trigger" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card card-custom bg-light-success card-stretch gutter-b">
            <div className="card-header border-0">
              <h3 className="card-title font-weight-bolder text-success">
                Dokter Aktif
              </h3>
              <div className="card-toolbar"></div>
            </div>
            <div className="card-body pt-2">
              <div className="d-flex align-items-center mb-10">
                <div className="symbol symbol-40 symbol-light-white mr-5">
                  <div className="symbol-label">
                    <img
                      src={toAbsoluteUrl("/media/svg/avatars/004-boy-1.svg")}
                      className="h-75 align-self-end"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column font-weight-bold">
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg"
                  >
                    Arka Tama
                  </a>
                  <span className="text-muted">Poli Umum dan Bidan</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-10">
                <div className="symbol symbol-40 symbol-light-white mr-5">
                  <div className="symbol-label">
                    <img
                      src={toAbsoluteUrl("/media/svg/avatars/002-girl.svg")}
                      className="h-75 align-self-end"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column font-weight-bold">
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg"
                  >
                    Arka
                  </a>
                  <span className="text-muted">Poli Gigi</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-10">
                <div className="symbol symbol-40 symbol-light-white mr-5">
                  <div className="symbol-label">
                    <img
                      src={toAbsoluteUrl("/media/svg/avatars/007-boy-2.svg")}
                      className="h-75 align-self-end"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column font-weight-bold">
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg"
                  >
                    Azhari
                  </a>
                  <span className="text-muted">Poli Kulit</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-10">
                <div className="symbol symbol-40 symbol-light-white mr-5">
                  <div className="symbol-label">
                    <img
                      src={toAbsoluteUrl("/media/svg/avatars/008-boy-3.svg")}
                      className="h-75 align-self-end"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-column font-weight-bold">
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg"
                  >
                    Randy Trent
                  </a>
                  <span className="text-muted">Poli Umum dan Bidan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-8">
          <div className="card card-custom card-stretch gutter-b">
            <div className="tab-content h-100">
              <div className="table-responsive h-100">
                <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                  <thead>
                    <tr className="text-left text-uppercase">
                      <th className="pl-7" style={{ width: "75px" }}>
                        <FormattedMessage id="LABEL.TABLE_HEADER.NO" />
                      </th>
                      <th style={{ minWidth: "150px" }}>
                        <FormattedMessage id="LABEL.PATIENT_CODE" />
                      </th>
                      <th style={{ minWidth: "150px" }}>
                        <FormattedMessage id="LABEL.REGISTRATION_NO" />
                      </th>
                      <th style={{ minWidth: "200px" }}>
                        <FormattedMessage id="LABEL.PATIENT_NAME" />
                      </th>
                      <th style={{ minWidth: "200px" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(1)].map((item, index) => {
                      return (
                        <tr key={index.toString()}>
                          <td className="pl-0 py-3">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50 symbol-light mx-4">
                                <span className="symbol-label">
                                  <span className="svg-icon h-75 align-self-end">
                                    {index + 1}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {item?.kode_pasien || "--"}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              --
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {item?.nama || "--"}
                            </span>
                            <span className="text-muted font-weight-bold">
                            </span>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm mx-1"
                              onClick={() => {
                                stateGo(item);
                              }}
                            >
                              <i className="fas fa-sign-in-alt"></i>
                              <FormattedMessage id="LABEL.CHECK" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
}

function getChartOptions(layoutProps) {
  const strokeColor = "#D13647";

  const options = {
    series: [
      {
        name: layoutProps.label,
        data: layoutProps.dataChart.data,
      },
    ],
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 0,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: layoutProps.dataChart.categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      // min: 0,
      // max: 80,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily,
      },
      y: {
        formatter: function (val) {
          return val + " " + layoutProps.des;
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["transparent"],
    markers: {
      colors: layoutProps.colorsThemeBaseDanger,
      strokeColor: [strokeColor],
      strokeWidth: 3,
    },
  };
  return options;
}

export default injectIntl(connect(null, null)(Body1));