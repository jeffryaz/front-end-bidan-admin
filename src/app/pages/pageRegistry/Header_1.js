import React from "react";

export function Header1() {
  return (
    <React.Fragment>
      <div className="row my-5">
        <div className="col-lg-3">
          <div className="card card-custom wave wave-animate-slow wave-primary mb-8 mb-lg-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="mr-6">
                  <h1>1234</h1>
                </div>
                <div className="d-flex flex-column">
                  <a
                    href="#"
                    className="text-dark text-hover-primary font-weight-bold font-size-h6 mb-3 text-uppercase"
                  >
                    Registrasi Online
                  </a>
                  <div className="text-dark-75 font-size-xs">
                    Pasien yang melakukan pendafatran Online hari ini.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-custom wave wave-animate-fast wave-warning mb-8 mb-lg-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="mr-6">
                  <h1>14</h1>
                </div>
                <div className="d-flex flex-column">
                  <a
                    href="#"
                    className="text-dark text-hover-primary font-weight-bold font-size-h6 mb-3 text-uppercase"
                  >
                    Offline Registrasi
                  </a>
                  <div className="text-dark-75 font-size-xs">
                    Pasien yang melakukan pendafatran Offline hari ini.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-custom wave wave-animate-slow wave-danger mb-8 mb-lg-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="mr-6">
                  <h1>124</h1>
                </div>
                <div className="d-flex flex-column">
                  <a
                    href="#"
                    className="text-dark text-hover-primary font-weight-bold font-size-h6 mb-3 text-uppercase"
                  >
                    Check In
                  </a>
                  <div className="text-dark-75 font-size-xs">
                    Pasien yang melakukan Check In hari ini.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-custom wave wave-animate-fast wave-info mb-8 mb-lg-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="mr-6">
                  <h1>140</h1>
                </div>
                <div className="d-flex flex-column">
                  <a
                    href="#"
                    className="text-dark text-hover-primary font-weight-bold font-size-h6 mb-3 text-uppercase"
                  >
                    Antrian
                  </a>
                  <div className="text-dark-75 font-size-xs">
                    Pasien yang menunggu masuk Poli.
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
