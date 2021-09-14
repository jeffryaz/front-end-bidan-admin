import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListArticlePage from "./ListArticlePage";
import WriteArticlePage from "./WriteArticlePage";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

function RootAdministratorArticle(props) {
  return (
    <Switch>
      <Redirect
        exact
        from="/administrator/article-page"
        to="/administrator/dashboard"
      />
      <Route
        path="/administrator/article-page/list"
        component={(props) => <ListArticlePage {...props} />}
        exact
      />
      <Route
        path="/administrator/article-page/write/:state"
        component={(props) => <WriteArticlePage {...props} />}
        exact
      />
    </Switch>
  );
}
export default injectIntl(connect(null, null)(RootAdministratorArticle));
