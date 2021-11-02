import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../../_metronic/layout";
import * as auth from "../_redux/ActionAuth";
import * as client from "../../../../redux/_reduxGlobal/ActionGlobal";

class Logout extends Component {
  componentDidMount() {
    this.props.resetClient();
    this.props.logout();
  }

  render() {
    const { hasAuthToken } = this.props;
    return hasAuthToken ? (
      <LayoutSplashScreen />
    ) : (
      <Redirect to="/auth/login" />
    );
  }
}

export default connect(
  ({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
  { ...auth.actions, ...client.actions }
)(Logout);
