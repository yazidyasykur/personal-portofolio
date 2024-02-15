import React, { ReactNode } from "react";

type JobTitleProps = {
  children: ReactNode;
};

const JobTitle = ({ children }: JobTitleProps) => {
  return <div className="text-lg mt-1">{children}</div>;
};

export default JobTitle;
