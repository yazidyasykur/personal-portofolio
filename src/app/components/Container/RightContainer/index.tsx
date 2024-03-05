import React from "react";
import Paragraph1 from "../../Typography/Paragraph1";
import Heading1 from "../../Typography/Heading1";
import Heading2 from "../../Typography/Heading2";
import ExperienceContainer from "../ExperienceContainer";
import ProjectContainer from "../ProjectContainer";

const RightContainer = () => {
  return (
    <div className="py-16 ">
      <div className="px-4 md:px-8 text-justify">
        <Paragraph1>
          &nbsp;&nbsp;With a year of hands-on experience as a Full-stack
          Developer, I specialize in using front-end technologies like jQuery
          and NextJS/ReactJS to create attractive and user-friendly interfaces.
          I&quot;m also skilled in Java Spring for backend development and API
          integration. I love turning designs into engaging interfaces and enjoy
          working collaboratively in dynamic environments. I&quot;m eager to
          take on new challenges and contribute my creativity and technical
          skills to exciting projects.
        </Paragraph1>
        <br />
        <Paragraph1>
          &nbsp;&nbsp;As a collaborative team player, I thrive in dynamic
          environments, effectively communicating ideas and contributing
          meaningfully to project success. My dedication to embracing new
          challenges fuels my enthusiasm for building exceptional software
          solutions. With a keen eye for creativity and a strong technical skill
          set, I am actively seeking opportunities to collaborate on promising
          ventures, where I can leverage my expertise to deliver innovative
          solutions and drive project excellence.
        </Paragraph1>
      </div>

      <div className="mt-16">
        <div className="px-4 md:px-8 font-bold">
          <Heading1>Experience</Heading1>
        </div>
        <div className="mt-8">
          <ExperienceContainer />
        </div>
      </div>

      <div className=" mt-16">
        <div className="px-4 md:px-8 font-bold">
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
