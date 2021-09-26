import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListStockName from "./ListStockName";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootStockName(props) {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/pharmacist/stock-name-page"
        to="/pharmacist/dashboard"
      />
      <Route
        path="/pharmacist/stock-name-page/list"
        component={(props) => <ListStockName {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootStockName));
