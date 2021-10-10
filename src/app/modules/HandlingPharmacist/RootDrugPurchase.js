import React from "react";
import {
  Route,
  Switch,
  // Redirect
} from "react-router-dom";
import DrugPurchasePage from "./DrugPurchasePage";
import ListDrugPage from "./ListDrugPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootDrugPurchase(props) {
  return (
    <Switch>
      {/* <Redirect
        exact={true}
        from="/pharmacist/drug-purchase"
        to="/pharmacist/dashboard"
      /> */}
      <Route
        path="/pharmacist/drug-purchase/medicine-list"
        component={(props) => <ListDrugPage {...props} />}
        exact
      />
      <Route
        path="/pharmacist/drug-purchase"
        component={(props) => <DrugPurchasePage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootDrugPurchase));
