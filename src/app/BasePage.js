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
// import { DashboardPage } from "./pages/DashboardPage";
import { DashboardPageDoctor } from "./pages/DashboardPageDoctor";
import { DashboardPageRegistry } from "./pages/DashboardPageRegistry";
import { DashboardPagePharmacist } from "./pages/DashboardPagePharmacist";
import { DashboardPageTeller } from "./pages/DashboardPageTeller";
import { DashboardPageAdministrator } from "./pages/DashboardPageAdministrator";

// const GoogleMaterialPage = lazy(() =>
//   import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//   import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
// );
// const ECommercePage = lazy(() =>
//   import("./modules/ECommerce/pages/eCommercePage")
// );
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);
const RootReservation = lazy(() =>
  import("./modules/ReservationPatient/RootReservation")
);
const RootPatient = lazy(() => import("./modules/Patient/RootPatient"));
const RootPatientByDoctor = lazy(() =>
  import("./modules/Patient/RootPatientByDoctor")
);
const ListSpecialCasePage = lazy(() =>
  import("./modules/HandlingDoctor/ListSpecialCasePage")
);
const RootScreening = lazy(() => import("./modules/Screening/RootScreening"));
const RootHandlingDoctor = lazy(() =>
  import("./modules/HandlingDoctor/RootHandlingDoctor")
);
const RootHandlingPharmacist = lazy(() =>
  import("./modules/HandlingPharmacist/RootHandlingPharmacist")
);
const RootMedicinePharmacist = lazy(() =>
  import("./modules/HandlingPharmacist/RootMedicinePharmacist")
);
const RootStockName = lazy(() =>
  import("./modules/HandlingPharmacist/RootStockName")
);
const RootDrugPurchase = lazy(() =>
  import("./modules/HandlingPharmacist/RootDrugPurchase")
);
const RootHandlingTeller = lazy(() =>
  import("./modules/HandlingTeller/RootHandlingTeller")
);
const RootTellerReport = lazy(() =>
  import("./modules/HandlingTeller/Report/RootTellerReport")
);
const RootAdministratorDoctor = lazy(() =>
  import("./modules/Administrator/Doctor/RootAdministratorDoctor")
);
const RootAdministratorStaff = lazy(() =>
  import("./modules/Administrator/Staff/RootAdministratorStaff")
);
const RootAdministratorArticle = lazy(() =>
  import("./modules/Administrator/Article/RootAdministratorArticle")
);
const RootAdministratorMasterData = lazy(() =>
  import("./modules/Administrator/MasterData/RootAdministratorMasterData")
);
const RootAdministratorReport = lazy(() =>
  import("./modules/Administrator/Report/RootAdministratorReport")
);
const RootAdministratorCheckingHandOver = lazy(() =>
  import(
    "./modules/Administrator/CheckingHandOver/RootAdministratorCheckingHandOver"
  )
);
const RootScreeningSetting = lazy(() =>
  import("./modules/Administrator/ScreeningSetting/RootScreeningSetting")
);
const RootTestimonial = lazy(() =>
  import("./modules/Testimonial/RootTestimonial")
);
const RootScheduleDoctor = lazy(() =>
  import("./modules/ScheduleDoctor/RootScheduleDoctor")
);
const RootAdministratorTestimonial = lazy(() =>
  import("./modules/Administrator/Testimonial/RootAdministratorTestimonial")
);
const RootAdministratorMedicinePharmacist = lazy(() =>
  import("./modules/Administrator/Obat/RootAdministratorMedicinePharmacist")
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
        <ContentRoute
          path={`/pharmacist/dashboard`}
          component={DashboardPagePharmacist}
        />
        <ContentRoute
          path={`/teller/dashboard`}
          component={DashboardPageTeller}
        />
        <ContentRoute
          path={`/administrator/dashboard`}
          component={DashboardPageAdministrator}
        />

        <ContentRoute
          path={`/${position}/user-profile`}
          component={UserProfilepage}
        />
        {/* <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} /> */}
        {/* Patient */}
        <Route path="/registry/regis-page" component={RootReservation} />
        <Route path="/registry/patient" component={RootPatient} />
        <Route path="/registry/screening" component={RootScreening} />
        <Route path="/registry/testimonial" component={RootTestimonial} />
        <Route path="/registry/regis-doctor" component={RootScheduleDoctor} />

        {/* Doctor */}
        <Route path="/doctor/handling-page" component={RootHandlingDoctor} />
        <Route path="/doctor/patient" component={RootPatientByDoctor} />
        <Route path="/doctor/special-case" component={ListSpecialCasePage} />

        {/* Pharmacist */}
        <Route
          path="/pharmacist/handling-page"
          component={RootHandlingPharmacist}
        />
        <Route
          path="/pharmacist/medicine-page"
          component={RootMedicinePharmacist}
        />
        <Route path="/pharmacist/stock-name-page" component={RootStockName} />
        <Route path="/pharmacist/drug-purchase" component={RootDrugPurchase} />

        {/* Teller */}
        <Route path="/teller/handling-page" component={RootHandlingTeller} />
        <Route path="/teller/report-page" component={RootTellerReport} />

        {/* Administrator */}
        <Route
          path="/administrator/doctor-page"
          component={RootAdministratorDoctor}
        />
        <Route
          path="/administrator/staff-page"
          component={RootAdministratorStaff}
        />
        <Route
          path="/administrator/article-page"
          component={RootAdministratorArticle}
        />
        <Route
          path="/administrator/master-data-page"
          component={RootAdministratorMasterData}
        />
        <Route
          path="/administrator/report-page"
          component={RootAdministratorReport}
        />
        <Route
          path="/administrator/handling-page"
          component={RootAdministratorCheckingHandOver}
        />
        <Route
          path="/administrator/screening-setting"
          component={RootScreeningSetting}
        />
        <Route
          path="/administrator/testimonial"
          component={RootAdministratorTestimonial}
        />
        <Route
          path="/administrator/medicine-page"
          component={RootAdministratorMedicinePharmacist}
        />
        <Redirect to="/error" />
      </Switch>
    </Suspense>
  );
}
