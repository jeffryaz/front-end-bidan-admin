import React, {
  useEffect,
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
import { listMedicalRecord } from "../_redux/CrudPatient";
import ButtonAction from "../../../components/buttonAction/ButtonAction";
import { MODAL } from "../../../../service/modalSession/ModalService";

const headerTable = [
  {
    title: "LABEL.DATE_OF_VISIT",
  },
  {
    title: "LABEL.REGISTRATION_NO",
  },
  {
    title: "LABEL.POLI",
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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const id = props.match.params.id;

  const callApiListMedical = () => {
    setLoading(true);
    listMedicalRecord(id)
      .then((result) => {
        setLoading(false);
        setData(result.data.data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListMedical, []);

  const handleAction = (type, data) => {
    props.history.push(`/registry/patient/list/${id}/${data.id}`);
  };
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <TableOnly
            dataHeader={headerTable}
            loading={false}
            // err={err}
            hecto={10}
          >
            {data.map((item, index) => {
              return (
                <TableRow key={index.toString()}>
                  <TableCell>
                    {item.created_at
                      ? window
                          .moment(new Date(item.created_at))
                          .format("DD MMM YYYY")
                      : ""}
                  </TableCell>
                  <TableCell>{item.code_reg}</TableCell>
                  <TableCell>{item.poli}</TableCell>
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
