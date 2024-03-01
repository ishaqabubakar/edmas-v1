"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
const EmptyData = (props:any) => {
    const pathname = usePathname()
  return (
    <div className={`flex w-full items-center bg-white ${pathname==="/dashboard/dashboard"?'border-0':'border'} rounded-sm justify-center h-full`}>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <Icon
          icon="codicon:empty-window"
          fontSize={40}
          className="text-gray-400"
        />
        <p className="text-gray-400">{props.message}</p>
      </div>
    </div>
  );
};

export default EmptyData;
