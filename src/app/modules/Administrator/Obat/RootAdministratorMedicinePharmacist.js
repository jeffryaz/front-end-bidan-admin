import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListProduct from "../../HandlingPharmacist/ListProduct";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootAdministratorMedicinePharmacist(props) {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/administrator/medicine-page"
        to="/administrator/dashboard"
      />
      <Route
        path="/administrator/medicine-page/list"
        component={(props) => <ListProduct {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(
  connect(null, null)(RootAdministratorMedicinePharmacist)
);
