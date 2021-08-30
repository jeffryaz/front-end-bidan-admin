import React, {
  useState,
  // useEffect,
  useLayoutEffect,
} from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import TableOnly from "../../../components/tableCustomV1/tableOnly";
import {
  Card,
  CardBody,
  CardHeader,
} from "../../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
// import { listPatientPagination } from "./_redux/CrudPatient";
import ButtonAction from "../../../components/buttonAction/ButtonAction";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useSubheader } from "../../../../_metronic/layout";

function DetailMedicalRecord(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();
  const id = props.match.params.id;
  const medicalRecordId = props.match.params.medicalRecordId;

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/patient/list`,
        title: intl.formatMessage({ id: "LABEL.PATIENT_LIST" }),
      },
      {
        pathname: `/registry/patient/list/${id}`,
        title: intl.formatMessage({ id: "LABEL.PATIENT" }),
      },
      {
        pathname: `/registry/patient/list/${id}/${medicalRecordId}`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }));
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <div className="card card-custom wave wave-animate-fast wave-primary gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-40 symbol-light-danger mr-5">
                  <span className="symbol-label">
                    <i className="fas fa-hospital-user h-75 align-self-end font-size-h1"></i>
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <h3 className="text-dark mb-1">Nomor Kunjungan: M001</h3>
                  <span className="text-muted">2021-06-24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-custom wave wave-animate-fast wave-primary gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-40 symbol-light-danger mr-5">
                  <span className="symbol-label">
                    <i className="fas fa-user-nurse h-75 align-self-end font-size-h1"></i>
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <h3 className="text-dark mb-1">Welldy Rosman</h3>
                  <span className="text-muted">POLI UMUM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-custom wave wave-animate-fast wave-primary gutter-b">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-40 symbol-light-danger mr-5">
                  <span className="symbol-label">
                    <i className="fas fa-user-md h-75 align-self-end font-size-h1"></i>
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                  <h3 className="text-dark mb-1">Dr. Arka</h3>
                  <span className="text-muted">POLI UMUM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Screening Data"></CardHeader>
            <CardBody>Screening Data</CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Diagnosa"></CardHeader>
            <CardBody>Diagnosa</CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Resep Yang Diberikan"></CardHeader>
            <CardBody>Resep Yang Diberikan</CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title="Labs"></CardHeader>
            <CardBody>Labs</CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(DetailMedicalRecord));
