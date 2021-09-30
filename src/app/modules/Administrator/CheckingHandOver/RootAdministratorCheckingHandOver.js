import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CheckingPage from "./CheckingPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootAdministratorCheckingHandOver(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/administrator/handling-page"
        to="/administrator/dashboard"
      />
      <Route
        path="/administrator/handling-page/need-closing"
        component={(props) => <CheckingPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(
  connect(null, null)(RootAdministratorCheckingHandOver)
);
