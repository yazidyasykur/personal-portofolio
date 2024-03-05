import React from "react";
import Heading1 from "../Typography/Heading1";
import JobTitle from "../Typography/Title";
import { TypeAnimation } from "react-type-animation";
import Paragraph1 from "../Typography/Paragraph1";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faHackerrank,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import NameTag from "../NameTag";

type Props = {};

const MobileHero = (props: Props) => {
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
    <div className="px-4 h-screen flex items-center">
      <div>
        <NameTag />
        <div className="mt-8 flex gap-4 text-3xl">
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
    </div>
  );
};

export default MobileHero;
