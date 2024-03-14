import React, { ReactNode } from "react";

type Paragraph1Props = {
  children: ReactNode;
};

const Paragraph1 = ({ children }: Paragraph1Props) => {
  return <p className="text-sm md:text-base">{children}</p>;
};

export default Paragraph1;
