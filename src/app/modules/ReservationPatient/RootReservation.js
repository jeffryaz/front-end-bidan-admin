import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListReservationOnlinePage from "./ListReservationOnlinePage";
import ListReservationOfflinePage from "./ListReservationOfflinePage";
import ListReservationNotYetComePage from "./ListReservationNotYetComePage";
import RegisReservationPage from "./RegisReservationPage";
import ListReservationPage from "./ListReservationPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootReservation(props) {
  return (
    <Switch>
      <Redirect exact from="/registry/regis-page" to="/registry/dashboard" />
      <Route
        path="/registry/regis-page/list-online"
        component={(props) => <ListReservationOnlinePage {...props} />}
        exact
      />
      <Route
        path="/registry/regis-page/list-offline"
        component={(props) => <ListReservationOfflinePage {...props} />}
        exact
      />
      <Route
        path="/registry/regis-page/not-yet-come"
        component={(props) => <ListReservationNotYetComePage {...props} />}
        exact
      />
      <Route
        path="/registry/regis-page/reservation"
        component={(props) => <RegisReservationPage {...props} />}
        exact
      />
      <Route
        path="/registry/regis-page/list-all"
        component={(props) => <ListReservationPage {...props} />}
        exact={true}
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootReservation));
