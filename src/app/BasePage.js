import React, { Suspense, lazy, useEffect } from "react";
import {
  Redirect,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
// import { BuilderPage } from "./pages/BuilderPage";
// import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DashboardPageDoctor } from "./pages/DashboardPageDoctor";
import { DashboardPageRegistry } from "./pages/DashboardPageRegistry";

// const GoogleMaterialPage = lazy(() =>
//   import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//   import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
// );
// const ECommercePage = lazy(() =>
//   import("./modules/ECommerce/pages/eCommercePage")
// );
// const UserProfilepage = lazy(() =>
//   import("./modules/UserProfile/UserProfilePage")
// );
const RootReservation = lazy(() =>
  import("./modules/ReservationPatient/RootReservation")
);
const RootPatient = lazy(() => import("./modules/Patient/RootPatient"));
const RootPatientByDoctor = lazy(() =>
  import("./modules/Patient/RootPatientByDoctor")
);
const RootScreening = lazy(() => import("./modules/Screening/RootScreening"));
const RootHandlingDoctor = lazy(() =>
  import("./modules/HandlingDoctor/RootHandlingDoctor")
);

export default function BasePage() {
  let position = useSelector((state) => state.auth.user.position, shallowEqual);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (window.location.pathname.split("/")[1] !== position) {
      history.push("/");
    }
  }, [location]);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to={`/${position}/dashboard`} />
        }
        <ContentRoute
          path={`/registry/dashboard`}
          component={DashboardPageRegistry}
        />
        <ContentRoute
          path={`/doctor/dashboard`}
          component={DashboardPageDoctor}
        />
        {/* <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} /> */}
        {/* Patient */}
        <Route path="/registry/regis-page" component={RootReservation} />
        <Route path="/registry/patient" component={RootPatient} />
        <Route path="/doctor/patient" component={RootPatientByDoctor} />
        <Route path="/registry/screening" component={RootScreening} />

        {/* Doctor */}
        <Route path="/doctor/handling-page" component={RootHandlingDoctor} />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
