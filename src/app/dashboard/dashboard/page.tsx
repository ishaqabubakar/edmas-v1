"use client"
import { Icon } from "@iconify/react"

import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border rounded-sm h-[70px] py-2 pl-2 pr-3 flex items-center gap-5">
          <div className="h-full w-[70px] border rounded-sm bg-[#00c0ef] flex items-center justify-center">
            <Icon  icon="ri:school-line" className="text-[40px] text-white"/>
          </div>
          <div className="flex flex-col item-center leading-6">
            <h3 className="text-[25px] font-Medium">180</h3>
            <p className="text-[14px] font-light text-brand-icon">Total School</p>
          </div>
        </div>
        <div className="w-full bg-white border rounded-sm h-[70px] py-2 pl-2 pr-3 flex items-center gap-5">
          <div className="h-full w-[70px] border rounded-sm bg-[#dd4b39]"></div>
          <div className="flex flex-col item-center leading-6">
            <h3 className="text-[25px] font-Medium">180</h3>
            <p className="text-[14px] font-light text-brand-icon">Total School</p>
          </div>
        </div>
        <div className="w-full bg-white border rounded-sm h-[70px] py-2 pl-2 pr-3 flex items-center gap-5">
          <div className="h-full w-[70px] border rounded-sm bg-[#00a65a]"></div>
          <div className="flex flex-col item-center leading-6">
            <h3 className="text-[25px] font-Medium">180</h3>
            <p className="text-[14px] font-light text-brand-icon">Total School</p>
          </div>
        </div>
        <div className="w-full bg-white border rounded-sm h-[70px] py-2 pl-2 pr-3 flex items-center gap-5">
          <div className="h-full w-[70px] border rounded-sm bg-[#f39c12]"></div>
          <div className="flex flex-col item-center leading-6">
            <h3 className="text-[25px] font-Medium">180</h3>
            <p className="text-[14px] font-light text-brand-icon">Total School</p>
          </div>
        </div>
        <div className="w-full bg-white border rounded-sm h-[70px] py-2 pl-2 pr-3 flex items-center gap-5">
          <div className="h-full w-[70px] border rounded-sm bg-gray-50"></div>
          <div className="flex flex-col item-center leading-6">
            <h3 className="text-[25px] font-Medium">180</h3>
            <p className="text-[14px] font-light text-brand-icon">Total School</p>
          </div>
        </div>
     
      </div>
      <div className="w-full flex gap-5 h-full">
        <div className="w-full bg-white h-full border rounded-sm"></div>
        <div className="w-[600px] bg-white border rounded-sm h-full"></div>
      </div>
    </div>
  );
};

export default Dashboard;
