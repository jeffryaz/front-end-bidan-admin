import React from "react";
import { Header1 } from "./pageRegistry/Header_1";
import Header2 from "./pageRegistry/Header_2";
import Body1 from "./pageRegistry/Body_1";

export function DashboardPageRegistry(props) {
  return (
    <React.Fragment>
      {/* <Header1 /> */}
      <Header2 />
      <Body1 />
    </React.Fragment>
  );
}
