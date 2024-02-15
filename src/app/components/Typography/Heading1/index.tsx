import React, { ReactNode } from "react";

type Heading1Props = {
  children: ReactNode;
};

const Heading1 = ({ children }: Heading1Props) => {
  return <div className="text-5xl">{children}</div>;
};

export default Heading1;
