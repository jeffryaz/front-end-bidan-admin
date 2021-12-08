import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListScreeningSetting from "./ListScreeningSetting";
import OpenScreeningSetting from "./OpenScreeningSetting";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootScreeningSetting(props) {
  return (
    <Switch>
      {/* <Redirect
        exact
        from="/administrator/doctor-page"
        to="/administrator/dashboard"
      /> */}
      <Route
        path="/administrator/screening-setting/:id"
        component={(props) => <OpenScreeningSetting {...props} />}
        exact
      />
      <Route
        path="/administrator/screening-setting"
        component={(props) => <ListScreeningSetting {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootScreeningSetting));
