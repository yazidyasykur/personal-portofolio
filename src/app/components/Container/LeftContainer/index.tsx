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
import NameTag from "../../NameTag";

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
      <NameTag />

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
