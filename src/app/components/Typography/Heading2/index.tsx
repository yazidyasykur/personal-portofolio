import React, { ReactNode } from "react";

type Heading2Props = {
  children: ReactNode;
};

const Heading2 = ({ children }: Heading2Props) => {
  return <div className="text-2xl font-bold">{children}</div>;
};

export default Heading2;
