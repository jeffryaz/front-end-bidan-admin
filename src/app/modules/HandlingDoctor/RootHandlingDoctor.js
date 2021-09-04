import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DetailMedicalRecord from "./DetailMedicalRecord";
import DetailMedicalRecords from "../Patient/patientPages/DetailMedicalRecord";
import ListMedicalRecord from "./ListMedicalRecord";
import ListReservationPage from "./ListReservationPage";
import ListDonePatientPage from "./ListDonePatientPage";
import ListDrugPage from "./ListDrugPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootHandlingDoctor(props) {
  return (
    <Switch>
      <Redirect exact from="/doctor/handling-page" to="/doctor/dashboard" />
      <Route
        path="/doctor/handling-page/process/:id/:antrian_id/:medicalRecordId/list/:medicalRecordIdPass"
        component={(props) => <DetailMedicalRecords {...props} />}
        exact
      />
      <Route
        path="/doctor/handling-page/process/:id/:antrian_id/:medicalRecordId/list"
        component={(props) => <ListMedicalRecord {...props} />}
        exact
      />
      <Route
        path="/doctor/handling-page/process/:id/:antrian_id/:medicalRecordId/medicine-list"
        component={(props) => <ListDrugPage {...props} />}
        exact
      />
      <Route
        path="/doctor/handling-page/process/:id/:antrian_id/:medicalRecordId"
        component={(props) => <DetailMedicalRecord {...props} />}
        exact
      />
      <Route
        path="/doctor/handling-page/list-reservation"
        component={(props) => <ListReservationPage {...props} />}
        exact
      />
      <Route
        path="/doctor/handling-page/done"
        component={(props) => <ListDonePatientPage {...props} />}
        exact
      />
      {/* <Route
        path="/registry/regis-page/contract/:contract"
        component={(props) => <ListTermContract {...props} />}
        exact={true}
      />
      <Route
        path="/registry/regis-page/contract"
        component={DashboardListContract}
      />
      <Route path="/registry/regis-page/spt/:id" component={ItemSpt} />
      <Route path="/registry/regis-page/spt" component={DashboardListSpt} />
      <Route
        path="/registry/regis-page/mismatch"
        component={DashboardListMismatch}
      />
      <Route path="/registry/regis-page/bkb" component={DashboardListBkb} />
      <Route path="/registry/regis-page/dashboard" component={Dashboard} />
      <Route
        path="/registry/regis-page/invoice_document"
        component={DashboardListInvoice}
      /> */}
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootHandlingDoctor));
