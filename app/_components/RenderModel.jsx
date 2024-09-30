"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className, position, intensity }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen relative", className)}
      shadows
      camera={{ fov: 10 }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>{children}</Suspense>

      <ambientLight intensity={0.2} />

      <directionalLight
        color={"#ffffff"}
        intensity={1}
        position={[10, 10, 5]}
      />

      <pointLight color={"#f75353"} intensity={intensity} position={position} />

      <pointLight
        color={"#ff6e19"}
        intensity={0.02}
        position={[0.1, -0.1, 0.2]}
      />
    </Canvas>
  );
};

export default RenderModel;
