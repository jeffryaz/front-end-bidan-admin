import React, { useLayoutEffect, useState, useEffect } from "react";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { useSubheader } from "../../../_metronic/layout";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import { TableRow, TableCell } from "@material-ui/core";
import { listSpecialCase } from "./_redux/CrudHandlingDoctor";
import { MODAL } from "../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";

const headerTable = [
  {
    title: "LABEL.TRANSACTION_CODE",
    name: "code_trans",
    filter: true,
  },
  {
    title: "LABEL.PATIENT_NAME",
    name: "cust_nm",
    filter: true,
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    filter: false,
  },
];

function ListSpecialCasePage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(true);
  const [dataSecond, setDataSecond] = useState([]);
  const [data, setData] = useState([]);
  const history = useHistory();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/doctor/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/doctor/special-case`,
        title: intl.formatMessage({ id: "LABEL.SPECIAL_CASE" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.SPECIAL_CASE" }));
  }, []);

  const callApiListSpecialCase = () => {
    setLoading(true);
    listSpecialCase()
      .then((result) => {
        setLoading(false);
        var data = result.data.data;
        // data.forEach((element) => {
        //   element.statusName =
        //     element.status === "1"
        //       ? intl.formatMessage({ id: "LABEL.BOOKING" })
        //       : element.status === "2"
        //       ? intl.formatMessage({ id: "LABEL.CANCELED" })
        //       : element.status === "3"
        //       ? intl.formatMessage({ id: "LABEL.CHECKIN_SCREENING" })
        //       : element.status === "4"
        //       ? intl.formatMessage({ id: "LABEL.POLI_PROCESS" })
        //       : element.status === "5"
        //       ? intl.formatMessage({ id: "LABEL.PHARMACIST" })
        //       : element.status === "6"
        //       ? intl.formatMessage({ id: "LABEL.PAYMENT" })
        //       : intl.formatMessage({ id: "LABEL.FINISH" });
        // });
        setData(data);
        setDataSecond(data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListSpecialCase, []);
  const handleFilter = (data) => {
    setData(data);
  };

  const stateGo = (data) => {
    history.push(`/doctor/handling-page/process-special/${data.id}/null/null`);
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
                  <TableCell>{item.code_trans}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mx-1"
                      onClick={() => {
                        stateGo(item);
                      }}
                    >
                      <i className="fas fa-sign-in-alt"></i>
                      <FormattedMessage id="LABEL.PROCESS" />
                    </button>
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

export default injectIntl(connect(null, null)(ListSpecialCasePage));
