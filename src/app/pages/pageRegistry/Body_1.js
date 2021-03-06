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
import { Link } from "react-router-dom";
import { useHtmlClassService } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import {
  getDataChartDashboardRegistry,
  getDataQueueRegistry,
} from "../_redux/CrudPages";
import { MODAL } from "../../../service/modalSession/ModalService";
import { connect, useSelector, shallowEqual } from "react-redux";

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
  const [dataQueueHeader, setQueueHeader] = React.useState([]);
  const [dataCount, setDataCount] = React.useState({
    offregqty: 0,
    oncheckqty: 0,
    onregqty: 0,
    queue: 0,
  });
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );

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

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const callApiDataChartDasboard = () => {
    getDataChartDashboardRegistry()
      .then((result) => {
        setChart({
          ...dataChart,
          data: result.data.data.graph.data,
          categories: result.data.data.graph.category,
        });
        setDataCount({
          ...dataCount,
          onregqty: result.data.data.onregqty,
          offregqty: result.data.data.offregqty,
          oncheckqty: result.data.data.oncheckqty,
          queue: result.data.data.queue,
        });
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiDataChartDasboard, []);

  const callApiDataQueue = () => {
    getDataQueueRegistry()
      .then((result) => {
        var data = [];
        var dataHeader = [];
        Object.keys(result.data.data.queue).forEach((element) => {
          var item = result.data.data.queue[element];
          data.push({ item });
          dataHeader.push(result.data.data.onprocess[element]);
        });
        setQueueHeader(dataHeader);
        setQueue(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiDataQueue, []);

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
              <div className="card-toolbar">
                {/* <Dropdown className="dropdown-inline" drop="down" alignRight>
                  <Dropdown.Toggle
                    className="btn btn-transparent-white btn-sm font-weight-bolder dropdown-toggle px-5"
                    variant="transparent"
                    id="dropdown-toggle-top"
                  >
                    Export
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    <DropdownMenu2 />
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
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
                      {dataCount.onregqty}
                    </span>
                    <Link
                      to={`/registry/regis-page/list-online`}
                      className="text-warning font-weight-bold font-size-h6"
                    >
                      <FormattedMessage id="LABEL.RESERVATION_ONLINE" />
                    </Link>
                  </div>
                  <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                    <span className="font-size-h1 d-block my-2 text-primary">
                      {dataCount.offregqty}
                    </span>
                    <Link
                      to={`/registry/regis-page/list-offline`}
                      className="text-primary font-weight-bold font-size-h6 mt-2"
                    >
                      <FormattedMessage id="LABEL.RESERVATION_OFFLINE" />
                    </Link>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                    <span className="font-size-h1 d-block my-2 text-danger">
                      {dataCount.oncheckqty}
                    </span>
                    <Link
                      to={`/registry/regis-page/not-yet-come`}
                      className="text-danger font-weight-bold font-size-h6 mt-2"
                    >
                      <FormattedMessage id="LABEL.NOT_YET_COME" />
                    </Link>
                  </div>
                  <div className="col bg-light-success px-6 py-8 rounded-xl">
                    <span className="font-size-h1 d-block my-2 text-success">
                      {dataCount.queue}
                    </span>
                    <span
                      className="text-success font-weight-bold font-size-h6 mt-2 cursor-pointer"
                      onClick={() => {
                        window.open(window.location.origin + `/screen-queue`);
                      }}
                    >
                      <FormattedMessage id="LABEL.QUEUE" />
                    </span>
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
        <div className="col-md-8">
          <div className="card card-custom card-stretch gutter-b">
            <AppBar position="static" color="default" className="rounded-top">
              <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#11576d",
                  },
                }}
                textColor="primary"
                variant="fullWidth"
              >
                {dataQueueHeader.map((item, index) => {
                  return (
                    <Tab key={index.toString()} label={`Poli ${item.poli}`} />
                  );
                })}
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              {dataQueue.map((items, idx) => {
                return (
                  <TabContainer key={idx.toString()} dir={theme.direction}>
                    <div className="tab-content">
                      <div className="table-responsive">
                        <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                          <thead>
                            <tr className="text-left text-uppercase">
                              <th className="pl-7" style={{ width: "75px" }}>
                                <FormattedMessage id="LABEL.TABLE_HEADER.NO" />
                              </th>
                              <th style={{ minWidth: "250px" }}>
                                <FormattedMessage id="LABEL.PATIENT_NAME" />
                              </th>
                              <th style={{ minWidth: "100px" }}>
                                <FormattedMessage id="LABEL.PATIENT_CODE" />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.item.map((item, index) => {
                              return (
                                <tr key={index.toString()}>
                                  <td className="pl-0 py-3">
                                    <div className="d-flex align-items-center">
                                      <div className="symbol symbol-50 symbol-light mr-4">
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
                                      {item.nama}
                                    </span>
                                    <span className="text-muted font-weight-bold">
                                      {item.jk === "L"
                                        ? "Laki-Laki"
                                        : "Perempuan"}
                                      {` (${window
                                        .moment()
                                        .diff(item.tgl_lahir, "years")} Tahun)`}
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                      {item.kode_pasien}
                                    </span>
                                    <span className="text-muted font-weight-bold">
                                      {item.poli}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabContainer>
                );
              })}
              {/* <TabContainer dir={theme.direction}>
                <div className="tab-content">
                  <div className="table-responsive">
                    <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                      <thead>
                        <tr className="text-left text-uppercase">
                          <th className="pl-7" style={{ width: "75px" }}>
                            <FormattedMessage id="LABEL.TABLE_HEADER.NO" />
                          </th>
                          <th style={{ minWidth: "250px" }}>
                            <FormattedMessage id="LABEL.PATIENT_NAME" />
                          </th>
                          <th style={{ minWidth: "100px" }}>
                            <FormattedMessage id="LABEL.PATIENT_CODE" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataQueue[1].map((item, index) => {
                          return (
                            <tr key={index.toString()}>
                              <td className="pl-0 py-3">
                                <div className="d-flex align-items-center">
                                  <div className="symbol symbol-50 symbol-light mr-4">
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
                                  {item.nama}
                                </span>
                                <span className="text-muted font-weight-bold">
                                  {item?.jk === "L" ? "Laki-Laki" : "Perempuan"}
                                  {` (${window
                                    .moment()
                                    .diff(item.tgl_lahir, "years")} Tahun)`}
                                </span>
                              </td>
                              <td>
                                <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                  {item.kode_pasien}
                                </span>
                                <span className="text-muted font-weight-bold">
                                  {item.poli}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <div className="tab-content">
                  <div className="table-responsive">
                    <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                      <thead>
                        <tr className="text-left text-uppercase">
                          <th className="pl-7" style={{ width: "75px" }}>
                            <FormattedMessage id="LABEL.TABLE_HEADER.NO" />
                          </th>
                          <th style={{ minWidth: "250px" }}>
                            <FormattedMessage id="LABEL.PATIENT_NAME" />
                          </th>
                          <th style={{ minWidth: "100px" }}>
                            <FormattedMessage id="LABEL.PATIENT_CODE" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataQueue[3].map((item, index) => {
                          return (
                            <tr key={index.toString()}>
                              <td className="pl-0 py-3">
                                <div className="d-flex align-items-center">
                                  <div className="symbol symbol-50 symbol-light mr-4">
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
                                  {item.nama}
                                </span>
                                <span className="text-muted font-weight-bold">
                                  {item?.jk === "L" ? "Laki-Laki" : "Perempuan"}
                                  {` (${window
                                    .moment()
                                    .diff(item.tgl_lahir, "years")} Tahun)`}
                                </span>
                              </td>
                              <td>
                                <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                  {item.kode_pasien}
                                </span>
                                <span className="text-muted font-weight-bold">
                                  {item.poli}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabContainer> */}
            </SwipeableViews>
          </div>
        </div>
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
