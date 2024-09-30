"use client";

import { useEffect, useState } from "react";

const useScreenHook = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const getScreenSize = () => {
      return window.innerWidth;
    };
    const handleScreenSize = () => {
      return setScreenSize(getScreenSize());
    };
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  return screenSize;
};
export default useScreenHook;
