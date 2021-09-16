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
import {
  listMedicinePagination,
  createMedicine,
  saveApotek,
  getMedicalRecord,
} from "./_redux/CrudHandlingPharmacist";
import { publish } from "../../../redux/MqttOptions";
import { rupiah } from "../../components/currency";
import NumberFormat from "react-number-format";
import * as auth from "../Auth/_redux/ActionAuth";
import Select from "react-select";
import Tables from "../../components/tableCustomV1/table";
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

const headerTable = [
  {
    title: "LABEL.PRODUCT_CODE",
    name: "barcode",
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
    title: "LABEL.PRODUCT_NAME",
    name: "nama",
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
    title: "LABEL.UNIT_TYPE",
    name: "unit",
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
    title: "LABEL.UNIT_PRICE",
    name: "harga",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "number",
    },
  },
  {
    title: "LABEL.PACKAGE",
    name: "iscomposite",
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
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "text",
    },
  },
];

const headerTableMedicine = [
  {
    title: "LABEL.CHECK",
  },
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
];

function ListProduct(props) {
  const { intl } = props;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [loadingReq, setLoadingReq] = useState(false);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const [dialogPackage, setDialogPackage] = useState(false);
  const [dialogMedicine, setDialogMedicine] = useState(false);
  const [addPackage, setAddPackage] = useState({
    barcode: "",
    nama: "",
    unit: "",
    harga: 0,
    iscomposite: false,
  });
  const suhbeader = useSubheader();
  const client = useSelector(
    ({ clientMqtt }) => clientMqtt.client,
    shallowEqual
  );
  const [dataChecked, setDataChecked] = useState([]);
  const [state, setState] = useState("new");
  const [paramTable, setParamTable] = useState("");

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/pharmacist/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/pharmacist/medicine-page/list`,
        title: intl.formatMessage({ id: "LABEL.PRODUCT_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.PRODUCT_LIST" }));
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

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    setParamTable(params);
    listMedicinePagination(params)
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

  const saveProduct = (e) => {
    e.preventDefault();
    setLoadingReq(true);
    var data = {
      barcode: addPackage?.barcode,
      nama: addPackage?.nama,
      unit: addPackage?.unit,
      harga: addPackage?.harga,
      iscomposite: addPackage?.iscomposite,
    };
    if (addPackage?.iscomposite) {
      dataChecked.forEach((element) => (element.barang_id = element.id));
      data.itemcomposite = dataChecked;
    }
    console.log("masuk", data);
    if (state === "new") {
      createMedicine(data)
        .then((result) => {
          setAddPackage({
            barcode: "",
            nama: "",
            unit: "",
            harga: 0,
            iscomposite: false,
          });
          setDataChecked([]);
          setLoadingReq(false);
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
            "success"
          );
          requestApi(paramTable);
          setDialogPackage(false);
        })
        .catch((err) => {
          setLoadingReq(false);
          MODAL.showSnackbar(err.response?.data.messages);
        });
    }
    // setDialogPackage(false);
  };

  const isEnabled =
    addPackage.barcode.length > 0 &&
    addPackage.nama.length > 0 &&
    addPackage.unit.length > 0;
  return (
    <React.Fragment>
      <Dialog
        open={dialogMedicine}
        // keepMounted
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.SELECT_PRODUCT" />
        </DialogTitle>

        <DialogContent>
          <TableOnly dataHeader={headerTableMedicine} hecto={8}>
            {data.data
              .filter((item) => item.iscomposite === 0)
              .map((item, index) => {
                return (
                  <TableRow key={index.toString()}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        indeterminate={false}
                        checked={
                          dataChecked.findIndex(
                            (value) => value.id === item.id
                          ) !== -1
                        }
                        onChange={(e) => {
                          var data = Object.assign([], dataChecked);
                          if (e.target.checked) {
                            data.push(item);
                          } else {
                            var idx = data.findIndex(
                              (value) => value.id === item.id
                            );
                            data.splice(idx, 1);
                          }
                          setDataChecked(data);
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.barcode}</TableCell>
                    <TableCell>{item.nama}</TableCell>
                    <TableCell>{item.unit}</TableCell>
                    <TableCell>{rupiah(item.harga || 0)}</TableCell>
                  </TableRow>
                );
              })}
          </TableOnly>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            onClick={() => {
              setDialogMedicine(false);
            }}
            className="btn btn-primary"
          >
            <FormattedMessage id="LABEL.OK" />
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={dialogPackage}
        // keepMounted
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.ADD_PRODUCT" />
        </DialogTitle>

        <form autoComplete="off" onSubmit={saveProduct}>
          <DialogContent>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.PRODUCT_CODE" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={addPackage?.barcode}
                  onChange={(e) => {
                    setAddPackage({ ...addPackage, barcode: e.target.value });
                  }}
                  required={true}
                  disabled={loadingReq}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.PRODUCT_NAME" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={addPackage?.nama}
                  onChange={(e) => {
                    setAddPackage({ ...addPackage, nama: e.target.value });
                  }}
                  required={true}
                  disabled={loadingReq}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.UNIT_TYPE" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={addPackage?.unit}
                  onChange={(e) => {
                    setAddPackage({
                      ...addPackage,
                      unit: e.target.value.toUpperCase(),
                    });
                  }}
                  required={true}
                  disabled={loadingReq}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.UNIT_PRICE" />
              </label>
              <div className="col-sm-9">
                <NumberFormat
                  id={loadingReq ? "NumberFormat-text" : "NumberFormat-input"}
                  value={addPackage?.harga}
                  displayType={loadingReq ? "text" : "input"}
                  className="form-control"
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  thousandSeparator={true}
                  allowNegative={false}
                  prefix={"Rp "}
                  onValueChange={(e) => {
                    setAddPackage({
                      ...addPackage,
                      harga: e.floatValue ? e.floatValue : 0,
                    });
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.PACKAGE" />
              </label>
              <div className="col-sm-9">
                <Switch
                  checked={addPackage?.iscomposite}
                  onChange={(e) => {
                    setAddPackage({
                      ...addPackage,
                      iscomposite: e.target.checked,
                    });
                  }}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  disabled={loadingReq}
                />
              </div>
            </div>
            {addPackage?.iscomposite && (
              <table>
                <thead>
                  <tr>
                    <th>
                      <FormattedMessage id="LABEL.PRODUCT_NAME" />
                    </th>
                    <th>
                      <FormattedMessage id="LABEL.UNIT_TYPE" />
                    </th>
                    <th>
                      <FormattedMessage id="LABEL.QTY" />
                    </th>
                    <th className="text-right" style={{ maxWidth: 80 }}>
                      <button
                        className="btn btn-warning btn-sm"
                        type="button"
                        onClick={() => {
                          setDialogMedicine(true);
                        }}
                      >
                        <FormattedMessage id="LABEL.SELECT_PRODUCT" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataChecked.map((item, index) => {
                    return (
                      <tr key={index.toString()}>
                        <td>{item.nama}</td>
                        <td>{item.unit}</td>
                        <td colSpan="2">
                          <input
                            type="number"
                            className="form-control"
                            value={item.qty}
                            onChange={(e) => {
                              var data = Object.assign([], dataChecked);
                              data[index].qty = e.target.value;
                              setDataChecked(data);
                            }}
                            required={true}
                            disabled={loadingReq}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              onClick={() => {
                setDialogPackage(false);
                setAddPackage({
                  barcode: "",
                  nama: "",
                  unit: "",
                  harga: 0,
                  iscomposite: false,
                });
                setDataChecked([]);
              }}
              disabled={loadingReq}
              className="btn btn-danger"
            >
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                !isEnabled ||
                (addPackage.iscomposite === true && dataChecked.length == 0) ||
                loadingReq
              }
            >
              {loadingReq ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingReq ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Card>
        <CardHeader title="">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                setState("new");
                setDialogPackage(true);
              }}
            >
              <i className="fas fa-prescription-bottle mx-1"></i>
              <FormattedMessage id="LABEL.ADD_PACKAGE" />
            </button>
            <button type="button" className="btn btn-primary mx-2">
              <i className="fas fa-capsules mx-1"></i>
              <FormattedMessage id="LABEL.ADD_PRODUCT" />
            </button>
          </CardHeaderToolbar>
        </CardHeader>
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
                  <TableCell>{item.barcode}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{rupiah(item.harga || 0)}</TableCell>
                  <TableCell>
                    {item.iscomposite === 0 ? "Tidak Paket" : "Paket"}
                  </TableCell>
                  <TableCell>
                    <button type="button" className="btn btn-success">
                      <i className="far fa-edit mx-1"></i>
                      <FormattedMessage id="LABEL.EDIT" />
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

export default injectIntl(connect(null, auth.actions)(ListProduct));
