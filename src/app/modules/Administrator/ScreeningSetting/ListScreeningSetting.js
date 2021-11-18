import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  ListScreeningSettingPagination,
  craeteScreeningSetting,
  listAllPoli,
  editScreeningSetting,
  getScreeningSettingById,
  createMedicalForm,
  getMedicalFormById,
  deleteMedicalFormById,
  ListMedKindPagination,
} from "../_redux/CrudAdministrator";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
import Tables from "../../../components/tableCustomV1/table";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../../Auth/_redux/ActionAuth";
import ButtonAction from "../../../components/buttonAction/ButtonAction";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Paper,
} from "@material-ui/core";
import Select from "react-select";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import * as Yup from "yup";
import { useFormik } from "formik";
import { hostBase } from "../../../../redux/setupAxios";
import DualListBoxs from "../../../components/dualListbox/dualListBoxs";

const headerTable = [
  {
    title: "LABEL.TYPE_SCREENING",
    name: "kind_nm",
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
    title: "LABEL.SCREENING_SECTION",
    name: "poli",
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
    title: "LABEL.DATE_UPDATED",
    name: "updated_at",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "date",
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
    label: "LABEL.EDIT",
    icon: "fas fa-external-link-alt text-primary",
    type: "open",
  },
  {
    label: "LABEL.SCREENING_FORM",
    icon: "fas fa-bong text-primary",
    type: "add",
  },
];

const initialValues = {};

function ListScreeningSetting(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [optionParameterPoli, setOptionParameterPoli] = useState([]);
  const [selectedParameterPoli, setSelectedParameterPoli] = useState({});
  const [dialog, setDialog] = useState(false);
  const [paramTable, setParamTable] = useState("");
  const [statusDialog, setStatusDialog] = useState(null);
  const [dialogMedical, setDialogMedical] = useState(false);
  const [optionPoli, setOptionPoli] = useState([]);
  const [selectPoli, setSelectPoli] = useState([]);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/screening-setting`,
        title: intl.formatMessage({ id: "LABEL.SCREENING_SETTING" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.SCREENING_SETTING" }));
  }, []);

  const Schema = Yup.object().shape({
    poli_id: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    kind_nm: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoadingSave(true);
      if (!statusDialog) {
        craeteScreeningSetting(values)
          .then((result) => {
            requestApi(paramTable);
            formik.resetForm();
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success",
              3000
            );
            setDialog(false);
            setLoadingSave(false);
          })
          .catch((err) => {
            setLoadingSave(false);
            MODAL.showSnackbar(err.response?.data.messages);
          });
      } else {
        editScreeningSetting(statusDialog, values)
          .then((result) => {
            requestApi(paramTable);
            formik.resetForm();
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success",
              3000
            );
            setDialog(false);
            setLoadingSave(false);
          })
          .catch((err) => {
            console.log(err);
            setLoadingSave(false);
            MODAL.showSnackbar(err.response?.data.messages);
          });
      }
    },
  });

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    setParamTable(params);
    ListScreeningSettingPagination(params)
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

  async function handleAction(type, data) {
    if (type === "open") {
      setStatusDialog(data.id);
      getScreeningSettingById(data.id)
        .then((result) => {
          var statusIndex = optionParameterPoli.findIndex(
            (item) => item.value === result.data.data.poli_id
          );
          setSelectedParameterPoli(optionParameterPoli[statusIndex]);
          formik.setFieldValue("poli_id", result.data.data.poli_id);
          formik.setFieldValue("kind_nm", result.data.data.kind_nm);
          formik.setFieldTouched({ ...formik, poli_id: true });
          setDialog(true);
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else if (type === "add") {
      setStatusDialog(data.id);
      try {
        var selectPoli_ = [];
        var resultGetMedicalFormById = await getMedicalFormById(data.id);
        resultGetMedicalFormById.data.data.forEach((element) => {
          var item = {
            value: element.id,
            label: element.nama,
            title: element.nama,
          };
          selectPoli_.push(item);
        });
        setSelectPoli(selectPoli_);
        setDialogMedical(true);
      } catch (error) {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      }
    }
  }

  const callApiListPoli = () => {
    listAllPoli()
      .then((result) => {
        var data = result.data.data;
        data.forEach((element) => {
          element.value = element.id;
          element.label = element.poli;
        });
        setOptionParameterPoli(data);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListPoli, []);

  const callApiListMedKind = () => {
    ListMedKindPagination()
      .then((result) => {
        var optionPoli_ = [];
        result.data.data.forEach((element) => {
          var item = {
            value: element.id,
            label: element.nama,
            title: element.nama,
          };
          optionPoli_.push(item);
        });
        setOptionPoli(optionPoli_);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListMedKind, []);

  const saveMedicalForm = (selected, selection) => {
    console.log("selection && selection", selection, selection);
    if (selection && selection.length > 0) {
      selection.forEach((element) => {
        var item = {
          formkind_id: statusDialog,
          medkind_id: element.value,
          dokter_only: 1,
        };
        var checkIndex = selected.findIndex(
          (items) => items.value === element.value
        );
        if (checkIndex !== -1) {
          createMedicalForm(item).catch((err) => {
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
          });
        } else {
          deleteMedicalFormById(element.value).catch((err) => {
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
          });
        }
      });
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialog}
        maxWidth="xs"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {statusDialog ? (
            <FormattedMessage id="LABEL.EDIT" />
          ) : (
            <FormattedMessage id="LABEL.ADD" />
          )}
        </DialogTitle>
        <form
          className="form"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <DialogContent>
            <div style={{ minHeight: "20rem" }}>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">
                  <FormattedMessage id="LABEL.SCREENING_SECTION" />
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-7">
                  <Select
                    value={selectedParameterPoli}
                    options={optionParameterPoli}
                    isDisabled={loadingSave}
                    className="form-control border-0 p-0 h-100"
                    classNamePrefix="react-select"
                    onChange={(value) => {
                      setSelectedParameterPoli(value);
                      formik.setFieldValue("poli_id", value.value);
                    }}
                  />
                  {formik.errors.poli_id && (
                    <span className="text-left text-danger">
                      {formik.errors.poli_id}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label">
                  <FormattedMessage id="LABEL.TYPE_SCREENING" />
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    disabled={loadingSave}
                    required
                    {...formik.getFieldProps("kind_nm")}
                  />
                  {formik.touched.kind_nm && formik.errors.kind_nm && (
                    <span className="text-left text-danger">
                      {formik.errors.kind_nm}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formik.isValid || loadingSave}
            >
              {loadingSave ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingSave ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setDialog(false);
                setSelectedParameterPoli({});
                formik.resetForm();
              }}
              disabled={loadingSave}
            >
              <i className="fas fa-times px-1"></i>
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        open={dialogMedical}
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>list</DialogTitle>
        <DialogContent>
          <DualListBoxs
            options={optionPoli}
            select={selectPoli}
            handleSelected={saveMedicalForm}
          />
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setDialogMedical(false);
            }}
          >
            <FormattedMessage id="LABEL.OK" />
          </button>
        </DialogActions>
      </Dialog>
      <Card>
        <CardHeader title="">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setStatusDialog(null);
                setDialog(true);
              }}
            >
              <i className="fas fa-plus-circle"></i>
              <FormattedMessage id="LABEL.ADD" />
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
            hecto={5}
          >
            {data.data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item?.kind_nm}</TableCell>
                  <TableCell>{item?.poli.poli}</TableCell>
                  <TableCell>
                    {window
                      .moment(new Date(item?.updated_at))
                      .format("DD MMM YYYY")}
                  </TableCell>
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
          </Tables>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(ListScreeningSetting));
