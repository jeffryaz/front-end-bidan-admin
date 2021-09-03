import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { useSubheader } from "../../../_metronic/layout";
import MedicalRecord from "../Patient/patientPages/MedicalRecord";

function ListMedicalRecord(props) {
  const { intl } = props;
  const suhbeader = useSubheader();
  const patient_id = props.match.params.id;
  const antrian_id = props.match.params.antrian_id;

  useLayoutEffect(() => {
    suhbeader.setBreadcrumbs([
      {
        pathname: `/doctor/dashboard`,
        title: intl.formatMessage({ id: "MENU.DASHBOARD" }),
      },
      {
        pathname: `/doctor/handling-page/process/${patient_id}/${antrian_id}`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD" }),
      },
      {
        pathname: `/doctor/handling-page/process/${patient_id}/${antrian_id}/list`,
        title: intl.formatMessage({ id: "LABEL.MEDICAL_RECORD_LIST" }),
      },
    ]);
    suhbeader.setTitle(intl.formatMessage({ id: "LABEL.MEDICAL_RECORD_LIST" }));
  }, []);

  return (
    <React.Fragment>
      <MedicalRecord {...props} />
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(ListMedicalRecord));
