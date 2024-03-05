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
        "Responsible for creating and managing web applications using HTML, CSS, JavaScript (jQuery), NextJS and Spring MVC. Collaborate across teams to decipher project needs, contribute to agile development, and facilitate the migration to NextJS for enhanced front-end technology.",
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
