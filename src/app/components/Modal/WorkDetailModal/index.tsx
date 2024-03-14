"use client";

import React, { useState } from "react";
import Carousel from "react-multi-carousel";
("react-multi-carousel");
import sampleImage from "public/images/sample.jpg";
import "react-multi-carousel/lib/styles.css";
import CloseIcon from "public/icons/close-icon.svg";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

const WorkDetailModal = (props: Props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (!props.isOpen) {
    return;
  }

  return (
    <div
      className={`flex fixed top-0 left-0 w-screen h-screen items-center justify-center bg-transparent z-50 bg-opacity-30 backdrop-blur-[3px]`}
    >
      <div className="absolute w-full h-full md:w-3/4 md:h-3/4 mx-auto bg-black">
        <div className="h-5/6">
          <div className="absolute right-0 z-50 p-2" onClick={props.onClose}>
            <CloseIcon className="w-8 h-8" />
          </div>
          <Carousel
            responsive={responsive}
            className="h-full"
            itemClass="flex justify-center object-cover"
            infinite
          >
            <Image className="w-full" src={sampleImage} alt="sample" />
            <Image className="w-full" src={sampleImage} alt="sample" />
            <Image className="w-full" src={sampleImage} alt="sample" />
          </Carousel>
        </div>
        <div className="h-1/6">Text</div>
      </div>
      <div className="w-screen h-screen bg-transparent bg-opacity-30" />
    </div>
  );
};

export default WorkDetailModal;
