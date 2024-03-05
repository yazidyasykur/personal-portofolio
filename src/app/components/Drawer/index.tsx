"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import HamburgerIcon from "public/icons/burger-menu.svg";
import "react-modern-drawer/dist/index.css";

type Props = {};

const MobileDrawer = (props: Props) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  return (
    <div className="block md:hidden">
      <div className="fixed h-20 justify-between bg-black w-full bg-opacity-30 flex items-center px-4">
        <div>Yazid Yasykur</div>
        <div className="scale-75">
          <HamburgerIcon />
        </div>
      </div>
      <Drawer
        open={false}
        onClose={() => setIsOpenDrawer(false)}
        direction="right"
        size={300}
      >
        <div className="text-black">Hello World</div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
