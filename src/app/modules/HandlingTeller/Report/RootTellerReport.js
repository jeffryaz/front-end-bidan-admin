import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListDailyInComePage from "./ListDailyInComePage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootTellerReport(props) {
  return (
    <Switch>
      <Redirect exact from="/teller/report-page" to="/teller/dashboard" />
      <Route
        path="/teller/report-page/daily-income"
        component={(props) => <ListDailyInComePage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootTellerReport));
