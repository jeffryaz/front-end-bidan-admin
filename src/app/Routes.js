/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { lazy, useEffect, useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import {
  url,
  options,
  subscription,
  subscriptionPatient,
} from "../redux/MqttOptions";
import mqtt from "mqtt";
import { actions } from "../redux/_reduxGlobal/ActionGlobal";
const QueuePage = lazy(() => import("./modules/ScreenQueue/QueuePage"));

export function Routes() {
  const dispatch = useDispatch();
  const [client, setClient] = useState(null);
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );
  useEffect(() => {
    setClient(mqtt.connect(url, options));
  }, []);

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        console.log("Connected");
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        console.log("Reconnecting");
      });
      client.on("message", (topic, message) => {
        // const payload = { topic, message: message.toString() };
      });
      dispatch(actions.setClient(client));
    }
  }, [client]);

  const mqttSub = () => {
    if (client) {
      const { topic, qos } = subscription;
      const { topicCallPatient, qosCallPatient } = subscriptionPatient;
      client.subscribe(topic, { qos }, (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
      });
      client.subscribe(topicCallPatient, { qosCallPatient }, (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
      });
    }
  };

  useEffect(mqttSub, [client]);

  useEffect(() => {
    window.responsiveVoice.setDefaultVoice("Indonesian Male");
    window.responsiveVoice.setDefaultRate(0.8);
    window.responsiveVoice.setVolume(1);
    window.responsiveVoice.enableWindowClickHook();
  }, []);

  return (
    <Switch>
      <Route path="/screen-queue" component={QueuePage} />
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  );
}
