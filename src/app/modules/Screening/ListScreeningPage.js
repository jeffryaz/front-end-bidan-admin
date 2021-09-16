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
import {
  listScreening,
  getLabsById,
  updateLabsById,
  regisLabs,
  typeScreening,
} from "./_redux/CrudScreening";
import { MODAL } from "../../../service/modalSession/ModalService";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonAction from "../../components/buttonAction/ButtonAction";

const headerTable = [
  {
    title: "LABEL.PATIENT_CODE",
  },
  {
    title: "LABEL.REGISTRATION_NO",
  },
  {
    title: "LABEL.PATIENT_NAME",
  },
  {
    title: "LABEL.DATE_OF_VISIT",
  },
  {
    title: "LABEL.POLI",
  },
  {
    title: "LABEL.STATUS",
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
  },
];

function ListScreeningPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState({});
  const [initialValues, setInitialValues] = useState({});
  const [loadingRegis, setLoadingRegis] = useState(false);
  const [dialogLab, setDialogLab] = useState(false);
  const [dialogTypeScreening, setDialogTypeScreening] = useState(false);
  const [dataTypeScreening, setDataTypeScreening] = useState([]);
  const [dataTypeScreening_, setDataTypeScreening_] = useState({});
  const suhbeader = useSubheader();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/registry/screening/list",
        title: intl.formatMessage({ id: "LABEL.SCREENING_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.SCREENING_LIST" }));
  }, []);

  const Schema = Yup.object().shape({
    hb: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    hbsag: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    hiv: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    sifilis: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    asam_urat: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    kolesterol: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    gol_dar: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    pp_test: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    protein_urine: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    ph: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
    glukosa: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION_REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      var data = values;
      data.medical_id = dataTemp.medical_id;
      setLoadingRegis(true);
      if (dataTemp.lab_id) {
        updateLabsById(dataTemp.medical_id, data)
          .then((result) => {
            callApiListNotCome();
            setLoadingRegis(false);
            setInitialValues({});
            formik.resetForm();
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success"
            );
            setDialogLab(false);
          })
          .catch((err) => {
            setLoadingRegis(false);
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
          });
      } else {
        regisLabs(data)
          .then((result) => {
            callApiListNotCome();
            setLoadingRegis(false);
            setInitialValues({});
            formik.resetForm();
            MODAL.showSnackbar(
              intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
              "success"
            );
            setDialogLab(false);
          })
          .catch((err) => {
            setLoadingRegis(false);
            MODAL.showSnackbar(
              intl.formatMessage({ id: "REQ.REQUEST_FAILED" })
            );
          });
      }
      console.log("values", values);
    },
  });

  const callApiListNotCome = () => {
    setLoading(true);
    listScreening()
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListNotCome, []);

  const callApiLabs = () => {
    if (dataTemp.lab_id) {
      getLabsById(dataTemp.medical_id)
        .then((result) => {
          var data = {
            hb: result.data.data.hb,
            hbsag: result.data.data.hbsag,
            hiv: result.data.data.hiv,
            sifilis: result.data.data.sifilis,
            asam_urat: result.data.data.asam_urat,
            kolesterol: result.data.data.kolesterol,
            gol_dar: result.data.data.gol_dar,
            pp_test: result.data.data.pp_test,
            protein_urine: result.data.data.protein_urine,
            ph: result.data.data.ph,
            glukosa: result.data.data.glukosa,
          };
          formik.setValues(data);
        })
        .catch((err) => {
          MODAL.showSnackbar(err.response?.data.messages);
        });
    }
  };

  useEffect(callApiLabs, [dataTemp]);

  function callApiTypeScreening(poli_id) {
    typeScreening(poli_id)
      .then((result) => {
        setDataTypeScreening(result.data.data);
        setDialogTypeScreening(true);
      })
      .catch((err) => {
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  }

  return (
    <React.Fragment>
      <Dialog
        open={dialogTypeScreening}
        // keepMounted
        maxWidth="xs"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.TYPE_SCREENING" />
        </DialogTitle>

        <DialogContent>
          {dataTypeScreening.map((item, index) => {
            return (
              <Link
                key={index.toString()}
                className="btn btn-primary  w-100 my-2"
                to={`/registry/screening/patient/${dataTypeScreening_.pasien_id}/${item.id}/${dataTypeScreening_.id}`}
              >
                {item.kind_nm}
              </Link>
            );
          })}
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            onClick={() => {
              setDialogTypeScreening(false);
            }}
            className="btn btn-danger"
          >
            <FormattedMessage id="LABEL.CANCEL" />
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={dialogLab}
        // keepMounted
        maxWidth="lg"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.LAB_RESULT" />
        </DialogTitle>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <DialogContent>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <FormattedMessage id="LABEL.PATIENT_CODE" />
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      value={dataTemp?.kode_pasien}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <FormattedMessage id="LABEL.PATIENT_NAME" />
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      value={dataTemp?.nama}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <FormattedMessage id="LABEL.REGISTRATION_NO" />
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      value={dataTemp?.code_reg}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <FormattedMessage id="LABEL.POLI" />
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      value={dataTemp?.poli}
                      onChange={() => {}}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Hemoglobin (HB)</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("hb")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Hepatitis B Surface Antigen (HBsAg)</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("hbsag")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Human Immunodeficiency Virus (HIV)</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("hiv")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Raja Singa (Sifilis)</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("sifilis")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Asam Urat</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("asam_urat")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Kolestrol</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("kolesterol")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Gelongan Darah</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("gol_dar")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Plano Test (PP Test)</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("pp_test")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Protein Urine</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("protein_urine")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>PH</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("ph")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Gula Darah (Glucose)</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    disabled={loadingRegis}
                    {...formik.getFieldProps("glukosa")}
                  />
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              onClick={() => {
                setDialogLab(false);
                formik.resetForm();
              }}
              className="btn btn-danger"
              disabled={loadingRegis}
            >
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
            <button className="btn btn-primary" type="submit">
              {loadingRegis ? (
                <i className="fas fa-spinner fa-pulse px-2"></i>
              ) : (
                <i className="fas fa-save ml-2"></i>
              )}
              {loadingRegis ? (
                <FormattedMessage id="LABEL.WAITING" />
              ) : (
                <FormattedMessage id="LABEL.SAVE" />
              )}
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Card>
        <CardBody>
          <TableOnly dataHeader={headerTable} loading={loading} hecto={10}>
            {data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>{item.kode_pasien}</TableCell>
                  <TableCell>{item.code_reg}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.tgl_book}</TableCell>
                  <TableCell>{item.poli}</TableCell>
                  <TableCell>
                    {item.status === "1" ? (
                      <FormattedMessage id="LABEL.BOOKING" />
                    ) : item.status === "2" ? (
                      <FormattedMessage id="LABEL.CANCELED" />
                    ) : item.status === "3" ? (
                      <FormattedMessage id="LABEL.CHECKIN_SCREENING" />
                    ) : item.status === "4" ? (
                      <FormattedMessage id="LABEL.POLI_PROCESS" />
                    ) : item.status === "5" ? (
                      <FormattedMessage id="LABEL.PHARMACIST" />
                    ) : item.status === "6" ? (
                      <FormattedMessage id="LABEL.PAYMENT" />
                    ) : (
                      <FormattedMessage id="LABEL.FINISH" />
                    )}
                  </TableCell>
                  <TableCell>
                    {item.status === "1" && (
                      <button
                        className="btn btn-warning"
                        onClick={async () => {
                          callApiTypeScreening(item.poli_id);
                          setDataTypeScreening_(item);
                        }}
                      >
                        <FormattedMessage id="LABEL.SCREENING" />
                      </button>
                    )}
                    {item.status === "4" && (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          setDataTemp(item);
                          setDialogLab(true);
                          if (item.lab_id) {
                            callApiLabs();
                          }
                        }}
                      >
                        {item.lab_id ? (
                          <i className="fas fa-edit pr-2"></i>
                        ) : (
                          <i className="fas fa-pen pr-2"></i>
                        )}
                        <FormattedMessage id="LABEL.LAB_RESULT" />
                      </button>
                    )}
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

export default injectIntl(connect(null, null)(ListScreeningPage));
