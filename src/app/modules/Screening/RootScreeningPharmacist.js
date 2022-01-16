import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListScreeningPage from "./ListScreeningPage";
import ScreeningPatientPage from "./ScreeningPatientPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootScreeningPharmacist(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/pharmacist/screening"
        to="/pharmacist/screening/list"
      />
      <Route
        path="/pharmacist/screening/list"
        component={(props) => <ListScreeningPage {...props} />}
        exact
      />
      <Route
        path="/pharmacist/screening/patient/:patient_id/:poli/:reservasi_id"
        component={(props) => <ScreeningPatientPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootScreeningPharmacist));
