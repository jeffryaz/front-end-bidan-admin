import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../../_metronic/layout";
import {
  listArticlePagination,
  deleteArticleById,
} from "../_redux/CrudAdministrator";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
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
  TableRow,
  TableCell,
} from "@material-ui/core";

const headerTable = [
  {
    title: "LABEL.TITLE",
    name: "subject",
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
    title: "LABEL.CREATE_DATE",
    name: "created_at",
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

function ListArticlePage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [dataCancel, setDataCancel] = useState({});
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const history = useHistory();
  const [dialogCancel, setDialogCancel] = useState(false);
  const [paramTable, setParamTable] = useState("");

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/administrator/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/administrator/article-page/list`,
        title: intl.formatMessage({ id: "LABEL.ARTICLE_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.ARTICLE_LIST" }));
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
    listArticlePagination(params)
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
    if (type === "open") {
      props.history.push(`/administrator/article-page/write/${data.id}`);
    } else {
      setDataCancel(data);
      setDialogCancel(true);
    }
  };

  const callApiDeteleArtivleById = () => {
    setLoadingDelete(true);
    deleteArticleById(dataCancel.id)
      .then((result) => {
        setDialogCancel(false);
        setLoadingDelete(false);
        requestApi(paramTable);
        MODAL.showSnackbar(
          intl.formatMessage({ id: "LABEL.UPDATE_DATA_SUCCESS" }),
          "success"
        );
      })
      .catch((err) => {
        setLoadingDelete(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };
  return (
    <React.Fragment>
      <Dialog
        open={dialogCancel}
        maxWidth="sm"
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <FormattedMessage id="LABEL.DELETE" />
        </DialogTitle>
        <DialogContent>
          Apakah Anda yakin ingin menghapus Artikel berjudul{" "}
          <b>{dataCancel.subject}</b>?
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              setDialogCancel(false);
            }}
            disabled={loadingDelete}
          >
            <FormattedMessage id="LABEL.CANCEL" />
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={loadingDelete}
            onClick={() => {
              callApiDeteleArtivleById();
            }}
          >
            {loadingDelete ? (
              <FormattedMessage id="LABEL.WAITING" />
            ) : (
              <FormattedMessage id="LABEL.SAVE" />
            )}
            {loadingDelete ? (
              <i className="fas fa-spinner fa-pulse px-2"></i>
            ) : (
              <i className="fas fa-save ml-2"></i>
            )}
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
                history.push(`/administrator/article-page/write/new`);
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
                  <TableCell>{item?.subject}</TableCell>
                  <TableCell>
                    {window
                      .moment(new Date(item?.created_at))
                      .format("DD MMM YYYY")}
                  </TableCell>
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

export default injectIntl(connect(null, auth.actions)(ListArticlePage));
