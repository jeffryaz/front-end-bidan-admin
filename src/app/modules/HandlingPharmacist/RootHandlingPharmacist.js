import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DetailPharmacist from "./DetailPharmacist";
import ListEmptyItemPage from "./ListEmptyItemPage";
import ListStockIsRunningOutPage from "./ListStockIsRunningOutPage";
import ListPreOrderPage from "./ListPreOrderPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootHandlingPharmacist(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/pharmacist/handling-page"
        to="/pharmacist/dashboard"
      />
      <Route
        path="/pharmacist/handling-page/process/:medical_id/:resep_id"
        component={(props) => <DetailPharmacist {...props} />}
        exact
      />
      <Route
        path="/pharmacist/handling-page/list-empty"
        component={(props) => <ListEmptyItemPage {...props} />}
        exact
      />
      <Route
        path="/pharmacist/handling-page/list-stock"
        component={(props) => <ListStockIsRunningOutPage {...props} />}
        exact
      />
      <Route
        path="/pharmacist/handling-page/list-preorder"
        component={(props) => <ListPreOrderPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootHandlingPharmacist));
