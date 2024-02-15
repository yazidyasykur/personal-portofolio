import React from "react";
import Paragraph1 from "../../Typography/Paragraph1";
import Heading1 from "../../Typography/Heading1";
import Heading2 from "../../Typography/Heading2";
import ExperienceContainer from "../ExperienceContainer";
import ProjectContainer from "../ProjectContainer";

const RightContainer = () => {
  return (
    <div className="py-16 ">
      <div className="px-8 text-justify">
        <Paragraph1>
          &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum id arcu aliquam, mollis urna id, molestie urna. Nulla vitae
          massa et est hendrerit eleifend at quis magna. Nunc condimentum turpis
          porta lectus imperdiet tempus. Proin at metus erat. Aenean non mattis
          diam. Proin nec vestibulum leo. Donec blandit, nulla molestie
          tristique tempus, enim nibh bibendum mauris, quis vehicula sem leo sed
          nunc.
        </Paragraph1>
        <br />
        <Paragraph1>
          &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum id arcu aliquam, mollis urna id, molestie urna. Nulla vitae
          massa et est hendrerit eleifend at quis magna. Nunc condimentum turpis
          porta lectus imperdiet tempus. Proin at metus erat. Aenean non mattis
          diam. Proin nec vestibulum leo. Donec blandit, nulla molestie
          tristique tempus, enim nibh bibendum mauris, quis vehicula sem leo sed
          nunc.
        </Paragraph1>
      </div>

      <div className="mt-16">
        <div className="px-8 font-bold">
          <Heading1>Experience</Heading1>
        </div>
        <div className="mt-8">
          <ExperienceContainer />
        </div>
      </div>

      <div className=" mt-16">
        <div className="px-8 font-bold">
          <Heading1>Projects</Heading1>
        </div>
        <div className="mt-8">
          <ProjectContainer />
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
