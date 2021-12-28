import React, { useLayoutEffect, useState } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  listTransactionPagination,
  getMedicineById,
  getMedicalRecord,
  getDataResep,
} from "../_redux/CrudHandlingTeller";
import { Card, CardBody } from "../../../../_metronic/_partials/controls";
import Tables from "../../../components/tableCustomV1/table";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../../Auth/_redux/ActionAuth";
import { ReceiptContent } from "../../../../service/print/ReceiptContent";
import { TableRow, TableCell } from "@material-ui/core";
import { rupiah } from "../../../components/currency";
import ReactDOMServer from "react-dom/server";

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
    title: "LABEL.HANDLING_FEE",
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
  {
    title: "LABEL.STAFF",
    name: "nama_staff",
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
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "true",
    },
  },
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
  const [data_, setData_] = useState({});
  const [err, setErr] = useState(false);
  const history = useHistory();
  const [content, setContent] = useState({});
  const [dataMedicine, setDataMedicine] = useState([]);
  const [handlingFee, setHandlingFee] = useState(0);
  const user = useSelector(({ auth }) => auth.user, shallowEqual);
  const [payment, setPayment] = useState(0);

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

  const handleContentPrint = (item = content) => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <ReceiptContent data={item} />
    );
    var mywindow = window.open();
    mywindow.document.write(
      "<html><head><title>" +
        data.code_reg +
        "-" +
        data.pasien +
        "-" +
        window.moment(new Date(data.created_at)).format("DD MMM YYYY") +
        "-" +
        data.poli +
        "</title>"
    );
    mywindow.document.write(
      "<html></head><body style='margin: 0 !important;' >"
    );
    mywindow.document.write(html.toString());
    mywindow.document.write("</body></html>");

    mywindow.document.close();
    mywindow.focus();
    setTimeout(() => {
      mywindow.print();
      mywindow.close();
    }, 500);
  };

  const callApiSubmitMedicalRecord = (
    data__ = dataMedicine,
    detail = data_
  ) => {
    var item = detail;
    item.items = data__;
    item.petugas = user;
    item.handlingFee = handlingFee;
    item.payment = payment;
    setContent(item);
    handleContentPrint(item);
  };

  async function callApiGetMedicine(dataMedicinePatient, detail) {
    if (dataMedicinePatient && dataMedicinePatient.length > 0) {
      var data = dataMedicinePatient;
      var waiting = new Promise(async (resolve, reject) => {
        for (let i = 0; i < data.length; i++) {
          try {
            var result = await getMedicineById(data[i].id);
            data[i].composite_item = result.data.data.composite_item;
            data[i].qty = data[i].qty ? data[i].qty : 1;
            if (i === data.length - 1) resolve();
          } catch (error) {
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
            if (i === data.length - 1) resolve();
          }
        }
      });
      await waiting;
      setDataMedicine(data);
      callApiSubmitMedicalRecord(data, detail);
    } else {
      callApiSubmitMedicalRecord(dataMedicine, detail);
    }
  }

  const callApiGetMedical = (id) => {
    getDataResep(id)
      .then((result) => {
        setLoading(false);
        setHandlingFee(result.data.data.form[0].fee || 0);
        setData_(result.data.data.form[0]);
        result.data.data.resep.forEach((element) => {
          element.id = element.barang_id;
        });
        callApiGetMedicine(
          result.data.data.resep ? result.data.data.resep : [],
          result.data.data.form[0]
        );
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

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
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.no_telp}</TableCell>
                  <TableCell>{rupiah(item.fee)}</TableCell>
                  <TableCell>{rupiah(item.grand_total)}</TableCell>
                  <TableCell>
                    {item.status === "1" ? (
                      <FormattedMessage id="LABEL.PROCESS" />
                    ) : item.status === "2" ? (
                      <FormattedMessage id="LABEL.NEED_PREPARE" />
                    ) : item.status === "3" ? (
                      <FormattedMessage id="LABEL.PAYMENT" />
                    ) : (
                      <FormattedMessage id="LABEL.FINISH" />
                    )}
                  </TableCell>
                  <TableCell>{item.nama_staff}</TableCell>
                  <TableCell>
                    <button
                      type="button"
                      onClick={() => {
                        callApiGetMedical(item.id);
                      }}
                      className="btn btn-primary w-100 my-3"
                    >
                      <FormattedMessage id="LABEL.PRINT" />
                    </button>
                  </TableCell>
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
