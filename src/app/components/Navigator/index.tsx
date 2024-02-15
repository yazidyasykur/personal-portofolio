"use client";

import React, { MouseEvent, SyntheticEvent, useState } from "react";

type ItemType = {
  key: string;
  location: string;
  label: string;
  isActive: boolean;
};

const Navigator = () => {
  const [items, setItems] = useState<ItemType[]>([
    {
      key: "about",
      location: "#",
      label: "ABOUT",
      isActive: true,
    },
    {
      key: "experience",
      location: "#",
      label: "EXPERIENCE",
      isActive: false,
    },
    {
      key: "projects",
      location: "#",
      label: "PROJECTS",
      isActive: false,
    },
  ]);

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement | HTMLElement;
    const id = target.id;

    if (!id) return;
    setItems(
      items.map((item) => {
        if (item.key === id) {
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
  };

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
