import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListPoliPage from "./ListPoliPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootAdministratorMasterData(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/administrator/master-data-page"
        to="/administrator/dashboard"
      />
      <Route
        path="/administrator/master-data-page/poli"
        component={(props) => <ListPoliPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootAdministratorMasterData));
