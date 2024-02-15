"use client";

import React from "react";
import Heading1 from "../../Typography/Heading1";
import JobTitle from "../../Typography/Title";
import Paragraph1 from "../../Typography/Paragraph1";
import Navigator from "../../Navigator";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faHackerrank,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const LeftContainer = () => {
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
    <div className="fixed px-12 py-16 h-full">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          arcu aliquam, mollis urna id, molestie urna.
        </Paragraph1>
      </div>

      <div className="mt-12">
        <Navigator />
      </div>

      <div className="absolute bottom-8 flex gap-5 text-4xl transition-all">
        <Link href="https://linkedin.com/in/yazid-yasykur" target="_blank">
          <FontAwesomeIcon
            className="transition-all hover:scale-110"
            icon={faLinkedin}
          />
        </Link>
        <Link href="https://github.com/yazidyasykur" target="_blank">
          <FontAwesomeIcon
            className="transition-all hover:scale-110"
            icon={faGithub}
          />
        </Link>
        <Link href="https://codepen.io/yazidyasykur" target="_blank">
          <FontAwesomeIcon
            className="transition-all hover:scale-110"
            icon={faCodepen}
          />
        </Link>
        <Link
          href="https://www.hackerrank.com/profile/yasykury"
          target="_blank"
        >
          <FontAwesomeIcon
            className="transition-all hover:scale-110"
            icon={faHackerrank}
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftContainer;
