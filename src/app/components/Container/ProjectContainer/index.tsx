"use client";
import React, { useState } from "react";
import ExperienceCard from "../../Card/ExperienceCard";
import { Collapse } from "react-collapse";
import Heading2 from "../../Typography/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../../Card/ProjectCard";

export type ProjectItem = {
  key: string;
  isCurrentJob: boolean;
  titleList: string[];
  companyName: string;
  description: string;
  stackList: string[];
  url?: string;
  label?: string;
};

const ProjectContainer = () => {
  const experienceItem: ProjectItem[] = [
    {
      key: "1",
      isCurrentJob: true,
      titleList: ["backend engineer"],
      companyName: "PT. Best Agro International",
      description:
        "I architect and develop the backend for a customer service system, encompassing a WhatsApp chatbot which integrated with third-party API's, streamlined ticketing processes, and robust CRUD functionalities. I ensure seamless integration and efficient handling of customer inquiries and data management.",
      stackList: ["javascript", "nodejs", "sqlserver", "express"],
    },
    {
      key: "2",
      isCurrentJob: true,
      titleList: ["Frontend Engineer"],
      companyName: "Sustainable Rituals",
      description:
        "I translate Figma designs into responsive frontend designs, catering to both desktop and mobile platforms.",
      stackList: ["typescript", "nextjs", "tailwind"],
      url: "https://suri-frontend.vercel.app",
      label: "SURI",
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
