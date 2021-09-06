import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { useSubheader } from "../../../_metronic/layout";
import { listMedicinePagination } from "./_redux/CrudHandlingDoctor";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { TableRow, TableCell, Checkbox } from "@material-ui/core";
import Tables from "../../components/tableCustomV1/table";
import { MODAL } from "../../../service/modalSession/ModalService";
import { useHistory } from "react-router-dom";
import * as auth from "../Auth/_redux/ActionAuth";
import { rupiah } from "../../components/currency";

const headerTable = [
  {
    title: "LABEL.CHECK",
    name: "check",
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
    title: "LABEL.DRUG_CODE",
    name: "barcode",
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
    title: "LABEL.MEDICINE_NAME",
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
  // {
  //   title: "LABEL.UNIT",
  //   name: "kind",
  //   order: {
  //     active: true,
  //     status: false,
  //   },
  //   filter: {
  //     active: true,
  //     type: "text",
  //   },
  // },
  {
    title: "LABEL.UNIT_TYPE",
    name: "unit",
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
    title: "LABEL.UNIT_PRICE",
    name: "harga",
    order: {
      active: true,
      status: false,
    },
    filter: {
      active: true,
      type: "number",
    },
  },
];

function ListDrugPage(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const patient_id = props.match.params.id;
  const antrian_id = props.match.params.antrian_id;
  const medicalRecordId = props.match.params.medicalRecordId;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    data: [],
    count: 0,
  });
  const [err, setErr] = useState(false);
  const [dataChecked, setDataChecked] = useState([]);
  const history = useHistory();
  let medicinePatient = useSelector(
    (state) => state.auth.medicinePatient,
    shallowEqual
  );

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/doctor/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/doctor/handling-page/process/${patient_id}/${antrian_id}/${medicalRecordId}`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
      },
      {
        pathname: `/doctor/handling-page/process/${patient_id}/${antrian_id}/${medicalRecordId}/medicine-list`,
        title: intl.formatMessage({ id: "LABEL.MEDICINE_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICINE_LIST" }));
  }, []);

  const requestApi = (params) => {
    setLoading(true);
    setData({
      ...data,
      count: 0,
      data: [],
    });
    setErr(false);
    listMedicinePagination(params)
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
  useEffect(() => {
    if (medicinePatient) setDataChecked(medicinePatient);
  }, []);

  return (
    <React.Fragment>
      <Card>
        <CardHeader title="">
          <CardHeaderToolbar>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => {
                history.push(
                  `/doctor/handling-page/process/${patient_id}/${antrian_id}/${medicalRecordId}`
                );
              }}
            >
              <i className="fas fa-times"></i>
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={() => {
                props.setMedicinePatient(dataChecked);
                history.push(
                  `/doctor/handling-page/process/${patient_id}/${antrian_id}/${medicalRecordId}`
                );
              }}
            >
              <i className="fas fa-save"></i>
              <FormattedMessage id="LABEL.SAVE" />
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
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={false}
                      checked={
                        dataChecked.findIndex(
                          (value) => value.id === item.id
                        ) !== -1
                      }
                      onChange={(e) => {
                        var data = Object.assign([], dataChecked);
                        if (e.target.checked) {
                          data.push(item);
                        } else {
                          var idx = data.findIndex(
                            (value) => value.id === item.id
                          );
                          data.splice(idx, 1);
                        }
                        setDataChecked(data);
                      }}
                    />
                  </TableCell>
                  <TableCell>{item?.barcode}</TableCell>
                  <TableCell>{item?.nama}</TableCell>
                  {/* <TableCell>{item?.kind}</TableCell> */}
                  <TableCell>{item?.unit}</TableCell>
                  <TableCell>{rupiah(item?.harga || 0)}</TableCell>
                </TableRow>
              );
            })}
          </Tables>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, auth.actions)(ListDrugPage));
