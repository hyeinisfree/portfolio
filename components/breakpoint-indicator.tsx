// components/dev/breakpoint-indicator.tsx
"use client";

import React, { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
};

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("xs");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width >= breakpoints["3xl"]) {
        setCurrentBreakpoint("3xl");
      } else if (width >= breakpoints["2xl"]) {
        setCurrentBreakpoint("2xl");
      } else if (width >= breakpoints.xl) {
        setCurrentBreakpoint("xl");
      } else if (width >= breakpoints.lg) {
        setCurrentBreakpoint("lg");
      } else if (width >= breakpoints.md) {
        setCurrentBreakpoint("md");
      } else if (width >= breakpoints.sm) {
        setCurrentBreakpoint("sm");
      } else {
        setCurrentBreakpoint("xs");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { currentBreakpoint, windowWidth };
};

const DevBreakpointIndicator = () => {
  const { currentBreakpoint, windowWidth } = useBreakpoint();

  // 개발 환경에서만 표시
  if (process.env.NODE_ENV !== "development") return null;

  const getBreakpointColor = (bp: string) => {
    return (
      {
        xs: "bg-red-500",
        sm: "bg-orange-500",
        md: "bg-yellow-500",
        lg: "bg-green-500",
        xl: "bg-blue-500",
        "2xl": "bg-purple-500",
        "3xl": "bg-stone-500",
      }[bp] || "bg-gray-500"
    );
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${getBreakpointColor(
          currentBreakpoint
        )} text-white px-3 py-1 rounded-md shadow-lg font-mono text-sm font-bold`}
      >
        <div className="flex items-center space-x-2">
          <span>{currentBreakpoint.toLocaleLowerCase()}</span>
          <span className="text-xs opacity-90">{windowWidth}px</span>
        </div>
      </div>
    </div>
  );
};

export default DevBreakpointIndicator;
