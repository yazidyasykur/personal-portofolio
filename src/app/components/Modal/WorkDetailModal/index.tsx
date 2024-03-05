"use client";

import React from "react";
import Carousel from "react-multi-carousel";
("react-multi-carousel");
import sampleImage from "public/images/sample.jpg";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

type Props = {};

const WorkDetailModal = (props: Props) => {
  const isArray = true;

  return (
    <div className="fixed flex justify-center items-center layout w-screen h-screen bg-black z-50 bg-opacity-30 backdrop-blur-[3px]">
      <div className="w-3/4 h-3/4 absolute bg-black">
        <div className="h-5/6">
          {isArray ? (
            <Carousel
              responsive={{
                desktop: {
                  items: 1,
                  breakpoint: {
                    max: 1640,
                    min: 1080,
                  },
                },
                tablet: {
                  items: 1,
                  breakpoint: {
                    max: 1080,
                    min: 768,
                  },
                },
                mobile: {
                  items: 1,
                  breakpoint: {
                    max: 768,
                    min: 320,
                  },
                },
              }}
            >
              {[1, 2, 3].map((image, index) => (
                <Image key="index" alt="sample image" src={sampleImage} />
              ))}
            </Carousel>
          ) : (
            <Image alt="sample image" src={sampleImage} />
          )}
        </div>
        <div className="h-1/6">Text</div>
      </div>
    </div>
  );
};

export default WorkDetailModal;
