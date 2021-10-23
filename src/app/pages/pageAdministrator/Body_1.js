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
  getDataDashboard,
  getDataChartDashboardPharmacist,
} from "../_redux/CrudPages";
import { MODAL } from "../../../service/modalSession/ModalService";
import { connect, useSelector, shallowEqual } from "react-redux";
import { callPatient } from "../../../redux/MqttOptions";
import { publish } from "../../../redux/MqttOptions";
import { rupiah } from "../../components/currency";

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
  const [value, setValue] = React.useState(0);
  const uiService = useHtmlClassService();
  const [dataChart, setChart] = React.useState({
    data: [],
    categories: [],
  });
  const [dataQueue, setQueue] = React.useState([]);
  const [dataDashboard, setDataDashboard] = React.useState({
    patient: {},
    graph: {},
    pie: {},
    amt: {},
  });
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const user = useSelector(({ auth }) => auth.user, shallowEqual);
  const history = useHistory();
  const [dataCount, setDataCount] = React.useState({
    empty: 0,
    preorder: 0,
    emptywarning: 0,
    needprepare: 0,
  });

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
      dataChart: dataDashboard,
      label: "Graphic Pemasukan Bulanan",
      des: "Pasien",
    };
  }, [uiService, dataDashboard]);

  useEffect(() => {
    const element = document.getElementById("chart-line-admin");
    if (!element) {
      return;
    }

    const options = getChartOptions(layoutProps);

    const chart = new ApexCharts(element, options);
    chart.render();

    const elementPie = document.getElementById("chart-pie-admin");
    if (!elementPie) {
      return;
    }

    const optionsPie = getChartOptionsPie(layoutProps);

    const chartPie = new ApexCharts(elementPie, optionsPie);
    chartPie.render();
    return function cleanUp() {
      chart.destroy();
      chartPie.destroy();
    };
  }, [layoutProps]);

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

  const callApiDashboard = () => {
    getDataDashboard()
      .then((result) => {
        setDataDashboard({
          ...dataDashboard,
          patient: result.data.data.pasien[0],
          graph: result.data.data.graph,
          pie: result.data.data.pie,
          amt: result.data.data.amt[0].amt,
        });
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiDashboard, []);

  const callApiDataChartDasboard = () => {
    getDataChartDashboardPharmacist()
      .then((result) => {
        setDataCount({
          ...dataCount,
          empty: result.data.data.empty,
          preorder: result.data.data.preorder,
          emptywarning: result.data.data.emptywarning,
          needprepare: result.data.data.needprepare,
        });
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiDataChartDasboard, []);

  return (
    <React.Fragment>
      <div className="row gutter-b">
        <div className="col-md-4">
          <div className={`card card-custom bg-gray-100 card-stretch gutter-b`}>
            <div className="card-header border-0 bg-danger py-5">
              <h3 className="card-title font-weight-bolder text-white">
                Pasien dengan kunjugan terbanyak
              </h3>
              <div className="card-toolbar"></div>
            </div>
            {/* Body */}
            <div className="card-body p-0 position-relative overflow-hidden">
              <div
                className="card-rounded-bottom bg-danger"
                style={{ height: "100px" }}
              ></div>

              {/* Stat */}
              <div className="card-spacer mt-n25">
                <div className="row m-0">
                  <div className="col-12 px-3 py-5 rounded-xl mr-4 mb-4 text-center">
                    <div className="symbol symbol-md flex-shrink-0">
                      <img
                        src={toAbsoluteUrl("/media/users/blank.png")}
                        alt=""
                        style={{ maxWidth: 100, height: 100 }}
                      />
                    </div>
                    <div>
                      <h3>{dataDashboard.patient?.nama || "-"}</h3>
                      <h4>{dataDashboard.patient?.qty || "-"} Kunjungan</h4>
                    </div>
                    <div className="mt-5">
                      <h6>bergabung mulai dari</h6>
                      <h6>
                        {dataDashboard.patient?.created_at
                          ? window
                              .moment(
                                new Date(dataDashboard.patient?.created_at)
                              )
                              .format("DD MMM YYYY")
                          : "-"}
                      </h6>
                    </div>
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
        <div className="col-xl-8">
          <div className="card card-custom gutter-b">
            <div className="card-header border-0">
              <div className="card-title">
                <h3 className="card-label text-uppercase">
                  Graphic Pemasukan Bulanan
                </h3>
              </div>
            </div>
            <div className="card-body">
              <div id="chart-line-admin"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gutter-b">
        <div className="col-md-4">
          <div className="card card-custom gutter-b h-100">
            <div className="card-header border-0">
              <div className="card-title">
                <h3 className="card-label text-uppercase">
                  Persentase Umur Pasien
                </h3>
              </div>
            </div>
            <div className="card-body">
              <div id="chart-pie-admin"></div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card card-custom gutter-b h-100">
            {/* <div className="card-header border-0">
              <div className="card-title">
                <h3 className="card-label">
                </h3>
                <div className="card-toolbar"></div>
              </div>
            </div> */}
            <div className="card-body">
              <div className="text-right mb-10">
                <h3 className="mb-5">
                  <FormattedMessage id="LABEL.DAILY_INCOME" />
                </h3>
                <h1>{rupiah(dataDashboard?.amt || 0)}</h1>
              </div>
              <div className="row gutter-b mt-10">
                <div className="col-md-4">
                  <div className="bg-light-primary px-3 py-4 rounded-xl text-right">
                    <span
                      className="font-size-h4 d-block my-2 text-primary"
                      style={{ minHeight: 55 }}
                    >
                      <FormattedMessage id="LABEL.OUT_OF_MEDICINE" />
                    </span>
                    <span className="font-size-h1 text-primary font-weight-bold mt-2">
                      {dataCount.empty || 0}
                    </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light-primary px-3 py-4 rounded-xl text-right">
                    <span
                      className="font-size-h4 d-block my-2 text-primary"
                      style={{ minHeight: 55 }}
                    >
                      <FormattedMessage id="LABEL.DRUG_STOCKS_ARE_RUNNING_OUT" />
                    </span>
                    <span className="font-size-h1 text-primary font-weight-bold mt-2">
                      {dataCount.emptywarning || 0}
                    </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light-primary px-3 py-4 rounded-xl text-right">
                    <span
                      className="font-size-h4 d-block my-2 text-primary"
                      style={{ minHeight: 55 }}
                    >
                      <FormattedMessage id="LABEL.STOCK" />
                    </span>
                    <span className="font-size-h1 text-primary font-weight-bold mt-2">
                      50 hardcode
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
        data: layoutProps.dataChart.graph.data || [],
        // data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
    ],
    chart: {
      type: "area",
      height: 300,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {},
    legend: {
      show: true,
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
      // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      categories: layoutProps.dataChart.graph.catagories || [],
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
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
        show: true,
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
          return val + " " + "Rupiah";
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

function getChartOptionsPie(layoutProps) {
  // const strokeColor = "#D13647";

  const options = {
    series: layoutProps.dataChart.pie.series || [],
    chart: {
      type: "donut",
      height: 300,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: "0%",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
    },
    // fill: {
    //   type: "solid",
    //   opacity: 0,
    // },
    // stroke: {
    //   curve: "smooth",
    //   show: true,
    //   width: 3,
    //   colors: [strokeColor],
    // },
    labels: layoutProps.dataChart.pie.labels || [],
    // states: {
    //   normal: {
    //     filter: {
    //       type: "none",
    //       value: 0,
    //     },
    //   },
    //   hover: {
    //     filter: {
    //       type: "none",
    //       value: 0,
    //     },
    //   },
    //   active: {
    //     allowMultipleDataPointsSelection: false,
    //     filter: {
    //       type: "none",
    //       value: 0,
    //     },
    //   },
    // },
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
        show: true,
      },
    },
    // markers: {
    //   colors: layoutProps.colorsThemeBaseDanger,
    //   strokeColor: [strokeColor],
    //   strokeWidth: 3,
    // },
  };
  return options;
}

export default injectIntl(connect(null, null)(Body1));
