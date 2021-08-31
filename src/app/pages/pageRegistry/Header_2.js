import React, { useEffect } from "react";
import { getDataQueueRegistry } from "../_redux/CrudPages";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { MODAL } from "../../../service/modalSession/ModalService";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";

function Header2(props) {
  const { intl } = props;
  const [dataConsulting, setDataConsulting] = React.useState({
    1: {},
    2: {},
    3: {},
  });
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );

  const callApiDataQueue = () => {
    getDataQueueRegistry()
      .then((result) => {
        setDataConsulting({
          ...dataConsulting,
          1: result.data.data.onprocess[1],
          2: result.data.data.onprocess[2],
          3: result.data.data.onprocess[3],
        });
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
        if (payload.topic === "dashboard-registry") callApiDataQueue();
      });
    }
  }, [client]);
  return (
    <React.Fragment>
      <div className="row gutter-b">
        <div className="col-lg-4">
          <div className="card card-custom wave wave-animate-slow wave-primary gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-40 symbol-light-success mr-5">
                  <span className="symbol-label">
                    <img
                      src={toAbsoluteUrl("/media/svg/avatars/doctor.svg")}
                      className="h-75 align-self-end"
                      alt="Doctor 1"
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg"
                  >
                    {dataConsulting[2].nama || "-"}
                  </a>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">
                      POLI {dataConsulting[2].poli || "-"}
                    </span>
                    <span className="text-muted">Ricky Hunt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
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
                    className="text-dark text-hover-primary mb-1 font-size-lg"
                  >
                    {dataConsulting[1].nama || "-"}
                  </a>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">
                      POLI {dataConsulting[1].poli || "-"}
                    </span>
                    <span className="text-muted">Ricky Hunt</span>
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
                      src={toAbsoluteUrl("/media/svg/avatars/medical-team.svg")}
                      className="h-75 align-self-end"
                      alt="Doctor 3"
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <a
                    href="#"
                    className="text-dark text-hover-primary mb-1 font-size-lg"
                  >
                    {dataConsulting[3].nama || "-"}
                  </a>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">
                      POLI {dataConsulting[3].poli || "-"}
                    </span>
                    <span className="text-muted">Ricky Hunt</span>
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

export default injectIntl(connect(null, null)(Header2));
