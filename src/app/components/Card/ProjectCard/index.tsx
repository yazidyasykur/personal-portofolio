import React from "react";
import StackLabel from "../../Label/StackLabel";
import { ExperienceItem } from "../../Container/ExperienceContainer";
import sampleImage from "public/images/sample.jpg";
import Image from "next/image";
import { ProjectItem } from "../../Container/ProjectContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export type ProjectCardProps = {
  data: ProjectItem;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <div
      className="grid grid-cols-12 gap-4 px-8 py-4 rounded-md transition-all hover:bg-white hover:shadow-lg hover:bg-opacity-10 "
      key={data.key}
    >
      <div className="col-span-4">
        <Image
          className="rounded-md border-8 border-white shadow-lg"
          alt="project image"
          src={sampleImage}
        />
      </div>
      <div className="col-span-8 text-sm">
        <div className="capitalize">
          <div className=" font-bold">
            {data.titleList[0]} &nbsp; &#x2022; &nbsp; {data.companyName}
          </div>
          {data.titleList.slice(1).map((title, index) => (
            <div key={index} className="col-span-8 text-sm text-gray-500">
              {title}
            </div>
          ))}
        </div>
        <div className="text-sm mt-2">{data.description}</div>
        {data?.url && (
          <Link
            href={"https://suri-frontend.vercel.app"}
            target={"_blank"}
            className=""
          >
            <div className="py-1 px-2 w-fit rounded-md text-sm my-2 hover:bg-white hover:text-black transition-all">
              <FontAwesomeIcon icon={faLink} />{" "}
              <span className="ml-2">{data?.label}</span>
            </div>
          </Link>
        )}
        <div className="mt-2 flex gap-2 flex-wrap">
          {data.stackList.map((stack) => (
            <StackLabel key={stack} stackName={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
