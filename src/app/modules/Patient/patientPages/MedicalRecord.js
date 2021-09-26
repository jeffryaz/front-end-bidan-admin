import React, {
  useEffect,
  useState,
  // useEffect,
  // useCallback
} from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
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
    name: "created_at",
    filter: true,
  },
  {
    title: "LABEL.POLI",
    name: "poli",
    filter: true,
  },
  {
    title: "LABEL.TABLE_HEADER.ACTION",
    name: "action",
    filter: false,
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
  const [dataSecond, setDataSecond] = useState([]);
  const [err, setErr] = useState(false);
  const id = props.match.params.id;
  const antrian_id = props.match.params.antrian_id;
  const medicalRecordId = props.match.params.medicalRecordId;
  let position = useSelector((state) => state.auth.user.position, shallowEqual);

  const callApiListMedical = () => {
    setLoading(true);
    listMedicalRecord(id)
      .then((result) => {
        setLoading(false);
        var data = result.data.data;
        setData(data);
        setDataSecond(data);
      })
      .catch((err) => {
        setLoading(false);
        MODAL.showSnackbar(intl.formatMessage({ id: "REQ.REQUEST_FAILED" }));
      });
  };

  useEffect(callApiListMedical, []);

  const handleAction = (type, data) => {
    if (window.location.pathname.split("/")[2] === "handling-page") {
      props.history.push(
        `/${position}/handling-page/process/${id}/${antrian_id}/${medicalRecordId}/list/${data.id}`
      );
    } else {
      props.history.push(`/${position}/patient/list/${id}/${data.id}`);
    }
  };
  const handleFilter = (data) => {
    setData(data);
  };
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <TableOnly
            dataHeader={headerTable}
            dataSecond={dataSecond}
            handleFilter={handleFilter}
            loading={false}
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
