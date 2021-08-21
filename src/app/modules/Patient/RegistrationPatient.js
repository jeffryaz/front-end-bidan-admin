import React, {
  useState,
  // useEffect,
  // useCallback
} from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { useSubheader } from "../../../_metronic/layout";
import { listPatientPagination } from "./_redux/CrudPatient";
import Steppers from "../../components/steppersCustom/Steppers";
import Container from "@material-ui/core/Container";
import Information from "./registrationPages/Information";

function RegistrationPatient(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [dataProgress, setDataProgress] = useState([
    { label: "Informasi Umum", status: "ON PROGRESS" },
    { label: "Alamat", status: "ON PROGRESS" },
    { label: "Kontak Darurat", status: "ON PROGRESS" },
  ]);
  const suhbeader = useSubheader();
  const [navActive, setNavActive] = useState(0);
  const [dataInformation, setDataInformation] = useState({
    // email: "jeffryazhari@gmail.com",
    // jk: "L",
    // ktpno: 2222222222222222,
    // nama: "Jeffry Azhari Rosman",
    // no_kk: 1111111111111111,
    // no_telp: 87883844595,
    // pekerjaan: "Programmmer",
    // status_nikah: "2",
    // tempat_lahir: "jakarta",
    // tgl_lahir: "2021-08-22",
  });

  suhbeader.setTitle(
    intl.formatMessage({
      id: "LABEL.REGISTRATION",
    })
  );

  return (
    <React.Fragment>
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
