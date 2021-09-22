import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import { getListStockRunningOut } from "./_redux/CrudHandlingPharmacist";
import { MODAL } from "../../../service/modalSession/ModalService";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import * as Yup from "yup";
import { useFormik } from "formik";
import { rupiah } from "../../components/currency";

const headerTable = [
  {
    title: "LABEL.PRODUCT_CODE",
  },
  {
    title: "LABEL.PRODUCT_NAME",
  },
  {
    title: "LABEL.UNIT_TYPE",
  },
  {
    title: "LABEL.UNIT_PRICE",
  },
  {
    title: "LABEL.PACKAGE",
  },
  {
    title: "LABEL.NUMBER_OF_ENTRIES",
  },
  {
    title: "LABEL.EXIT_AMOUNT",
  },
  {
    title: "LABEL.STOCK",
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
  },
];

const data_ops = [
  {
    label: "LABEL.CANCEL",
    icon: "fas fa-ban text-danger",
    type: "cancel",
  },
];

function ListStockIsRunningOutPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const suhbeader = useSubheader();
  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/pharmacist/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/pharmacist/handling-page/list-stock",
        title: intl.formatMessage({ id: "LABEL.DRUG_STOCKS_ARE_RUNNING_OUT" }),
      },
    ]);
    suhbeader.setTitle(
      intl.formatMessage({ id: "LABEL.DRUG_STOCKS_ARE_RUNNING_OUT" })
    );
  }, []);

  const callApiListStockRunningOut = () => {
    setLoading(true);
    getListStockRunningOut()
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListStockRunningOut, []);

  const handleAction = (type, data) => {};
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <TableOnly dataHeader={headerTable} loading={loading} hecto={10}>
            {data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item.barcode}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{rupiah(item.harga)}</TableCell>
                  <TableCell>
                    {item.iscomposite === 0 ? "Tidak Paket" : "Paket"}
                  </TableCell>
                  <TableCell>{item.in_qty}</TableCell>
                  <TableCell>{item.out_qty}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>
                    {/* {item.status !== "2" && item.status !== "7" && (
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

export default injectIntl(connect(null, null)(ListStockIsRunningOutPage));
