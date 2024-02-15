import React, { ReactNode } from "react";
import RainScene from "../Effects/Rain";

const RainBackground = ({
  children,
  showRainScene,
}: {
  children: ReactNode;
  showRainScene: boolean;
}) => {
  return (
    <div style={{ position: "relative" }}>
      {/* Render the RainScene component as the background */}
      <RainScene shouldRender={showRainScene} />
      {/* Render children on top of the rain scene */}
      {children}
    </div>
  );
};

export default RainBackground;
