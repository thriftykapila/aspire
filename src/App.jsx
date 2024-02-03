import React, { useLayoutEffect, useState } from "react";

import { MobileView } from "./MobileView";
import { DesktopView } from "./DesktopView";

const App = () => {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width] = useWindowSize();

  const windowWidth = window.innerWidth;
  const mobileBreakpoint = 768;
  const isMobile = windowWidth < mobileBreakpoint || width < mobileBreakpoint;
  return <div> {isMobile ? <MobileView /> : <DesktopView />}</div>;
};

export default App;
