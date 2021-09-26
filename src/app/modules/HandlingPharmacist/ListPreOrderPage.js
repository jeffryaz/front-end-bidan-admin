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
import { getListPreOrder } from "./_redux/CrudHandlingPharmacist";
import { MODAL } from "../../../service/modalSession/ModalService";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import * as Yup from "yup";
import { useFormik } from "formik";
import { rupiah } from "../../components/currency";

const headerTable = [
  {
    title: "LABEL.PRODUCT_NAME",
    name: "nama",
    filter: true,
  },
  {
    title: "LABEL.UNIT_TYPE",
    name: "unit",
    filter: true,
  },
  {
    title: "LABEL.UNIT_PRICE",
    name: "harga",
    filter: true,
  },
  {
    title: "LABEL.PACKAGE",
    name: "iscompositeName",
    filter: true,
  },
  {
    title: "LABEL.BUY_DATE",
    name: "buy_time",
    filter: true,
  },
  {
    title: "LABEL.PATIENT_CODE",
    name: "kode_pasien",
    filter: false,
  },
  {
    title: "LABEL.PATIENT_NAME",
    name: "nama_pasien",
    filter: false,
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    filter: false,
  },
];

const data_ops = [
  {
    label: "LABEL.CANCEL",
    icon: "fas fa-ban text-danger",
    type: "cancel",
  },
];

function ListPreOrderPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);
  const suhbeader = useSubheader();
  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/pharmacist/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/pharmacist/handling-page/list-preorder",
        title: intl.formatMessage({ id: "LABEL.PRE_ORDER" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.PRE_ORDER" }));
  }, []);

  const callApiListStockRunningOut = () => {
    setLoading(true);
    getListPreOrder()
      .then((result) => {
        setLoading(false);
        var data = result.data.data;
        data.forEach((element) => {
          element.iscompositeName =
            element.iscomposite === 0 ? "Tidak Paket" : "Paket";
        });
        setData(data);
        setDataSecond(data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListStockRunningOut, []);
  const handleFilter = (data) => {
    setData(data);
  };

  const handleAction = (type, data) => {};
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
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{rupiah(item.harga)}</TableCell>
                  <TableCell>{item.iscompositeName}</TableCell>
                  <TableCell>
                    {window
                      .moment(new Date(item?.buy_time))
                      .format("DD MMM YYYY HH:mm:ss")}
                  </TableCell>
                  <TableCell>{item.kode_pasien}</TableCell>
                  <TableCell>{item.nama_pasien}</TableCell>
                  <TableCell>
                    <ButtonAction
                      data={item}
                      handleAction={handleAction}
                      ops={data_ops}
                    />
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

export default injectIntl(connect(null, null)(ListPreOrderPage));
