import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DetailTeller from "./DetailTeller";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootHandlingTeller(props) {
  return (
    <Switch>
      <Redirect exact from="/teller/handling-page" to="/teller/dashboard" />
      <Route
        path="/teller/handling-page/process/:resep_id/:medical_id"
        component={(props) => <DetailTeller {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootHandlingTeller));
