"use client"

import React from "react";
import MainMenus from "./sidebarList";
import {Icon } from '@iconify/react'

const Sidebar = () => {
  return (
    <div className="h-screen w-[200px] border-r p-5 bg-zinc-800 font-poppins">
      <div className="h-[40px] w-full flex gap-[10px] border mb-[30px] items-center justify-center rounded-sm">
        <h3 className="font-Medium">EduComplex</h3>
      </div>
      <aside>
        <ul className="flex flex-col">
          <li className="flex flex-row items-center cursor-pointer px-[10px] gap-[10px] h-[40px] text-[14px] font-Medium w-full  rounded-md">
            <Icon icon='el:dashboard' className="text-white text-[14px]"/> 
            <p className="text-[14px] text-white font-Regular ">Dashboard</p>
          </li>
         <MainMenus />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
