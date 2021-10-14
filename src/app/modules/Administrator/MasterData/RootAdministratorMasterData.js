import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListPoliPage from "./ListPoliPage";
import ListServicePage from "./ListServicePage";
import DetailServicePage from "./DetailServicePage";
import ListMedKind from "./ListMedKind";
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
      <Route
        path="/administrator/master-data-page/sevice/:state"
        component={(props) => <DetailServicePage {...props} />}
        exact
      />
      <Route
        path="/administrator/master-data-page/sevice"
        component={(props) => <ListServicePage {...props} />}
        exact
      />
      <Route
        path="/administrator/master-data-page/medical-type"
        component={(props) => <ListMedKind {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootAdministratorMasterData));
