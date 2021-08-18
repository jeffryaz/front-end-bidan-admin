import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  DropdownCustomToggler,
  DropdownMenuDoctor,
} from "../../../_metronic/_partials/dropdowns";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export function Header2() {
  return (
    <React.Fragment>
      <div className="row my-5">
        <div className="col-lg-4">
          <div className="card card-custom mb-8 mb-lg-0">
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
                    Ricky Hunt
                  </a>
                  <span className="text-muted">POLI BIDAN</span>
                </div>
                <Dropdown className="dropdown-inline" alignRight>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-toggle-top"
                    className="btn btn-hover-light-primary btn-sm btn-icon"
                    as={DropdownCustomToggler}
                  >
                    <i className="ki ki-bold-more-hor" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    <DropdownMenuDoctor />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-custom mb-8 mb-lg-0">
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
                    Ricky Hunt
                  </a>
                  <span className="text-muted">POLI GIGI</span>
                </div>
                <Dropdown className="dropdown-inline" alignRight>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-toggle-top"
                    className="btn btn-hover-light-primary btn-sm btn-icon"
                    as={DropdownCustomToggler}
                  >
                    <i className="ki ki-bold-more-hor" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    <DropdownMenuDoctor />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-custom mb-8 mb-lg-0">
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
                    Ricky Hunt
                  </a>
                  <span className="text-muted">IGD</span>
                </div>
                <Dropdown className="dropdown-inline" alignRight>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-toggle-top"
                    className="btn btn-hover-light-primary btn-sm btn-icon"
                    as={DropdownCustomToggler}
                  >
                    <i className="ki ki-bold-more-hor" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    <DropdownMenuDoctor />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
