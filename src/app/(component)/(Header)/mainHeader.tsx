"use client"

import { UserContext } from "@/contextAPI/generalContext";
import { MenuIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import UserProfile from "../userProfile";
import MobileSidebar from "../mobileSideView";

const MainHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const isMobile = window.innerWidth <= 1024;
      isMobile ? setIsMobile(true) : setIsMobile(false);
    }, [isMobile]);

  const contextValue = useContext(UserContext);
  const setCollapse = contextValue?.setCollapse;
  return (
    <div className="py-5 h-[90px] border-b w-full px-5 flex items-center bg-white">
      <div className="flex items-center w-full justify-between">
     {!isMobile? <MenuIcon onClick={() => setCollapse((prev: any) => !prev)}/> : <MobileSidebar />}
 
        <UserProfile />
      </div>
    </div>
  );
};

export default MainHeader;
