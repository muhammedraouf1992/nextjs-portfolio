"use client";

import React from "react";
import useScreenHook from "./hooks/useScreenHook";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenHook();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
