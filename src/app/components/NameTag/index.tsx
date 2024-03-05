"use client";
import React from "react";
import Heading1 from "../Typography/Heading1";
import { TypeAnimation } from "react-type-animation";
import JobTitle from "../Typography/Title";
import Paragraph1 from "../Typography/Paragraph1";

type Props = {};

const NameTag = (props: Props) => {
  const typingSequence = [
    "Software Engineer",
    2000,
    "Software Developer",
    2000,
    "Frontend Engineer",
    2000,
    "Frontend Developer",
    2000,
    "Fullstack Engineer",
    2000,
    "Fullstack Developer",
    2000,
    "Web Developer",
    2000,
  ];

  return (
    <div>
      <div className="font-bold">
        <Heading1>Yazid Yasykur</Heading1>
        <JobTitle>
          <div className="inline-block w-3 h-3 bg-green-600 mr-2" />
          <TypeAnimation
            sequence={typingSequence}
            deletionSpeed={50}
            speed={10}
            repeat={999}
            className="after:text-green-600"
          />
        </JobTitle>
      </div>
      <div className="mt-8 max-w-80">
        <Paragraph1>
          I skillfully craft pixel-perfect interfaces with front-end finesse and
          backend excellence.
        </Paragraph1>
      </div>
    </div>
  );
};

export default NameTag;
