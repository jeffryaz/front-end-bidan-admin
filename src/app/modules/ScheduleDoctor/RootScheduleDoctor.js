import React from "react";
import { Route, Switch } from "react-router-dom";
import ScheduleDoctorPage from "./ScheduleDoctorPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootScheduleDoctor(props) {
  return (
    <Switch>
      <Route
        path="/registry/regis-doctor"
        component={(props) => <ScheduleDoctorPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootScheduleDoctor));
