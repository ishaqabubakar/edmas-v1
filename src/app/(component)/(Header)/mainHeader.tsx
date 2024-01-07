import { UserContext } from "@/contextAPI/generalContext";
import { MenuIcon } from "lucide-react";
import React, { useContext } from "react";
import UserProfile from "../userProfile";

const MainHeader = () => {
  const contextValue = useContext(UserContext);
  const setCollapse = contextValue?.setCollapse;
  return (
    <div className="py-5 h-[90px] border-b w-full px-5 flex items-center bg-white">
      <div className="flex items-center w-full justify-between">
        <MenuIcon onClick={() => setCollapse((prev: any) => !prev)} />
        <UserProfile />
      </div>
    </div>
  );
};

export default MainHeader;
