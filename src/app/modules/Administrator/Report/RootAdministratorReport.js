import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListDailyInComePage from "./ListDailyInComePage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootAdministratorReport(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/administrator/report-page"
        to="/administrator/dashboard"
      />
      <Route
        path="/administrator/report-page/daily-income"
        component={(props) => <ListDailyInComePage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootAdministratorReport));
