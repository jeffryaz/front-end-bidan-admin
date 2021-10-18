import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import { listTransactionPagination } from "../_redux/CrudHandlingTeller";
import { Card, CardBody } from "../../../../_metronic/_partials/controls";
import Tables from "../../../components/tableCustomV1/table";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../../Auth/_redux/ActionAuth";
// import ButtonAction from "../../../components/buttonAction/ButtonAction";
import { TableRow, TableCell } from "@material-ui/core";
import { rupiah } from "../../../components/currency";

const headerTable = [
  {
    title: "LABEL.TRANSACTION_CODE",
    name: "trans_kode",
    order: {
      active: true,
      status: true,
      type: true,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.NAME",
    name: "cust_nm",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.PHONE_NUMBER",
    name: "phone_no",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "phone",
    },
  },
  {
    title: "LABEL.GRAND_TOTAL",
    name: "fee",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "currency",
    },
  },
  {
    title: "LABEL.STATUS",
    name: "status",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "text",
    },
  },
  // {
  //   title: "LABEL.TABLE_HEADER.ACTION",
  //   name: "action",
  //   order: {
  //     active: false,
  //     status: false,
  //   },
  //   filter: {
  //     active: false,
  //     type: "true",
  //   },
  // },
];

const data_ops = [
  {
    label: "LABEL.DETAIL",
    icon: "fas fa-external-link-alt text-primary",
    type: "open",
  },
  {
    label: "LABEL.DELETE",
    icon: "fas fa-trash-alt text-danger",
    type: "delete",
  },
];

function ListTransactionPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const history = useHistory();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/report-page/transaction`,
        title: intl.formatMessage({ id: "LABEL.TRANSACTION" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.TRANSACTION" }));
  }, []);

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    listTransactionPagination(params)
      .then((result) => {
        setLoading(false);
        setData({
          ...data,
          count: 0,
          data: result.data.data,
        });
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  // const handleAction = (type, data) => {};
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Tables
            dataHeader={headerTable}
            handleParams={requestApi}
            loading={loading}
            err={err}
            countData={data.count}
            hecto={10}
          >
            {data.data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item?.trans_kode}</TableCell>
                  <TableCell>{item.cust_nm}</TableCell>
                  <TableCell>{item.phone_no}</TableCell>
                  <TableCell>{rupiah(item.fee)}</TableCell>
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
                  {/* <TableCell>
                    <ButtonAction
                      data={item}
                      handleAction={handleAction}
                      ops={data_ops}
                    />
                  </TableCell> */}
                </TableRow>
              );
            })}
          </Tables>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(ListTransactionPage));
