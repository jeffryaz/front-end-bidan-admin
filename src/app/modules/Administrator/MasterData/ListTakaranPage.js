import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  getTakaran,
  createTakaran,
  deleteTakaran,
  editTakaran,
} from "../_redux/CrudAdministrator";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
import TableOnly from "../../../components/tableCustomV1/tableOnly";
import { MODAL } from "../../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../../Auth/_redux/ActionAuth";
import ButtonAction from "../../../components/buttonAction/ButtonAction";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";

const headerTable = [
  {
    title: "LABEL",
    name: "takaran",
    filter: true,
    td: "td-85",
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    filter: false,
    td: "td-15",
  },
];

const data_ops = [
  {
    label: "LABEL.DELETE",
    icon: "far fa-trash-alt text-danger",
    type: "delete",
  },
  {
    label: "LABEL.EDIT",
    icon: "fas fa-external-link-alt text-primary",
    type: "open",
  },
];

const initialValues = {
  takaran: "",
};

function ListTakaranPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const history = useHistory();
  const [dialog, setDialog] = useState(false);
  const [statusDialog, setStatusDialog] = useState(null);
  const [datas, setDatas] = useState([]);
  const [dataSeconds, setDataSeconds] = useState([]);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/master-data-page/takaran`,
        title: intl.formatMessage({ id: "LABEL.TAKARAN" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.TAKARAN" }));
  }, []);

  const Schema = Yup.object().shape({
    takaran: Yup.string().required(
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
        createTakaran(values)
          .then((result) => {
            callApiListMedKindPagination();
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
        editTakaran(statusDialog, values)
          .then((result) => {
            callApiListMedKindPagination();
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

  const callApiListMedKindPagination = () => {
    setLoading(true);
    getTakaran()
      .then((result) => {
        setLoading(false);
        setDatas(result.data.data);
        setDataSeconds(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(
          err.response?.data.messages || err.response?.data.message
        );
      });
  };

  useEffect(callApiListMedKindPagination, []);

  const handleAction = (type, data) => {
    if (type === "delete") {
      deleteTakaran(data.id)
        .then((result) => {
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
            "success"
          );
          callApiListMedKindPagination();
        })
        .catch((err) => {
          MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
        });
    } else {
      setDialog(true);
      setStatusDialog(data.id);
      formik.setValues(data);
      formik.setFieldTouched({ ...formik, takaran: true });
    }
  };
  const handleFilters = (data) => {
    setDatas(data);
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
            <div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  <FormattedMessage id="LABEL" />
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    disabled={loadingSave}
                    {...formik.getFieldProps("takaran")}
                  />
                  {formik.touched.takaran && formik.errors.takaran && (
                    <span className="text-left text-danger">
                      {formik.errors.takaran}
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
          <TableOnly
            dataHeader={headerTable}
            dataSecond={dataSeconds}
            handleFilter={handleFilters}
            loading={false}
            hecto={5}
          >
            {datas.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item?.takaran}</TableCell>
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

export default injectIntl(connect(null, auth.actions)(ListTakaranPage));
