import React from "react";
import StackLabel from "../../Label/StackLabel";
import { ExperienceItem } from "../../Container/ExperienceContainer";

export type ExperienceCardProps = {
  data: ExperienceItem;
};

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <div
      className="grid grid-cols-12 gap-4 px-8 py-4 rounded-md transition-all hover:bg-white hover:shadow-lg hover:bg-opacity-10 "
      key={data.key}
    >
      <div className="col-span-4 text-sm uppercase">
        {data.startPeriod} - {data.endPeriod}
      </div>
      <div className="col-span-8 text-sm capitalize">
        <div>
          <div className=" font-bold">
            {data.titleList[0]} &nbsp; &#x2022; &nbsp; {data.companyName}
          </div>
          {data.titleList.slice(1).map((title, index) => (
            <div
              key={index}
              className="col-span-8 text-sm capitalize text-gray-500"
            >
              {title}
            </div>
          ))}
        </div>
        <div className="text-sm mt-2">{data.description}</div>
        <div className="mt-2 flex gap-2 flex-wrap">
          {data.stackList.map((stack) => (
            <StackLabel key={stack} stackName={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
