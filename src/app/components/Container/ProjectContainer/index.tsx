"use client";
import React, { useState } from "react";
import ExperienceCard from "../../Card/ExperienceCard";
import { Collapse } from "react-collapse";
import Heading2 from "../../Typography/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../../Card/ProjectCard";

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

const ProjectContainer = () => {
  const experienceItem: ExperienceItem[] = [
    {
      key: "1",
      startPeriod: "Dec 2016",
      endPeriod: "Apr 2020",
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
    {
      key: "2",
      startPeriod: "Dec 2016",
      endPeriod: "Apr 2020",
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

  const [isOpenFreelance, setIsOpenFreelance] = useState<boolean>(true);
  const [isOpenPersonal, setIsOpenPersonal] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <button
          className="mb-2 px-8 "
          onClick={() => setIsOpenFreelance((prevState) => !prevState)}
        >
          <Heading2>
            <span className="mr-4">
              <FontAwesomeIcon
                className={`transition-transform delay-200 ${
                  !isOpenFreelance ? "-scale-y-100" : "scale-y-100"
                }`}
                icon={faChevronDown}
              />
            </span>
            Freelance Project
          </Heading2>
        </button>
        <Collapse isOpened={isOpenFreelance}>
          <div className="flex flex-col gap-6 transition-all">
            {experienceItem.map((item, index) => (
              <ProjectCard data={item} key={index} />
            ))}
          </div>
        </Collapse>
      </div>
      <div>
        <button
          className="px-8  mb-2"
          onClick={() => setIsOpenPersonal((prevState) => !prevState)}
        >
          <Heading2>
            <span className="mr-4">
              <FontAwesomeIcon
                className={`transition-transform delay-200 ${
                  !isOpenPersonal ? "-scale-y-100" : "scale-y-100"
                }`}
                icon={faChevronDown}
              />
            </span>
            Personal Project
          </Heading2>
        </button>
        <Collapse isOpened={isOpenPersonal}>
          <div className="flex flex-col gap-6 transition-all ">
            {experienceItem.map((item, index) => (
              <ProjectCard data={item} key={index} />
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default ProjectContainer;
