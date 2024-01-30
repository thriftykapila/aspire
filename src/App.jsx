import React from "react";

import { MobileView } from "./MobileView";
import { DesktopView } from "./DesktopView";

const App = () => {
  const windowWidth = window.innerWidth;
  const mobileBreakpoint = 768;
  const isMobile = windowWidth < mobileBreakpoint;

  return <div>{isMobile ? <MobileView /> : <DesktopView />}</div>;
};

export default App;
