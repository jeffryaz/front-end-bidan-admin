import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListProduct from "./ListProduct";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootMedicinePharmacist(props) {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/pharmacist/medicine-page"
        to="/pharmacist/dashboard"
      />
      <Route
        path="/pharmacist/medicine-page/list"
        component={(props) => <ListProduct {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootMedicinePharmacist));
