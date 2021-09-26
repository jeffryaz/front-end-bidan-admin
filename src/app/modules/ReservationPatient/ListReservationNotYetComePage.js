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

function ListReservationNotYetComePage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);
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

  useEffect(callApiListNotCome, []);

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
