import React, {
  useState,
  useLayoutEffect,
  // useCallback
} from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import Tables from "../../components/tableCustomV1/table";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import { listReservationPagination } from "./_redux/CrudReservationPatient";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import { MODAL } from "../../../service/modalSession/ModalService";

const headerTable = [
  {
    title: "LABEL.PATIENT_CODE",
    name: "kode_pasien",
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
    title: "LABEL.PATIENT_NAME",
    name: "nama",
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
    title: "LABEL.REGISTRATION_DATE",
    name: "created_at",
    order: {
      active: true,
      status: true,
      type: false,
    },
    filter: {
      active: true,
      type: "date",
    },
  },
  {
    title: "LABEL.DATE_OF_VISIT",
    name: "tgl_book",
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

const data_ops = [
  {
    label: "LABEL.VISIT_DETAILS",
    icon: "fas fa-external-link-alt text-primary",
    type: "open",
  },
];

function ListReservationPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/registry/regis-page/list`,
        title: intl.formatMessage({ id: "LABEL.RESERVATION_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.RESERVATION_LIST" }));
  }, []);

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    listReservationPagination(params)
      .then((result) => {
        setLoading(false);
        setData({
          ...data,
          count: result.data.data.count || 0,
          data: result.data.data.rows,
        });
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };
  const handleAction = (type, data) => {
    props.history.push(`/registry/patient/list/${data.id}`);
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
                  <TableCell>{item.kode_pasien}</TableCell>
                  <TableCell>{item?.nama}</TableCell>
                  <TableCell>
                    {window
                      .moment(new Date(item?.created_at))
                      .format("DD MMM YYYY")}
                  </TableCell>
                  <TableCell>
                    {window
                      .moment(new Date(item?.tgl_book))
                      .format("DD MMM YYYY")}
                  </TableCell>
                  <TableCell>{item?.poli}</TableCell>
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

export default injectIntl(connect(null, null)(ListReservationPage));
