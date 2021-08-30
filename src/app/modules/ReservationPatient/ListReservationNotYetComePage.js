import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import { listNotYetCome } from "./_redux/CrudReservationPatient";
import { MODAL } from "../../../service/modalSession/ModalService";
import { Link } from "react-router-dom";

const headerTable = [
  {
    title: "LABEL.PATIENT_CODE",
  },
  {
    title: "LABEL.REGISTRATION_NO",
  },
  {
    title: "LABEL.PATIENT_NAME",
  },
  {
    title: "LABEL.DATE_OF_VISIT",
  },
  {
    title: "LABEL.POLI",
  },
  {
    title: "LABEL.STATUS",
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
  },
];

function ListReservationNotYetComePage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const suhbeader = useSubheader();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/registry/regis-page/not-yet-come",
        title: intl.formatMessage({ id: "LABEL.NOT_YET_COME" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.NOT_YET_COME" }));
  }, []);

  const callApiListNotCome = () => {
    setLoading(true);
    listNotYetCome()
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListNotCome, []);

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <TableOnly dataHeader={headerTable} loading={loading} hecto={10}>
            {data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item.kode_pasien}</TableCell>
                  <TableCell>{item.code_reg}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.tgl_book}</TableCell>
                  <TableCell>{item.poli}</TableCell>
                  <TableCell>
                    {item.status === "1" ? (
                      <FormattedMessage id="LABEL.BOOKING" />
                    ) : item.status === "2" ? (
                      <FormattedMessage id="LABEL.CANCELED" />
                    ) : (
                      <FormattedMessage id="LABEL.CHECK_IN" />
                    )}
                  </TableCell>
                  <TableCell>
                    {item.status === "1" && (
                      <Link
                        className="btn btn-warning"
                        to={`/registry/screening/patient/${item.pasien_id}/${item.poli_id}/${item.id}`}
                      >
                        <FormattedMessage id="LABEL.CHECKIN_SCREENING" />
                      </Link>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableOnly>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(ListReservationNotYetComePage));
