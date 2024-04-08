"use client";

import { MenuIcon } from "lucide-react";
import MobileSidebar from "./mobileSidebar";
import { ChevronDown } from "lucide-react";
import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import truncateText from "@/helpers/Truncate";
import { UserContext } from "@/contextAPI/generalContext";
import { sidebarMenus } from "../../../public/data/sidebarData";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function ViewSidebar() {
  const contextValue = useContext(UserContext);
  const collapse = contextValue?.collapse;
  const setCollapse = contextValue?.setCollapse;
  const currentUserSchool = contextValue?.ctx;
  const router = useRouter();
  const [openSubmenus, setOpenSubmenus] = useState([]);

  const handleToggle = (index: number) => {
    const updatedSubmenus = [...openSubmenus] as any;
    updatedSubmenus[index] = !updatedSubmenus[index];
    setOpenSubmenus(updatedSubmenus);
    setCollapse(true);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="w-[250px] p-0">
        <div
          className={`h-screen overflow-clip w-[270px] transition-all ease-in-out duration-500 border-r p-5 bg-zinc-800 font-poppins`}
        >
          <div
            className={`h-[40px] w-full px-[10px] flex gap-[10px] border mb-[30px] items-center  rounded-sm`}
          >
            <div
              className={`font-Medium text-white flex items-center justify-center transition-all ease-in-out duration-500`}
            >
              <Image src={"/Gitcal.svg"} width={30} height={30} alt="logo" />
              <p className="ml-[10px]">
                {truncateText(currentUserSchool?.name, 15)}
              </p>
            </div>
          </div>
          <div className="overflow-y-auto h-full no-scrollbar">
            <ul className="flex flex-col">
              <li
                className={`flex flex-row items-center hover:bg-zinc-700 rounded-sm cursor-pointer px-[10px] transition-all ease-in-out duration-500 gap-[10px] h-[40px] text-[14px] font-Medium w-full ${
                  !collapse &&
                  "hover:bg-zinc-700 rounded-sm transition-all ease-in-out duration-500"
                }`}
                onClick={() => router.push("/dashboard/dashboard")}
              >
                <SheetClose className="flex gap-2 items-center">
                  <Icon
                    icon="bxs:dashboard"
                    className={`text-white text-[20px] `}
                  />
                  <p className={`text-[14px] text-white font-Regular`}>
                    Dashboard
                  </p>
                </SheetClose>
              </li>
              {/* <MobileMainMenus /> */}
              {/* <MainMenus /> */}
              <div>
                {sidebarMenus.map((menu, key) => (
                  <div key={key}>
                    <div className="w-full">
                      <li
                        className={`flex flex-row items-center justify-between cursor-pointer px-[10px] hover:bg-zinc-700 rounded-sm gap-[10px] h-[40px] text-[14px] font-Medium w-full transition-all ease-in-out duration-500  ${
                          !collapse &&
                          "hover:bg-zinc-700 rounded-sm transition-all ease-in-out duration-500"
                        } ${
                          contextValue?.ctx?.role != "manager" &&
                          menu.menu === "Manage Schools" &&
                          "hidden"
                        } ${
                          contextValue?.ctx?.role != "manager" &&
                          menu.menu === "Super Admin" &&
                          "hidden"
                        }`}
                        onClick={() => handleToggle(key)}
                      >
                        <p className="flex items-center gap-[10px]">
                          <Icon
                            icon={menu.icon}
                            className="text-[20px] text-white "
                          />
                          <p className={`text-[14px] font-Regular text-white`}>
                            {menu.menu}
                          </p>
                        </p>
                        {collapse && (
                          <ChevronDown
                            className="text-[10px] text-white"
                            size={14}
                          />
                        )}
                      </li>
                      {menu.sub.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          className={`text-white flex ml-[20px] flex-row items-center cursor-pointer px-[10px] hover:text-white/60 rounded-sm gap-[10px] h-[40px] text-[13px] font-Medium w-full transition-all ease-in-out duration-500 ${
                            !collapse
                              ? "hidden"
                              : openSubmenus[key]
                              ? "block pl-[15px] transition-all ease-in-out duration-500"
                              : "hidden transition-all ease-in-out duration-500"
                          }`}
                          href={`${sub.path}`}
                        >
                          <SheetClose>{sub.menus}</SheetClose>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ViewSidebar;
