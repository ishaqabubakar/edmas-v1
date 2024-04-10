"use client";

import { MenuIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";


import { usePathname } from "next/navigation";
import AllSchoolListData from "../schoolDropdowns";
import NotificationCenter from "../Notification";
import UserProfile from "../userProfile";
import ViewSidebar from "../mobileSideView";
import { UserContext } from "@/contextAPI/generalContext";

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
              <ViewSidebar />
            )}
          </div>
          <p className="font-Medium hidden sm:block">{lastPathname} </p>
        </div>

        <div className="flex gap-2 ">
          {contextValue?.ctx?.role === "manager" && <AllSchoolListData />}
          <NotificationCenter />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
