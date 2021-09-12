import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
} from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import { getDataQueueRegistry } from "./_redux/CrudScreenQueue";
import { MODAL } from "../../../service/modalSession/ModalService";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import Container from "@material-ui/core/Container";

function QueuePage(props) {
  const { intl } = props;
  const [dataQueue, setQueue] = React.useState([]);
  const [dataConsulting, setDataConsulting] = React.useState([]);
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );

  const callApiDataQueue = () => {
    getDataQueueRegistry()
      .then((result) => {
        var data = [];
        var dataItem = [];
        Object.keys(result.data.data.onprocess).forEach((element) => {
          var item = result.data.data.queue[element];
          data.push(result.data.data.onprocess[element]);
          dataItem.push({ item });
        });
        setDataConsulting(data);
        setQueue(dataItem);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiDataQueue, []);
  useEffect(() => {
    if (client) {
      client.on("message", async (topic, message) => {
        const payload = { topic, message: message.toString() };
        if (payload.topic === "dashboard-registry") callApiDataQueue();
        if (payload.topic === "call-patient") {
          var data = JSON.parse(payload.message);
          window.responsiveVoice.speak(
            `Nomor pasien, ${
              data.kode_pasien
            }. Atas nama pasient, ${data.nama.toLowerCase()}. Silahkan ke Ruangan POLI ${
              data.poli
            }.`
          );
        }
      });
    }
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${toAbsoluteUrl("media/bg/bg1-01.png")})`,
          height: "calc(100vh + 10.526rem)",
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="xl" fixed>
          <div className="row gutter-b mt-9 pt-9">
            {dataConsulting.map((item, index) => {
              return (
                <div className="col-lg-4" key={index.toString()}>
                  <div className="card card-custom wave wave-animate-slow wave-danger gutter-b">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 symbol-light-success mr-5">
                          <span className="symbol-label">
                            <img
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/doctor.svg"
                              )}
                              className="h-75 align-self-end"
                              alt="Doctor 1"
                            />
                          </span>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                          <a
                            href="#"
                            className="text-dark text-hover-primary mb-1"
                            style={{ fontSize: "2rem" }}
                          >
                            {item.nama || "-"}
                          </a>
                          <div className="d-flex justify-content-between">
                            <span style={{ fontSize: "1.1rem" }}>
                              POLI {item.poli || "-"}
                            </span>
                            <span style={{ fontSize: "1.1rem" }}>
                              Ricky Hunt
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-lg-4">
              <div className="card card-custom wave wave-animate-fast wave-warning gutter-b">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-40 symbol-light-success mr-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl("/media/svg/avatars/doctor-2.svg")}
                          className="h-75 align-self-end"
                          alt="Doctor 1"
                        />
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary mb-1"
                        style={{ fontSize: "2rem" }}
                      >
                        {dataConsulting[1].nama || "-"}
                      </a>
                      <div className="d-flex justify-content-between">
                        <span style={{ fontSize: "1.1rem" }}>
                          POLI {dataConsulting[1].poli || "-"}
                        </span>
                        <span style={{ fontSize: "1.1rem" }}>Ricky Hunt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-custom wave wave-animate-slow wave-danger gutter-b">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-40 symbol-light-success mr-5">
                      <span className="symbol-label">
                        <img
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/medical-team.svg"
                          )}
                          className="h-75 align-self-end"
                          alt="Doctor 3"
                        />
                      </span>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                      <a
                        href="#"
                        className="text-dark text-hover-primary mb-1"
                        style={{ fontSize: "2rem" }}
                      >
                        {dataConsulting[3].nama || "-"}
                      </a>
                      <div className="d-flex justify-content-between">
                        <span style={{ fontSize: "1.1rem" }}>
                          POLI {dataConsulting[3].poli || "-"}
                        </span>
                        <span style={{ fontSize: "1.1rem" }}>Ricky Hunt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row gutter-b mt-9 pt-9">
            {dataQueue.map((items, idx) => {
              return (
                <div
                  key={idx.toString()}
                  className={`col-lg-${
                    dataQueue.length === 1
                      ? "12"
                      : dataQueue.length === 2
                      ? "6"
                      : dataQueue.length === 3
                      ? "4"
                      : "3"
                  }`}
                >
                  <Card className="bg-primary text-white">
                    <CardHeader>
                      <div className="card-title m-auto">
                        <CardHeaderTitle className="text-white">
                          POLI {dataConsulting[idx].poli}
                        </CardHeaderTitle>
                      </div>
                    </CardHeader>
                    <CardBody>
                      {items.item.map((item, index) => {
                        return (
                          <div
                            className="d-flex justify-content-between my-3"
                            key={index.toString()}
                          >
                            <div>
                              <span className="font-size-h2">
                                {item.kode_pasien}
                              </span>
                            </div>
                            <div>
                              <span className="font-size-h2">{item.nama}</span>
                            </div>
                          </div>
                        );
                      })}
                    </CardBody>
                  </Card>
                </div>
              );
            })}
            {/* <div className="col-lg-4">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <div className="card-title m-auto">
                    <CardHeaderTitle className="text-white">
                      POLI UMUM dan BIDAN
                    </CardHeaderTitle>
                  </div>
                </CardHeader>
                <CardBody>
                  {dataQueue[2].map((item, index) => {
                    return (
                      <div
                        className="d-flex justify-content-between my-3"
                        key={index.toString()}
                      >
                        <div>
                          <span className="font-size-h2">
                            {item.kode_pasien}
                          </span>
                        </div>
                        <div>
                          <span className="font-size-h2">{item.nama}</span>
                        </div>
                      </div>
                    );
                  })}
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <div className="card-title m-auto">
                    <CardHeaderTitle className="text-white">
                      POLI GIGI
                    </CardHeaderTitle>
                  </div>
                </CardHeader>
                <CardBody>
                  {dataQueue[1].map((item, index) => {
                    return (
                      <div
                        className="d-flex justify-content-between my-3"
                        key={index.toString()}
                      >
                        <div>
                          <span className="font-size-h2">
                            {item.kode_pasien}
                          </span>
                        </div>
                        <div>
                          <span className="font-size-h2">{item.nama}</span>
                        </div>
                      </div>
                    );
                  })}
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <div className="card-title m-auto">
                    <CardHeaderTitle className="text-white">
                      POLI KULIT DAN KELAMIN
                    </CardHeaderTitle>
                  </div>
                </CardHeader>
                <CardBody>
                  {dataQueue[3].map((item, index) => {
                    return (
                      <div
                        className="d-flex justify-content-between my-3"
                        key={index.toString()}
                      >
                        <div>
                          <span className="font-size-h2">
                            {item.kode_pasien}
                          </span>
                        </div>
                        <div>
                          <span className="font-size-h2">{item.nama}</span>
                        </div>
                      </div>
                    );
                  })}
                </CardBody>
              </Card>
            </div> */}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(QueuePage));
