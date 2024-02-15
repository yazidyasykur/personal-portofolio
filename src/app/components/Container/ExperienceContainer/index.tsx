import React from "react";
import ExperienceCard from "../../Card/ExperienceCard";

export type ExperienceItem = {
  key: string;
  startPeriod: string;
  endPeriod: string;
  isCurrentJob: boolean;
  titleList: string[];
  companyName: string;
  description: string;
  stackList: string[];
};

const ExperienceContainer = () => {
  const experienceItem: ExperienceItem[] = [
    {
      key: "1",
      startPeriod: "Dec 2022",
      endPeriod: "present",
      isCurrentJob: true,
      titleList: ["frontend engineer", "fullstack engineer"],
      companyName: "PT. Astra Digital Mobil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id arcu aliquam, mollis urna id, molestie urna. Nulla vitae massa et est hendrerit eleifend at quis magna. Nunc condimentum turpis.",
      stackList: [
        "javascript",
        "typescript",
        "jquery",
        "nextjs",
        "java",
        "saphybris",
        "spring",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 ">
      {experienceItem.map((item, index) => (
        <ExperienceCard data={item} key={index} />
      ))}
    </div>
  );
};

export default ExperienceContainer;
