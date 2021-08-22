import React, {
  useState,
  useLayoutEffect,
  // useCallback
} from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import { RegisDataPatientOffline } from "./_redux/CrudPatient";
import Steppers from "../../components/steppersCustom/Steppers";
import Container from "@material-ui/core/Container";
import Information from "./registrationPages/Information";
import Address from "./registrationPages/Address";
import EmergencyContact from "./registrationPages/EmergencyContact";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { MODAL } from "../../../service/modalSession/ModalService";

function RegistrationPatient(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [dataProgress, setDataProgress] = useState([
    { label: "Informasi Umum", status: "ON PROGRESS" },
    { label: "Alamat", status: "ON PROGRESS" },
    { label: "Kontak Darurat", status: "ON PROGRESS" },
  ]);
  const suhbeader = useSubheader();
  const [navActive, setNavActive] = useState(0);
  const [dataInformation, setDataInformation] = useState({});
  const [statusInformation, setStatusInformation] = useState(false);
  const [dataAddress, setDataAddress] = useState({});
  const [statusAddress, setStatusAddress] = useState(false);
  const [dataEmergencyContact, setEmergencyContact] = useState({});
  const [statusEmergencyContact, setStatusEmergencyContact] = useState(false);
  const [dialog, setDialog] = useState(false);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/patient/registration`,
        title: intl.formatMessage({ id: "LABEL.REGISTRATION" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.REGISTRATION" }));
  }, []);

  const handleSaveRegis = () => {
    setLoading(true);
    var dataReq = Object.assign(
      {},
      dataInformation,
      dataAddress,
      dataEmergencyContact,
      { photo_pasien: null, reg_rule: 2, add_user: "admin" }
    );
    RegisDataPatientOffline(dataReq)
      .then((result) => {
        setDialog(true);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };
  return (
    <React.Fragment>
      <Dialog
        open={dialog}
        // keepMounted
        maxWidth="xs"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.REGISTRATION" />
        </DialogTitle>
        <DialogContent>
          <span>Pendaftaran Pasien Berhasil</span>
        </DialogContent>
        <DialogActions>
          <button
            className="btn btn-danger"
            // onClick={() => setModalHistory(false)}
            // disabled={loading}
          >
            <i className="fas fa-print px-1"></i>
            Cetak Kartu
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setDataInformation({});
              setStatusInformation(false);
              setDataAddress({});
              setStatusAddress(false);
              setEmergencyContact({});
              setStatusEmergencyContact(false);
              setNavActive(0);
              var getData = Object.assign([], dataProgress);
              getData[0].status = "ON PROGRESS";
              getData[1].status = "ON PROGRESS";
              getData[2].status = "ON PROGRESS";
              setDataProgress(getData);
              setLoading(false);
              setDialog(false);
            }}
          >
            <i className="fas fa-check px-1"></i>
            OK
          </button>
        </DialogActions>
      </Dialog>
      <div className="container">
        <Container maxWidth="lg">
          <Card>
            <CardBody>
              <Steppers steps={dataProgress} />

              {navActive === 0 && (
                <div className="my-5 h-100">
                  <Information
                    handleProgress={(id, status) => {
                      if (dataProgress[id].status !== status) {
                        var getData = Object.assign([], dataProgress);
                        getData[id].status = status;
                        setDataProgress(getData);
                      }
                    }}
                    dataInformation={dataInformation}
                    handleData={(data) => {
                      setDataInformation(data);
                    }}
                    handleStatus={(status) => {
                      setStatusInformation(status);
                      setNavActive(1);
                    }}
                  />
                </div>
              )}

              {navActive === 1 && (
                <div className="my-5 h-100">
                  <Address
                    handleProgress={(id, status) => {
                      if (dataProgress[id].status !== status) {
                        var getData = Object.assign([], dataProgress);
                        getData[id].status = status;
                        setDataProgress(getData);
                      }
                    }}
                    dataAddress={dataAddress}
                    handleData={(data, id, status) => {
                      if (dataProgress[id].status !== status) {
                        if (status === "COMPLETE") setDataAddress(data);
                      }
                    }}
                    handleStatus={(status, data) => {
                      if (status) {
                        setStatusAddress(status);
                        setDataAddress(data);
                        setNavActive(2);
                      } else {
                        setNavActive(0);
                      }
                    }}
                  />
                </div>
              )}

              {navActive === 2 && (
                <div className="my-5 h-100">
                  <EmergencyContact
                    handleProgress={(id, status) => {
                      if (dataProgress[id].status !== status) {
                        var getData = Object.assign([], dataProgress);
                        getData[id].status = status;
                        setDataProgress(getData);
                      }
                    }}
                    dataEmergencyContact={dataEmergencyContact}
                    handleData={(data, id, status) => {
                      if (dataProgress[id].status !== status) {
                        if (status === "COMPLETE") setEmergencyContact(data);
                      }
                    }}
                    handleStatus={(status, data) => {
                      if (status) {
                        setStatusEmergencyContact(status);
                        setEmergencyContact(data);
                        handleSaveRegis();
                      } else {
                        setNavActive(1);
                      }
                    }}
                    loading={loading}
                  />
                </div>
              )}
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(RegistrationPatient));
