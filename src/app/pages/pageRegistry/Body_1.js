import React, { useMemo, useEffect } from "react";
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

export function Body1() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const uiService = useHtmlClassService();

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
    };
  }, [uiService]);

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
  return (
    <React.Fragment>
      <div className="row gutter-b">
        <div className="col-md-4">
          <div className={`card card-custom bg-gray-100 card-stretch gutter-b`}>
            {/* Header */}
            <div className="card-header border-0 bg-danger py-5">
              <h3 className="card-title font-weight-bolder text-white">
                Sales Stat
              </h3>
              <div className="card-toolbar">
                <Dropdown className="dropdown-inline" drop="down" alignRight>
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
                </Dropdown>
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
                      1
                    </span>
                    <Link
                      to={`/registry/regis-page/list-online`}
                      className="text-warning font-weight-bold font-size-h6"
                    >
                      Registrasi Online
                    </Link>
                  </div>
                  <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                    <span className="font-size-h1 d-block my-2 text-primary">
                      123
                    </span>
                    <Link
                      to={`/registry/regis-page/list-offline`}
                      className="text-primary font-weight-bold font-size-h6 mt-2"
                    >
                      Offline Registrasi
                    </Link>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                    <span className="font-size-h1 d-block my-2 text-danger">
                      122
                    </span>
                    <Link
                      to={`/registry/regis-page/list-check-in`}
                      className="text-danger font-weight-bold font-size-h6 mt-2"
                    >
                      Check In
                    </Link>
                  </div>
                  <div className="col bg-light-success px-6 py-8 rounded-xl">
                    <span className="font-size-h1 d-block my-2 text-success">
                      10
                    </span>
                    <Link
                      to={`/registry/regis-page/list-queue`}
                      className="text-success font-weight-bold font-size-h6 mt-2"
                    >
                      <FormattedMessage id="LABEL.QUEUE" />
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
                <Tab label="Poli Bidan" />
                <Tab label="Poli Gigi" />
                <Tab label="IGD" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabContainer dir={theme.direction}>
                <div className="tab-content">
                  <div className="table-responsive">
                    <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                      <thead>
                        <tr className="text-left text-uppercase">
                          <th className="pl-7" style={{ minWidth: "250px" }}>
                            <span className="text-dark-75">products</span>
                          </th>
                          <th style={{ minWidth: "100px" }}>earnings</th>
                          <th style={{ minWidth: "100px" }}></th>
                          <th style={{ minWidth: "100px" }}>company</th>
                          <th style={{ minWidth: "130px" }}>rating</th>
                          <th style={{ minWidth: "80px" }} />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50 symbol-light mr-4">
                                <span className="symbol-label">
                                  <span className="svg-icon h-75 align-self-end">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/avatars/001-boy.svg"
                                      )}
                                    />
                                  </span>
                                </span>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                >
                                  Brad Simmons
                                </a>
                                <span className="text-muted font-weight-bold d-block">
                                  HTML, JS, ReactJS
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $8,000,000
                            </span>
                            <span className="text-muted font-weight-bold">
                              In Proccess
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $520
                            </span>
                            <span className="text-muted font-weight-bold">
                              Paid
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              Intertico
                            </span>
                            <span className="text-muted font-weight-bold">
                              Web, UI/UX Design
                            </span>
                          </td>
                          <td>
                            <img
                              src={toAbsoluteUrl("/media/logos/stars.png")}
                              alt="image"
                              style={{ width: "5.5rem" }}
                            />
                            <span className="text-muted font-weight-bold d-block font-size-sm">
                              Best Rated
                            </span>
                          </td>
                          <td className="pr-0 text-right">
                            <a
                              href="#"
                              className="btn btn-light-success font-weight-bolder font-size-sm"
                            >
                              View Offer
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-0 py-0">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50 symbol-light mr-4">
                                <span className="symbol-label">
                                  <span className="svg-icon h-75 align-self-end">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/avatars/018-girl-9.svg"
                                      )}
                                    />
                                  </span>
                                </span>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                >
                                  Jessie Clarcson
                                </a>
                                <span className="text-muted font-weight-bold d-block">
                                  C#, ASP.NET, MS SQL
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $23,000,000
                            </span>
                            <span className="text-muted font-weight-bold">
                              Pending
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $1,600
                            </span>
                            <span className="text-muted font-weight-bold">
                              Rejected
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              Agoda
                            </span>
                            <span className="text-muted font-weight-bold">
                              Houses & Hotels
                            </span>
                          </td>
                          <td>
                            <img
                              src={toAbsoluteUrl("/media/logos/stars.png")}
                              alt="image"
                              style={{ width: "5.5rem" }}
                            />
                            <span className="text-muted font-weight-bold d-block font-size-sm">
                              Above Avarage
                            </span>
                          </td>
                          <td className="pr-0 text-right">
                            <a
                              href="#"
                              className="btn btn-light-success font-weight-bolder font-size-sm"
                            >
                              View Offer
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50 symbol-light mr-4">
                                <span className="symbol-label">
                                  <span className="svg-icon h-75 align-self-end">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/avatars/047-girl-25.svg"
                                      )}
                                    />
                                  </span>
                                </span>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                >
                                  Lebron Wayde
                                </a>
                                <span className="text-muted font-weight-bold d-block">
                                  PHP, Laravel, VueJS
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $34,000,000
                            </span>
                            <span className="text-muted font-weight-bold">
                              Paid
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $6,700
                            </span>
                            <span className="text-muted font-weight-bold">
                              Paid
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              RoadGee
                            </span>
                            <span className="text-muted font-weight-bold">
                              Paid
                            </span>
                          </td>
                          <td>
                            <img
                              src={toAbsoluteUrl("/media/logos/stars.png")}
                              alt="image"
                              style={{ width: "5.5rem" }}
                            />
                            <span className="text-muted font-weight-bold d-block font-size-sm">
                              Best Rated
                            </span>
                          </td>
                          <td className="pr-0 text-right">
                            <a
                              href="#"
                              className="btn btn-light-success font-weight-bolder font-size-sm"
                            >
                              View Offer
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pl-0 py-0 ">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50 symbol-light mr-4">
                                <span className="symbol-label">
                                  <span className="svg-icon h-75 align-self-end">
                                    <SVG
                                      src={toAbsoluteUrl(
                                        "/media/svg/avatars/014-girl-7.svg"
                                      )}
                                    />
                                  </span>
                                </span>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                >
                                  Natali Trump
                                </a>
                                <span className="text-muted font-weight-bold d-block">
                                  Python, PostgreSQL, ReactJS
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-left pr-0">
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $2,600,000
                            </span>
                            <span className="text-muted font-weight-bold">
                              Paid
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              $14,000
                            </span>
                            <span className="text-muted font-weight-bold">
                              Pending
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              The Hill
                            </span>
                            <span className="text-muted font-weight-bold">
                              Insurance
                            </span>
                          </td>
                          <td>
                            <img
                              src={toAbsoluteUrl("/media/logos/stars.png")}
                              alt="image"
                              style={{ width: "5.5rem" }}
                            />
                            <span className="text-muted font-weight-bold d-block font-size-sm">
                              Avarage
                            </span>
                          </td>
                          <td className="pr-0 text-right">
                            <a
                              href="#"
                              className="btn btn-light-success font-weight-bolder font-size-sm"
                              style={{ width: "7rem" }}
                            >
                              View Offer
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabContainer>
              <TabContainer dir={theme.direction}>Item Two</TabContainer>
              <TabContainer dir={theme.direction}>Item Three</TabContainer>
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
        name: "Net Profit",
        data: [30, 45, 32, 70, 40, 40, 40],
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
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
      min: 0,
      max: 80,
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
          return "$" + val + " thousands";
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
