"use client";

import React, { useContext } from "react";
import MainMenus from "./sidebarList";
import { Icon } from "@iconify/react";
import { UserContext } from "@/contextAPI/generalContext";
import { useRouter } from "next/navigation";
import MobileMainMenus from "./mobileMenus";
import Image from "next/image";
import truncateText from "@/helpers/Truncate";
import { SheetClose } from "@/components/ui/sheet";

const MobileSidebar = () => {
  const contextValue = useContext(UserContext);
  const collapse = contextValue?.collapse;
  const setCollapse = contextValue?.setCollapse;
  const currentUserSchool =contextValue?.ctx
  const router = useRouter()

  return (
    <div
      className={`h-screen overflow-clip w-[270px] transition-all ease-in-out duration-500
       border-r p-5 bg-zinc-800 font-poppins`}
    >
         <div className={`h-[40px] w-full px-[10px] flex gap-[10px] border mb-[30px] items-center  rounded-sm`}>
        <div
          className={`font-Medium text-white flex items-center justify-center transition-all ease-in-out duration-500`}
        >
        <Image  src={'/Gitcal.svg'} width={30} height={30} alt="logo"/>
        <p className="ml-[10px]">{truncateText(currentUserSchool?.name,15)}</p>
        </div>
        {/* <h3
          className={`font-Medium text-white ${
            !collapse
              ? "block transition-all ease-in-out duration-500"
              : "hidden transition-all ease-in-out duration-500"
          }`}
        >
         <Image  src={'/Gitcal.svg'} width={25} height={25} alt="logo"/>
        </h3> */}
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
            <SheetClose
              className={`text-[14px] text-white font-Regular`}
            >
              Dashboard
            </SheetClose>
          </li>
          <MobileMainMenus />
          {/* <MainMenus /> */}
        </ul>
      </aside>
    </div>
  );
};

export default MobileSidebar;
