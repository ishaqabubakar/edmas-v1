"use client";

import { UserContext } from "@/contextAPI/generalContext";
import { MenuIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import UserProfile from "../userProfile";
import MobileSidebar from "../mobileSideView";
import NotificationCenter from "../Notification";
import { usePathname } from "next/navigation";
import useUserHook from "@/hooks/useUserHook";
import AllSchoolListData from "../schoolDropdowns";


const MainHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    isMobile ? setIsMobile(true) : setIsMobile(false);
  }, [isMobile]);
  const pathName = usePathname();
  const lastSlashIndex = pathName.lastIndexOf("/");
  const lastPathname = pathName.substring(lastSlashIndex + 1);

  console.log(lastPathname);

  const contextValue = useContext(UserContext);
  const setCollapse = contextValue?.setCollapse;


  return (
    <div className="py-5 h-[90px] border-b w-full px-5 flex items-center bg-white">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-sm bg-gray-50">
            {!isMobile ? (
              <MenuIcon onClick={() => setCollapse((prev: any) => !prev)} />
            ) : (
              <MobileSidebar />
            )}
          </div>
          <p className="font-Medium">{lastPathname} </p>
        </div>

        <div className="flex gap-2">
          <AllSchoolListData />
          <NotificationCenter />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
