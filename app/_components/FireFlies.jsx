"use client";
import React, { useEffect, useState } from "react";

const createFire = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 10 + 10}s`,
});

const FireFlies = () => {
  const [FireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireFlies = () => {
      const fireFly = createFire();
      setFireFlies((prevState) => [...prevState.slice(-100), fireFly]);
    };
    const interval = setInterval(addFireFlies, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {FireFlies.map((fire) => (
        <div
          key={fire.id}
          className="bg-firefly-radial absolute w-10 h-10 opacity-70"
          style={{
            top: fire.top,
            left: fire.left,
            animation: `move ${fire.animationDuration} infinite alternate`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FireFlies;
