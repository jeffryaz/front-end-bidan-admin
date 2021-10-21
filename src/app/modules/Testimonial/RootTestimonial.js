import React from "react";
import { Route, Switch } from "react-router-dom";
import TestimonialPage from "./TestimonialPage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootTestimonial(props) {
  return (
    <Switch>
      <Route
        path="/registry/testimonial"
        component={(props) => <TestimonialPage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootTestimonial));
