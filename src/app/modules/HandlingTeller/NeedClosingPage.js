import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { MODAL } from "../../../service/modalSession/ModalService";
import { useSubheader } from "../../../_metronic/layout";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory, Link } from "react-router-dom";
import { handOver, listNeedClosing } from "./_redux/CrudHandlingTeller";
import { publish } from "../../../redux/MqttOptions";
import { rupiah } from "../../components/currency";
import NumberFormat from "react-number-format";
import * as auth from "../Auth/_redux/ActionAuth";
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
import TableOnly from "../../components/tableCustomV1/tableOnly";

const headerTable = [
  {
    title: "LABEL.TRANSACTION_CODE",
    name: "kode_trans",
    filter: true,
  },
  {
    title: "LABEL.PRODUCT_SALE",
    name: "total",
    filter: true,
  },
  {
    title: "LABEL.HANDLING_FEE",
    name: "fee",
    filter: true,
  },
  {
    title: "LABEL.GRAND_TOTAL",
    name: "grand_total",
    filter: true,
  },
];

function comparerData(otherArray) {
  return function (current) {
    return (
      otherArray.filter(function (other) {
        // wajib compare data yang tidak boleh berubah. contoh ID. sisanya boleh compare dengan data yang berubah.
        return other.id === current.id;
      }).length === 0
    );
  };
}

function NeedClosingPage(props) {
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
  const [grandTotal, setGrandTotal] = useState(0);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/teller/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/teller/handling-page/need-closing`,
        title: intl.formatMessage({ id: "LABEL.NEED_CLOSING" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.NEED_CLOSING" }));
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

  const callApiListNeedClosing = () => {
    setLoading(true);
    listNeedClosing()
      .then((result) => {
        setLoading(false);
        var grand_total = 0;
        result.data.data.forEach((element) => {
          grand_total += Number(element.grand_total);
        });
        setData(result.data.data);
        setDataSecond(result.data.data);
        setGrandTotal(grand_total);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(
          err.response?.data.messages || err.response?.data.message
        );
      });
  };

  useEffect(callApiListNeedClosing, []);

  const callApiProcess = () => {
    setLoading(true);
    handOver()
      .then((result) => {
        setLoading(false);
        callApiListNeedClosing();
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(
          err.response?.data.messages || err.response?.data.message
        );
      });
  };
  const handleFilter = (data) => {
    setData(data);
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader title={rupiah(grandTotal)}>
              <CardHeaderToolbar>
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={callApiProcess}
                  disabled={loading || data.length === 0}
                >
                  <i
                    className={`fas fa-sync ${loading ? "fa-spin" : ""} px-1`}
                  ></i>
                  <FormattedMessage id="LABEL.PROCESS" />
                </button>
              </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
              <TableOnly
                dataHeader={headerTable}
                dataSecond={dataSecond}
                handleFilter={handleFilter}
                loading={false}
                hecto={10}
              >
                {data.map((item, index) => {
                  return (
                    <TableRow key={index.toString()}>
                      <TableCell>{item.kode_trans}</TableCell>
                      <TableCell>{rupiah(item.total)}</TableCell>
                      <TableCell>{rupiah(item.fee)}</TableCell>
                      <TableCell>{rupiah(item.grand_total)}</TableCell>
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

export default injectIntl(connect(null, auth.actions)(NeedClosingPage));
