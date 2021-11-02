import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import TableOnly from "../../components/tableCustomV1/tableOnly";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import { getListPreOrder, getPoDrug } from "./_redux/CrudHandlingPharmacist";
import { MODAL } from "../../../service/modalSession/ModalService";
import { rupiah } from "../../components/currency";

const headerTable = [
  {
    title: "LABEL.TRANSACTION_CODE",
    name: "nama",
    filter: false,
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
    label: "LABEL.HANDOVER",
    icon: "fas fa-hand-holding-heart text-primary",
    type: "open",
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

  const handleAction = (index, id) => {
    window.$(`#iconAction-${index}`).removeClass("fa-hand-holding-heart");
    window.$(`#iconAction-${index}`).addClass("fa-spinner fa-pulse");
    getPoDrug(id)
      .then((result) => {
        window.$(`#iconAction-${index}`).removeClass("fa-spinner fa-pulse");
        window.$(`#iconAction-${index}`).addClass("fa-hand-holding-heart");
        callApiListStockRunningOut();
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        window.$(`#iconAction-${index}`).removeClass("fa-spinner fa-pulse");
        window.$(`#iconAction-${index}`).addClass("fa-hand-holding-heart");
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
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
                  <TableCell>{"kode transaksi"}</TableCell>
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
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        handleAction(index, item.id);
                      }}
                    >
                      <i
                        id={`iconAction-${index}`}
                        className="px-2 fas fa-hand-holding-heart"
                      ></i>
                      <FormattedMessage id="LABEL.HANDOVER" />
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

export default injectIntl(connect(null, null)(ListPreOrderPage));
