"use client";
import { BtnList } from "@/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenHook from "../hooks/useScreenHook";
import ResponsiveComponent from "../ResponsiveComponent";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenHook();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="fixed flex justify-center items-center w-full h-screen z-20">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div className="flex justify-center items-center  w-max h-screen animate-spin-slow hover:pause group">
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(15vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;
                return <NavButton key={index} x={x} y={y} {...btn} />;
              })}
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-center items-start w-full h-screen px-5 gap-1">
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={index} x={0} y={0} {...btn} />;
                })}
              </div>
              <div className="flex flex-col justify-center items-end w-full h-screen px-5 gap-1">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return <NavButton key={index} x={0} y={0} {...btn} />;
                  }
                )}
              </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
