import React, { useLayoutEffect, useState, useEffect } from "react";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { useSubheader } from "../../../_metronic/layout";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import { TableRow, TableCell } from "@material-ui/core";
import { listAllReservationDoctor } from "./_redux/CrudHandlingDoctor";
import { MODAL } from "../../../service/modalSession/ModalService";

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

function ListReservationPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/doctor/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/doctor/handling-page/list-reservation`,
        title: intl.formatMessage({ id: "LABEL.RESERVATION_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.RESERVATION_LIST" }));
  }, []);

  const callApiListAllReservation = () => {
    setLoading(true);
    listAllReservationDoctor()
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListAllReservation, []);

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
                    ) : item.status === "3" ? (
                      <FormattedMessage id="LABEL.CHECKIN_SCREENING" />
                    ) : item.status === "4" ? (
                      <FormattedMessage id="LABEL.POLI_PROCESS" />
                    ) : item.status === "5" ? (
                      <FormattedMessage id="LABEL.PHARMACIST" />
                    ) : item.status === "6" ? (
                      <FormattedMessage id="LABEL.PAYMENT" />
                    ) : (
                      <FormattedMessage id="LABEL.FINISH" />
                    )}
                  </TableCell>
                  <TableCell>
                    {/* {item.status !== "2" && (
                      <ButtonAction
                        data={item}
                        handleAction={handleAction}
                        ops={data_ops}
                      />
                    )} */}
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

export default injectIntl(connect(null, null)(ListReservationPage));
