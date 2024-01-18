import React from 'react'
import { Icon } from "@iconify/react";
const TopHeader = () => {
  return (
    <div className="w-full lg:flex-row flex flex-col gap-5">
    <div className="w-full  bg-[#ef7f00]/10 white rounded-sm h-fit flex flex-col items-center gap-5 p-5">
      <div className="flex items-center justify-between w-full gap-5 ">
        <div className=" rounded-sm flex flex-col items-start justify-center">
          <p className="text-[14px] font-Regular text-brand-icon">
            Total Schools
          </p>
          <h3 className="text-[35px] font-Medium">180.00k</h3>
        </div>
        <div className="flex flex-col item-center leading-6">
          <Icon
            icon="ri:school-line"
            className="text-[50px] text-[#ef7f00]"
          />
        </div>
      </div>
    </div>
    <div className="w-full  bg-[#1a773d]/10 white rounded-sm h-fit flex flex-col items-center gap-5 p-5">
      <div className="flex items-center justify-between w-full gap-5 ">
        <div className=" rounded-sm flex flex-col items-start justify-center">
          <p className="text-[14px] font-Regular text-brand-icon">
            Total Students
          </p>
          <h3 className="text-[35px] font-Medium">180.00k</h3>
        </div>
        <div className="flex flex-col item-center leading-6">
          <Icon
            icon="lucide:users-round"
            className="text-[50px] text-[#1a773d]"
          />
        </div>
      </div>
    </div>
    <div className="w-full  bg-[#7a1a63]/10 white rounded-sm h-fit flex flex-col items-center gap-5 p-5">
      <div className="flex items-center justify-between w-full gap-5 ">
        <div className=" rounded-sm flex flex-col items-start justify-center">
          <p className="text-[14px] font-Regular text-brand-icon">
            Total Parents
          </p>
          <h3 className="text-[35px] font-Medium">180.00k</h3>
        </div>
        <div className="flex flex-col item-center leading-6">
          <Icon
            icon="ri:parent-line"
            className="text-[50px] text-[#7a1a63]"
          />
        </div>
      </div>
    </div>
    <div className="w-full  bg-[#00bfef]/10 white rounded-sm h-fit flex flex-col items-center gap-5 p-5">
      <div className="flex items-center justify-between w-full gap-5 ">
        <div className=" rounded-sm flex flex-col items-start justify-center">
          <p className="text-[14px] font-Regular text-brand-icon">
            Total Teachers
          </p>
          <h3 className="text-[35px] font-Medium">180.00k</h3>
        </div>
        <div className="flex flex-col item-center leading-6">
          <Icon
            icon="la:chalkboard-teacher"
            className="text-[50px] text-[#00c0ef]"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopHeader