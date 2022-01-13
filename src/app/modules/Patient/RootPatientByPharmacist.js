import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListPatientPage from "./ListPatientPage";
import PatientPage from "./PatientPage";
import RegistrationPatient from "./RegistrationPatient";
import DetailMedicalRecord from "./patientPages/DetailMedicalRecord";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootPatientByPharmacist(props) {
  return (
    <Switch>
      <Redirect exact from="/pharmacist/patient" to="/registry/dashboard" />
      <Route
        path="/pharmacist/patient/list/:id/:medicalRecordId"
        component={(props) => <DetailMedicalRecord {...props} />}
        exact
      />
      <Route
        path="/pharmacist/patient/list/:id"
        component={(props) => <PatientPage {...props} />}
        exact
      />
      <Route
        path="/pharmacist/patient/list"
        component={(props) => <ListPatientPage {...props} />}
        exact
      />
      <Route
        path="/pharmacist/patient/registration"
        component={(props) => <RegistrationPatient {...props} />}
        exact
      />
      {/* <Route
        path="/pharmacist/regis-page/contract/:contract"
        component={(props) => <ListTermContract {...props} />}
        exact={true}
      />
      <Route
        path="/pharmacist/regis-page/contract"
        component={DashboardListContract}
      />
      <Route path="/pharmacist/regis-page/spt/:id" component={ItemSpt} />
      <Route path="/pharmacist/regis-page/spt" component={DashboardListSpt} />
      <Route
        path="/pharmacist/regis-page/mismatch"
        component={DashboardListMismatch}
      />
      <Route path="/pharmacist/regis-page/bkb" component={DashboardListBkb} />
      <Route path="/pharmacist/regis-page/dashboard" component={Dashboard} />
      <Route
        path="/pharmacist/regis-page/invoice_document"
        component={DashboardListInvoice}
      /> */}
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootPatientByPharmacist));
