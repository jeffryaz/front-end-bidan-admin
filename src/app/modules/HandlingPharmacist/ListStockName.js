import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import { getListStockName } from "./_redux/CrudHandlingPharmacist";
import { MODAL } from "../../../service/modalSession/ModalService";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import * as Yup from "yup";
import { useFormik } from "formik";
import { rupiah } from "../../components/currency";
import xlsx from "json-as-xlsx";

const headerTable = [
  {
    title: "LABEL.PRODUCT_CODE",
    name: "barcode",
    filter: true,
  },
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
    title: "LABEL.NUMBER_OF_ENTRIES",
    name: "in_qty",
    filter: true,
  },
  {
    title: "LABEL.EXIT_AMOUNT",
    name: "out_qty",
    filter: true,
  },
  {
    title: "LABEL.STOCK",
    name: "stock",
    filter: true,
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

function ListStockName(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);
  const suhbeader = useSubheader();
  const [loadingDownload, setLoadingDownload] = useState(false);
  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/pharmacist/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/pharmacist/stock-name-page/list",
        title: intl.formatMessage({ id: "LABEL.STOCK_OF_NAME" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.STOCK_OF_NAME" }));
  }, []);

  const callApiListEmptyMedicine = () => {
    setLoading(true);
    getListStockName()
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

  useEffect(callApiListEmptyMedicine, []);

  const handleAction = (type, data) => {};
  const handleFilter = (data) => {
    setData(data);
  };

  const downloadExcel = async () => {
    setLoadingDownload(true);
    let settings = {
      fileName: `Stock-Of-Name-${window
        .moment(new Date())
        .format("DD MMM YYYY")}`,
    };
    let data = [
      {
        sheet: `Stock-Of-Name-${window
          .moment(new Date())
          .format("DD MMM YYYY")}`,
        columns: [
          { label: "Kode Produk", value: "barcode" },
          { label: "Nama Produk", value: "nama" },
          {
            label: "Jenis Satuan",
            value: "unit",
          },
          {
            label: "Harga Unit",
            value: "harga",
          },
          {
            label: "Paket",
            value: "iscompositeName",
          },
          {
            label: "Jumlah Masuk",
            value: "in_qty",
          },
          {
            label: "Jumlah Keluar",
            value: "out_qty",
          },
          {
            label: "Persediaan",
            value: "stock",
          },
        ],
        content: dataSecond,
      },
    ];
    await xlsx(data, settings);
    setLoadingDownload(false);
  };
  return (
    <React.Fragment>
      <Card>
        <CardHeader title="">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => {
                downloadExcel();
              }}
            >
              {loadingDownload ? (
                <i className="fas fa-spinner fa-pulse p-1"></i>
              ) : (
                <i className="fas fa-print"></i>
              )}

              <FormattedMessage id="LABEL.PRINT" />
            </button>
          </CardHeaderToolbar>
        </CardHeader>
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
                  <TableCell>{item.barcode}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{rupiah(item.harga)}</TableCell>
                  <TableCell>{item.iscompositeName}</TableCell>
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

export default injectIntl(connect(null, null)(ListStockName));
