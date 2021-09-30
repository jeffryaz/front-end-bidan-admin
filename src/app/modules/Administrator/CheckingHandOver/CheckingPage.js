import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useSubheader } from "../../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { useHistory, Link } from "react-router-dom";
import {
  processHandOver,
  listHandOver,
  detailHandOver,
} from "../_redux/CrudAdministrator";
import { publish } from "../../../../redux/MqttOptions";
import { rupiah } from "../../../components/currency";
import NumberFormat from "react-number-format";
import * as auth from "../../Auth/_redux/ActionAuth";
import Select from "react-select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TableRow,
  TableCell,
  Switch,
  Checkbox,
} from "@material-ui/core";
import TableOnly from "../../../components/tableCustomV1/tableOnly";

const headerTable = [
  {
    title: "LABEL.STAFF",
    name: "staff_name",
    filter: true,
  },
  {
    title: "LABEL.PRODUCT_SALE",
    name: "closing_amt",
    filter: true,
  },
  {
    title: "LABEL.DATE",
    name: "closing_date",
    filter: true,
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    filter: false,
  },
];

const headerTables = [
  {
    title: "LABEL.TRANSACTION_CODE",
    name: "trans_kode",
    filter: true,
  },
  {
    title: "LABEL.PRODUCT_SALE",
    name: "total",
    filter: true,
  },
  // {
  //   title: "LABEL.HANDLING_FEE",
  //   name: "fee",
  //   filter: true,
  // },
  // {
  //   title: "LABEL.GRAND_TOTAL",
  //   name: "grand_total",
  //   filter: true,
  // },
];

function CheckingPage(props) {
  const { intl } = props;
  const history = useHistory();
  const suhbeader = useSubheader();
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataSecond, setDataSecond] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [datas, setDatas] = useState([]);
  const [dataSeconds, setDataSeconds] = useState([]);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/handling-page/need-closing`,
        title: intl.formatMessage({ id: "LABEL.HANDOVER" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.HANDOVER" }));
  }, []);

  const mqttPublish = () => {
    if (client) {
      const { topic, qos, payload } = publish;
      client.publish(topic, payload, { qos }, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        }
      });
    }
  };

  const callApiListHandOver = () => {
    setLoading(true);
    listHandOver()
      .then((result) => {
        setLoading(false);
        result.data.data.forEach((element) => {
          element.staff_name = element.staff.nama;
        });
        setData(result.data.data);
        setDataSecond(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(
          err.response?.data.messages || err.response?.data.message
        );
      });
  };

  useEffect(callApiListHandOver, []);

  const callApiProcess = (id, index) => {
    window.$(`#loading-${index}`).addClass("fa-spin");
    processHandOver(id)
      .then((result) => {
        window.$(`#loading-${index}`).removeClass("fa-spin");
        callApiListHandOver();
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        window.$(`#loading-${index}`).removeClass("fa-spin");
        MODAL.showSnackbar(
          err.response?.data.messages || err.response?.data.message
        );
      });
  };

  const handleFilter = (data) => {
    setData(data);
  };
  const handleFilters = (data) => {
    setDatas(data);
  };

  const callApiDetail = (id) => {
    detailHandOver(id)
      .then((result) => {
        setDialog(true);
        setDatas(result.data.data);
        setDataSeconds(result.data.data);
      })
      .catch((err) => {
        MODAL.showSnackbar(
          err.response?.data.messages || err.response?.data.message
        );
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialog}
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.DETAIL" />
        </DialogTitle>
        <DialogContent>
          <TableOnly
            dataHeader={headerTables}
            dataSecond={dataSeconds}
            handleFilter={handleFilters}
            loading={false}
            hecto={5}
          >
            {datas.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item.trans_kode}</TableCell>
                  <TableCell>{rupiah(item.total)}</TableCell>
                  {/* <TableCell>{rupiah(item.fee)}</TableCell>
                  <TableCell>{rupiah(item.grand_total)}</TableCell> */}
                </TableRow>
              );
            })}
          </TableOnly>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setDialog(false);
            }}
          >
            <FormattedMessage id="LABEL.OK" />
          </button>
        </DialogActions>
      </Dialog>
      <div className="row">
        <div className="col-md-12">
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
                      <TableCell>{item.staff_name}</TableCell>
                      <TableCell>{rupiah(item.closing_amt)}</TableCell>
                      <TableCell>
                        {window
                          .moment(new Date(item.closing_date))
                          .format("DD MMM YYYY")}
                      </TableCell>
                      <TableCell>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary mx-1"
                          onClick={() => {
                            callApiDetail(item.id);
                          }}
                        >
                          <FormattedMessage id="LABEL.DETAIL" />
                        </button>
                        {item.status === 1 && (
                          <button
                            type="button"
                            className="btn btn-sm btn-primary mx-1"
                            onClick={() => {
                              callApiProcess(item.id, index);
                            }}
                          >
                            <i
                              className={`fas fa-sync px-1`}
                              id={`loading-${index}`}
                            ></i>
                            <FormattedMessage id="LABEL.PROCESS" />
                          </button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableOnly>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(CheckingPage));
