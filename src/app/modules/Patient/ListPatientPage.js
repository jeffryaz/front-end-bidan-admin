import React, {
  useState,
  useLayoutEffect,
  // useCallback
} from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import Tables from "../../components/tableCustomV1/table";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
import { useSubheader } from "../../../_metronic/layout";
import { listPatientPagination } from "./_redux/CrudPatient";
import ButtonAction from "../../components/buttonAction/ButtonAction";
import { MODAL } from "../../../service/modalSession/ModalService";

const headerTable = [
  {
    title: "LABEL.PATIENT_CODE",
    name: "kode_pasien",
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
      status: false,
    },
    filter: {
      active: true,
      type: "date",
    },
  },
  {
    title: "LABEL.ADDRESS",
    name: "kota",
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
    title: "LABEL.PHONE_NUMBER",
    name: "no_telp",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "phone",
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
      type: "email",
    },
  },
  {
    title: "LABEL.GENDER",
    name: "jk",
    order: {
      active: true,
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
    label: "LABEL.DETAIL",
    icon: "fas fa-external-link-alt text-primary",
    type: "open",
  },
];

function ListPatientPage(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const suhbeader = useSubheader();
  let position = useSelector((state) => state.auth.user.position, shallowEqual);

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/${position}/patient/list`,
        title: intl.formatMessage({ id: "LABEL.PATIENT_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.PATIENT_LIST" }));
  }, []);

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    listPatientPagination(params)
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
    props.history.push(`/${position}/patient/list/${data.id}`);
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
            hecto={13}
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
                  <TableCell>{item?.kota}</TableCell>
                  <TableCell>{item?.no_telp}</TableCell>
                  <TableCell>{item?.email}</TableCell>
                  <TableCell>
                    {item?.jk === "L" ? "Laki-Laki" : "Perempuan"}
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

export default injectIntl(connect(null, null)(ListPatientPage));
