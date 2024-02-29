"use client";

import { UserContext } from "@/contextAPI/generalContext";
import React, { useContext } from "react";

const Page = () => {
  const contextVaalue = useContext(UserContext)
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="flex flex-col gap-5 bg-white rounded-sm w-full h-full pt-[100px] items-center ">
        <div className="flex flex-col gap-2 items-center">
          <div className="border bg-gray-50 h-[80px] w-[80px] flex items-center justify-center rounded-sm">
          <h2 className="text-[24px] font-Medium">PI</h2>
          </div>
          <div className="flex gap-2">
            <h3 className="border py-1 px-3  rounded-sm">{contextVaalue?.ctx?.fullname}</h3>
            <h3 className="border py-1 px-3  rounded-sm">{contextVaalue?.ctx?.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
