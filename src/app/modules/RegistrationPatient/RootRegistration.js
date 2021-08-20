import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { useSubheader } from "../../../../_metronic/layout";
import ListRegistrationOnlinePage from "./ListRegistrationOnlinePage";
import ListRegistrationOfflinePage from "./ListRegistrationOfflinePage";
import ListRegistrationCheckInPage from "./ListRegistrationCheckInPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootRegistration(props) {
  // const suhbeader = useSubheader();
  // const { intl } = props;
  // suhbeader.setTitle(intl.formatMessage({
  //   id: "MENU.DELIVERY_MONITORING.LIST_CONTRACT_PO",
  // }));
  return (
    <Switch>
      <Redirect exact from="/registry/regis-page" to="/registry/dashboard" />
      <Route
        path="/registry/regis-page/list-online"
        component={(props) => <ListRegistrationOnlinePage {...props} />}
        exact
      />
      <Route
        path="/registry/regis-page/list-offline"
        component={(props) => <ListRegistrationOfflinePage {...props} />}
        exact
      />
      <Route
        path="/registry/regis-page/list-check-in"
        component={(props) => <ListRegistrationCheckInPage {...props} />}
        exact
      />
      {/* <Route
        path="/registry/regis-page/contract/:contract"
        component={(props) => <ListTermContract {...props} />}
        exact={true}
      />
      <Route
        path="/registry/regis-page/contract"
        component={DashboardListContract}
      />
      <Route path="/registry/regis-page/spt/:id" component={ItemSpt} />
      <Route path="/registry/regis-page/spt" component={DashboardListSpt} />
      <Route
        path="/registry/regis-page/mismatch"
        component={DashboardListMismatch}
      />
      <Route path="/registry/regis-page/bkb" component={DashboardListBkb} />
      <Route path="/registry/regis-page/dashboard" component={Dashboard} />
      <Route
        path="/registry/regis-page/invoice_document"
        component={DashboardListInvoice}
      /> */}
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootRegistration));
