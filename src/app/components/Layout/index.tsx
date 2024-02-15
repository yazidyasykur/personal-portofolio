"use client";

import React, { ReactNode } from "react";
import RainScene from "../Effects/Rain";

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="container mx-auto max-w-5xl overflow-hidden">
      {children}
    </div>
  );
};

export default MainLayout;
