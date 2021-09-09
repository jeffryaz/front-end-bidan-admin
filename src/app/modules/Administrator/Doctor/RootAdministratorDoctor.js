import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListDoctorPage from "./ListDoctorPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootAdministratorDoctor(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/administrator/doctor-page"
        to="/administrator/dashboard"
      />
      <Route
        path="/administrator/doctor-page/list"
        component={(props) => <ListDoctorPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootAdministratorDoctor));
