import React, {
  useState,
  // useEffect,
  // useCallback
} from "react";
import { connect } from "react-redux";
import {
  // FormattedMessage,
  injectIntl,
} from "react-intl";
import TableOnly from "../../../components/tableCustomV1/tableOnly";
import { Card, CardBody } from "../../../../_metronic/_partials/controls";
import { TableRow, TableCell } from "@material-ui/core";
// import { listPatientPagination } from "./_redux/CrudPatient";
import ButtonAction from "../../../components/buttonAction/ButtonAction";
import { MODAL } from "../../../../service/modalSession/ModalService";

const headerTable = [
  {
    title: "Tanggal Kunjungan",
  },
  {
    title: "Nomor Kunjungan",
  },
  {
    title: "Poli",
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
  },
];

const data_ops = [
  {
    label: "LABEL.DETAIL",
    icon: "fas fa-external-link-alt text-primary",
    type: "open",
  },
];

function MedicalRecord(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    // listPatientPagination(params)
    //   .then((result) => {
    //     setLoading(false);
    //     setData({
    //       ...data,
    //       count: result.data.data.count || 0,
    //       data: result.data.data.rows,
    //     });
    //   })
    //   .catch((err) => {
    //     setErr(true);
    //     setLoading(false);
    //     MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
    //   });
  };
  const handleAction = (type, data) => {
    props.history.push(`/registry/patient/list/${data.id}`);
  };
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <TableOnly
            dataHeader={headerTable}
            loading={loading}
            // err={err}
            hecto={10}
          >
            {data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
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

export default injectIntl(connect(null, null)(MedicalRecord));
