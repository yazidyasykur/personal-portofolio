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
  onOpenProject: () => void;
};

const ProjectCard = ({ data, onOpenProject }: ProjectCardProps) => {
  return (
    <div
      className="grid cursor-pointer sm:grid-cols-12 grid-cols-1 gap-4 px-8 py-4 rounded-md transition-all hover:bg-white hover:shadow-lg hover:bg-opacity-10 "
      key={data.key}
      onClick={onOpenProject}
    >
      <div className="sm:col-span-4 col-span-12">
        <Image
          className="rounded-md border-8 border-white shadow-lg"
          alt="project image"
          src={data.galleryImages[0]}
          width={576}
          height={320}
        />
      </div>
      <div className="col-span-8 text-sm">
        <div className="capitalize">
          {data.companyName ? (
            <div className=" font-bold">
              {data.titleList[0]} &nbsp; &#x2022; &nbsp; {data.companyName}
            </div>
          ) : (
            <div className=" font-bold">{data.titleList[0]}</div>
          )}
          {data.titleList.slice(1).map((title, index) => (
            <div key={index} className="col-span-8 text-sm text-gray-500">
              {title}
            </div>
          ))}
        </div>
        <div className="text-sm mt-2">{data.description}</div>
        {data?.url && (
          <Link href={data.url} target={"_blank"} className="">
            <div className="py-1 px-2 w-fit rounded-md text-sm my-2 hover:bg-white hover:text-black transition-all text-nowrap">
              <FontAwesomeIcon icon={faLink} />{" "}
              <span className="ml-2 text-nowrap">{data?.label}</span>
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
