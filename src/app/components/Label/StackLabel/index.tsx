import React from "react";

const stackList = [
  {
    key: "java",
    stackName: "Java",
    color: "#ec2025",
    backgroundColor: "#FFFFFF",
  },
  {
    key: "nextjs",
    stackName: "NextJS",
    color: "#FFFFFF",
    backgroundColor: "#000000",
  },
  {
    key: "javascript",
    stackName: "JavaScript",
    color: "#000000",
    backgroundColor: "#F7DF1E",
  },
  {
    key: "typescript",
    stackName: "TypeScript",
    color: "#FFFFFF",
    backgroundColor: "#007ACC",
  },
  {
    key: "jquery",
    stackName: "jQuery",
    color: "#000000",
    backgroundColor: "#0769AD",
  },
  {
    key: "saphybris",
    stackName: "SAP Hybris",
    color: "#008FD3",
    backgroundColor: "#FFFFFF",
  },
  {
    key: "spring",
    stackName: "Spring",
    color: "#FFFFFF",
    backgroundColor: "#6DB33F",
  },
  {
    key: "nodejs",
    stackName: "Node.js",
    color: "#68A063",
    backgroundColor: "#FFFFFF",
  },
  {
    key: "express",
    stackName: "Express",
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  {
    key: "sqlserver",
    stackName: "SQL Server",
    color: "#CC2927",
    backgroundColor: "#FFFFFF",
  },
  {
    key: "tailwind",
    stackName: "Tailwind CSS",
    color: "#38B2AC",
    backgroundColor: "#F9FAFB",
  },
  {
    key: "antdesign",
    stackName: "Ant Design",
    color: "#FFFFFF",
    backgroundColor: "#1890FF",
  },
  {
    key: "react",
    stackName: "React JS",
    color: "#61DAFB",
    backgroundColor: "#FFFFFF",
  },
];

const getStack = (stackName: string) => {
  return stackList.find((item) => item.key === stackName);
};

const StackLabel = ({ stackName }: { stackName: string }) => {
  const stack = getStack(stackName);
  return (
    <div
      className="text-[10px] px-[5px] font-bold uppercase rounded-md"
      style={{
        backgroundColor: stack?.backgroundColor,
        color: stack?.color,
      }}
    >
      {stackName}
    </div>
  );
};

export default StackLabel;
