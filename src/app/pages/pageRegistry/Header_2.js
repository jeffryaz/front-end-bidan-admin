import React, { useEffect } from "react";
import { getDataQueueRegistry } from "../_redux/CrudPages";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { MODAL } from "../../../service/modalSession/ModalService";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
function Header2(props) {
  const { intl } = props;
  const [dataConsulting, setDataConsulting] = React.useState([]);
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );

  const callApiDataQueue = () => {
    getDataQueueRegistry()
      .then((result) => {
        var data = [];
        Object.keys(result.data.data.onprocess).forEach((element) => {
          data.push(result.data.data.onprocess[element]);
        });
        setDataConsulting(data);
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
        {dataConsulting.map((item, index) => {
          return (
            <div className="col-lg-4" key={index.toString()}>
              <div className="card card-custom wave wave-animate-slow wave-danger gutter-b">
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
                        {item.nama || "-"}
                      </a>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">
                          POLI {item.poli || "-"}
                        </span>
                        <span className="text-muted text-right">
                          {item.dokter || "-"}
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
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(Header2));
