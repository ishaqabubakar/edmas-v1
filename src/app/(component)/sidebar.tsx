"use client";

import React, { useContext } from "react";
import MainMenus from "./sidebarList";
import { Icon } from "@iconify/react";
import { UserContext } from "@/contextAPI/generalContext";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const contextValue = useContext(UserContext);
  const collapse = contextValue?.collapse;
  const setCollapse = contextValue?.setCollapse;
  const router = useRouter()

  return (
    <div
      className={`h-screen overflow-clip hidden lg:block ${
        collapse
          ? "w-[270px] transition-all ease-in-out duration-500"
          : "w-[80px] transition-all ease-in-out duration-500"
      } border-r p-5 bg-zinc-800 font-poppins`}
    >
      <div className={`h-[40px] ${!collapse? 'w-[40px]':'w-full'} flex gap-[10px] border mb-[30px] items-center justify-center rounded-sm`}>
        <h3
          className={`font-Medium text-white ${
            !collapse
              ? "hidden transition-all ease-in-out duration-500"
              : "block transition-all ease-in-out duration-500"
          }`}
        >
          EduComplex
        </h3>
        <h3
          className={`font-Medium text-white ${
            !collapse
              ? "block transition-all ease-in-out duration-500"
              : "hidden transition-all ease-in-out duration-500"
          }`}
        >
          E
        </h3>
      </div>
      <aside className="overflow-y-auto h-full no-scrollbar">
        <ul className="flex flex-col">
          <li
            className={`flex flex-row items-center hover:bg-zinc-700 rounded-sm cursor-pointer px-[10px] transition-all ease-in-out duration-500 gap-[10px] h-[40px] text-[14px] font-Medium w-full ${
              !collapse &&
              "hover:bg-zinc-700 rounded-sm transition-all ease-in-out duration-500"
            }`}
            onClick={()=>router.push('/dashboard/dashboard')}
          >
            <Icon icon="bxs:dashboard" className={`text-white text-[20px] `} />
            <p
              className={`text-[14px] text-white font-Regular ${
                !collapse ? "hidden" : "block"
              }`}
            >
              Dashboard
            </p>
          </li>
          <MainMenus />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
