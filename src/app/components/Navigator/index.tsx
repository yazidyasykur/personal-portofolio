"use client";

import React, { MouseEvent, SyntheticEvent, useEffect, useState } from "react";
import RightContainer from "../Container/RightContainer";

type ItemType = {
  key: string;
  location: string;
  label: string;
  isActive: boolean;
};

const Navigator = () => {
  const [items, setItems] = useState<ItemType[]>([
    {
      key: "summary",
      location: "#summary",
      label: "ABOUT",
      isActive: true,
    },
    {
      key: "experience",
      location: "#experience",
      label: "EXPERIENCE",
      isActive: false,
    },
    {
      key: "projects",
      location: "#projects",
      label: "PROJECTS",
      isActive: false,
    },
  ]);

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement | HTMLElement;
    const id = target.id;

    if (!id) return;

    const element = document.getElementById("right-container");
    const activeView = element?.querySelector(`#${id}`);
    activeView?.scrollIntoView({ behavior: "smooth" });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const scrollValue = window.scrollY;

    if (scrollValue <= 70) {
      setItems(
        items.map((item) => {
          if (item.key === "summary") {
            return {
              ...item,
              isActive: true,
            };
          } else {
            return {
              ...item,
              isActive: false,
            };
          }
        })
      );
    } else if (scrollValue <= 620) {
      setItems(
        items.map((item) => {
          if (item.key === "experience") {
            return {
              ...item,
              isActive: true,
            };
          } else {
            return {
              ...item,
              isActive: false,
            };
          }
        })
      );
    } else if (scrollValue <= 1020) {
      setItems(
        items.map((item) => {
          if (item.key === "projects") {
            return {
              ...item,
              isActive: true,
            };
          } else {
            return {
              ...item,
              isActive: false,
            };
          }
        })
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <div className="flex flex-col gap-8">
        {items.map(({ key, location, label, isActive }) => (
          <div
            onClick={handleClick}
            id={key}
            key={key}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div
              className={`bg-white h-[1px] transition-all ${
                isActive ? "w-28" : "w-10"
              }`}
            ></div>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigator;
