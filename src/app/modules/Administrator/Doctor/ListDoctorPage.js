import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  listDoctorPagination,
  listAllPoli,
  craeteDoctor,
  getDoctorById,
  editDoctorById,
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
} from "@material-ui/core";
import Select from "react-select";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import * as Yup from "yup";
import { useFormik } from "formik";
import { hostBase } from "../../../../redux/setupAxios";

const headerTable = [
  {
    title: "LABEL.NAME",
    name: "nama",
    order: {
      active: true,
      status: true,
    },
    filter: {
      active: true,
      type: "text",
    },
  },
  {
    title: "LABEL.EDUCATION",
    name: "pendidikan",
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
    title: "LABEL.EMAIL",
    name: "email",
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
    title: "LABEL.POLI",
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
];

const initialValues = {};

function ListDoctorPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const history = useHistory();
  const [optionParameterPoli, setOptionParameterPoli] = useState([]);
  const [selectedParameterPoli, setSelectedParameterPoli] = useState({});
  const [dialog, setDialog] = useState(false);
  const [photo_, setPhoto_] = useState({
    init: "",
    load: "",
  });
  const [photo, setPhoto] = useState("");
  const [paramTable, setParamTable] = useState("");
  const [statusDialog, setStatusDialog] = useState(null);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/doctor-page/list`,
        title: intl.formatMessage({ id: "LABEL.DOCTOR_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.DOCTOR_LIST" }));
  }, []);

  const Schema = Yup.object().shape({
    nama: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    tempat: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    tgl_lahir: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    pendidikan: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    poli_id: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    email: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    desc: Yup.string().required(
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
      if (!photo && values.photo) delete values.photo;
      let newParams = new FormData();
      var dataReq = Object.assign({}, values);
      Object.keys(dataReq).forEach((element) => {
        newParams.append(element, dataReq[element]);
      });
      if (!statusDialog) {
        craeteDoctor(newParams)
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
            setSelectedParameterPoli({});
            setPhoto_({ ...photo_, init: "", load: "" });
          })
          .catch((err) => {
            setLoadingSave(false);
            MODAL.showSnackbar(err.response?.data.messages);
          });
      } else {
        editDoctorById(statusDialog, newParams)
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
            setSelectedParameterPoli({});
            setPhoto_({ ...photo_, init: "", load: "" });
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
    listDoctorPagination(params)
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

  const handleAction = (type, data) => {
    setStatusDialog(data.id);
    getDoctorById(data.id)
      .then((result) => {
        var statusIndex = optionParameterPoli.findIndex(
          (item) => item.value === result.data.data.poli_id
        );
        setSelectedParameterPoli(optionParameterPoli[statusIndex]);
        setPhoto_({ ...photo_, init: result.data.data.photo });
        formik.setValues(result.data.data);
        formik.setFieldTouched("nama", true);
        setDialog(true);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

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

  const getUserPic = () => {
    if (!photo_.init) {
      return "none";
    }
    return `url(${hostBase()}/storage/app/dokter_photo/${photo_.init})`;
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
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.FOTO" />
              </label>
              <div className="col-sm-9">
                <div
                  className="image-input image-input-outline"
                  id="kt_profile_avatar"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/blank.png"
                    )}`,
                  }}
                >
                  <div
                    className="image-input-wrapper"
                    style={{
                      backgroundImage: `${
                        photo ? `url('${photo_.load}')` : getUserPic()
                      }`,
                    }}
                  />
                  <label
                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                    data-action="change"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Change avatar"
                  >
                    <i className="fa fa-pen icon-sm text-muted"></i>
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      disabled={loadingSave}
                      onChange={(e) => {
                        let fr = new FileReader();
                        fr.onload = () => {
                          setPhoto_({ ...photo_, load: fr.result });
                        };
                        fr.readAsDataURL(e.target.files[0]);
                        setPhoto(e.target.files[0]);
                        formik.setFieldValue("photo", e.target.files[0]);
                      }}
                    />
                  </label>
                  <span
                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                    data-action="cancel"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Cancel avatar"
                  >
                    <i className="ki ki-bold-close icon-xs text-muted"></i>
                  </span>
                </div>
                <span className="form-text text-muted">
                  Hanya menerima type file: png, jpg, jpeg.
                </span>
                <span className="text-left text-danger">
                  <FormattedMessage id="LABEL.VALIDATION_REQUIRED_FIELD" />
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.NAME" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("nama")}
                />
                {formik.touched.nama && formik.errors.nama && (
                  <span className="text-left text-danger">
                    {formik.errors.nama}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.PLACE_OF_BIRTH" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("tempat")}
                />
                {formik.touched.tempat && formik.errors.tempat && (
                  <span className="text-left text-danger">
                    {formik.errors.tempat}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.DATE_OF_BIRTH" />
              </label>
              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("tgl_lahir")}
                />
                {formik.touched.tgl_lahir && formik.errors.tgl_lahir && (
                  <span className="text-left text-danger">
                    {formik.errors.tgl_lahir}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.EDUCATION" />
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("pendidikan")}
                />
                {formik.touched.pendidikan && formik.errors.pendidikan && (
                  <span className="text-left text-danger">
                    {formik.errors.pendidikan}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.EMAIL" />
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-left text-danger">
                    {formik.errors.email}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.POLI" />
              </label>
              <div className="col-sm-9">
                <Select
                  value={selectedParameterPoli}
                  options={optionParameterPoli}
                  isDisabled={loadingSave}
                  className="form-control border-0 p-0 h-100 rounded-0"
                  classNamePrefix="react-select"
                  menuPlacement="top"
                  onChange={(value) => {
                    setSelectedParameterPoli(value);
                    formik.setFieldValue("poli_id", value.value);
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("poli_id", true);
                  }}
                />
                {formik.touched.poli_id && formik.errors.poli_id && (
                  <span className="text-left text-danger">
                    {formik.errors.poli_id}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.DESC" />
              </label>
              <div className="col-sm-9">
                <textarea
                  rows="3"
                  className="form-control"
                  disabled={loadingSave}
                  required
                  {...formik.getFieldProps("desc")}
                ></textarea>
                {formik.touched.desc && formik.errors.desc && (
                  <span className="text-left text-danger">
                    {formik.errors.desc}
                  </span>
                )}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                !formik.isValid ||
                (Object.keys(formik.touched).length === 0 &&
                  formik.touched.constructor === Object) ||
                loadingSave ||
                (!photo && !photo_.init)
              }
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
                setPhoto_({ ...photo_, init: "", load: "" });
                setSelectedParameterPoli({});
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
              <i className="fas fa-user-plus"></i>
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
            hecto={10}
          >
            {data.data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item?.nama}</TableCell>
                  <TableCell>{item?.pendidikan}</TableCell>
                  <TableCell>{item?.email}</TableCell>
                  <TableCell>---</TableCell>
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

export default injectIntl(connect(null, auth.actions)(ListDoctorPage));
