import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import { listDailyInCome } from "../_redux/CrudHandlingTeller";
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
    title: "LABEL.EARNING_DATE",
    name: "days",
    order: {
      active: true,
      status: true,
      type: false,
    },
    filter: {
      active: true,
      type: "date",
    },
  },
  {
    title: "LABEL.PRODUCT_SALE",
    name: "total",
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
    title: "LABEL.HANDLING_FEE",
    name: "feeamt",
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
    title: "LABEL.GRAND_TOTAL",
    name: "grand_total",
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
    title: "LABEL.VISIT_TOTAL",
    name: "visit_qty",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "number",
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

function ListDailyInComePage(props) {
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
        pathname: `/administrator/report-page/daily-income`,
        title: intl.formatMessage({ id: "LABEL.DAILY_INCOME" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.DAILY_INCOME" }));
  }, []);

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    listDailyInCome(params)
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
                  <TableCell>
                    {window.moment(new Date(item?.days)).format("DD MMM YYYY")}
                  </TableCell>
                  <TableCell>{rupiah(item.total)}</TableCell>
                  <TableCell>{rupiah(item.feeamt)}</TableCell>
                  <TableCell>{rupiah(item.grand_total)}</TableCell>
                  <TableCell>
                    {item.visit_qty} <FormattedMessage id="LABEL.VISIT" />
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

export default injectIntl(connect(null, auth.actions)(ListDailyInComePage));
