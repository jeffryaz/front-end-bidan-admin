import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Card, CardBody } from "../../../../_metronic/_partials/controls";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useSubheader } from "../../../../_metronic/layout";
import {
  getListTestimonialPagination,
  publishTestimonial,
  unPublishTestimonial,
  deleteTestimonial,
} from "./_redux/CrudTestimonial";
import { MODAL } from "../../../../service/modalSession/ModalService";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
import Tables from "../../../components/tableCustomV1/table";

const headerTable = [
  {
    title: "LABEL.NAME",
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
    td: "td-20",
  },
  {
    title: "LABEL.SATISFACTION_LAVEL",
    name: "tingkat_kepuasan",
    order: {
      active: false,
      status: false,
    },
    filter: {
      active: false,
      type: "text",
    },
    td: "td-15",
  },
  {
    title: "LABEL.COMMENT",
    name: "komentar",
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
    title: "LABEL.DATE",
    name: "updated_at",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "date",
    },
    td: "td-15",
  },
  {
    title: "LABEL.PUBLISH",
    name: "publish",
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

function TestimonialPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const suhbeader = useSubheader();
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const [paramTable, setParamTable] = useState("");

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: "/administrator/testimonial",
        title: intl.formatMessage({ id: "LABEL.TESTIMONIAL" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.TESTIMONIAL" }));
  }, []);

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    setParamTable(params);
    getListTestimonialPagination(params)
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

  const callApiPublish = (id) => {
    publishTestimonial(id)
      .then((result) => {
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
        requestApi(paramTable);
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const callApiUnPublish = (id) => {
    unPublishTestimonial(id)
      .then((result) => {
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
        requestApi(paramTable);
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  const callApiDeletePublish = (id) => {
    deleteTestimonial(id)
      .then((result) => {
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
        requestApi(paramTable);
      })
      .catch((err) => {
        setErr(true);
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
                  <TableCell>{item?.pasien.nama}</TableCell>
                  <TableCell>
                    {[...Array(item?.star || 0)].map((itm, idx) => {
                      return (
                        <i
                          className="fas fa-star"
                          style={{ color: "#FFD700", fontSize: "large" }}
                          key={idx.toString()}
                        ></i>
                      );
                    })}
                    {[...Array(5 - (item?.star || 0))].map((itm, idx) => {
                      return (
                        <i
                          className="far fa-star"
                          style={{ color: "#FFD700", fontSize: "large" }}
                          key={idx.toString()}
                        ></i>
                      );
                    })}
                  </TableCell>
                  <TableCell>{item?.testimoni}</TableCell>
                  <TableCell>
                    {window
                      .moment(new Date(item?.updated_at))
                      .format("DD MMM YYYY HH:mm:ss")}
                  </TableCell>
                  <TableCell>
                    {item?.publish === 1 ? (
                      <i
                        className="fas fa-toggle-on font-size-h2 text-primary cursor-pointer"
                        onClick={() => {
                          callApiUnPublish(item.id);
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-toggle-off font-size-h2 text-danger cursor-pointer"
                        onClick={() => {
                          callApiPublish(item.id);
                        }}
                      ></i>
                    )}
                  </TableCell>
                  <TableCell>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        callApiDeletePublish(item.id);
                      }}
                    >
                      <FormattedMessage id="LABEL.DELETE" />
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

export default injectIntl(connect(null, null)(TestimonialPage));
