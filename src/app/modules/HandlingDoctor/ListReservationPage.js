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
    name: "kode_pasien",
    filter: true,
  },
  {
    title: "LABEL.PATIENT_NAME",
    name: "nama",
    filter: true,
  },
  {
    title: "LABEL.DATE_OF_VISIT",
    name: "tgl_book",
    filter: true,
  },
  {
    title: "LABEL.POLI",
    name: "poli",
    filter: true,
  },
  {
    title: "LABEL.STATUS",
    name: "statusName",
    filter: true,
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    filter: false,
  },
];

function ListReservationPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);

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
        var data = result.data.data;
        data.forEach((element) => {
          element.statusName =
            element.status === "1"
              ? intl.formatMessage({ id: "LABEL.BOOKING" })
              : element.status === "2"
              ? intl.formatMessage({ id: "LABEL.CANCELED" })
              : element.status === "3"
              ? intl.formatMessage({ id: "LABEL.CHECKIN_SCREENING" })
              : element.status === "4"
              ? intl.formatMessage({ id: "LABEL.POLI_PROCESS" })
              : element.status === "5"
              ? intl.formatMessage({ id: "LABEL.PHARMACIST" })
              : element.status === "6"
              ? intl.formatMessage({ id: "LABEL.PAYMENT" })
              : intl.formatMessage({ id: "LABEL.FINISH" });
        });
        setData(data);
        setDataSecond(data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListAllReservation, []);
  const handleFilter = (data) => {
    setData(data);
  };

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <TableOnly
            dataHeader={headerTable}
            dataSecond={dataSecond}
            handleFilter={handleFilter}
            loading={loading}
            hecto={10}
          >
            {data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item.kode_pasien}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.tgl_book}</TableCell>
                  <TableCell>{item.poli}</TableCell>
                  <TableCell>{item.statusName}</TableCell>
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
