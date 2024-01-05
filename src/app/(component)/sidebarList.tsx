"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import { useRouter } from "next/navigation";
import { sidebarMenus } from "../../../public/data/sidebarData";

const MainMenus = ({}) => {
  return (
    <div>
      {sidebarMenus.map((menu, key) => (
        <div key={key}>
          <div className="w-full">
            <li className="flex flex-row items-center cursor-pointer px-[10px] gap-[10px] h-[40px] text-[14px] font-Medium w-full  rounded-md">
              <Icon icon={menu.icon} className="text-[20px] text-white " />
              <p className="text-[14px] font-Regular text-white">{menu.menu}</p>
            </li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainMenus;
