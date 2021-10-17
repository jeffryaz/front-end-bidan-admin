import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListStaffPage from "./ListStaffPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootAdministratorStaff(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/administrator/staff-page"
        to="/administrator/dashboard"
      />
      <Route
        path="/administrator/staff-page/list"
        component={(props) => <ListStaffPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootAdministratorStaff));
