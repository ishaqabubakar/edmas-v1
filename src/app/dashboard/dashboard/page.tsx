"use client";
import CalendarDemo from "@/app/(component)/Calender/viewCalender";
import StudentParentStats from "@/app/(component)/chart/studentChart";
import { Icon } from "@iconify/react";
import { ChevronRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
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
      <div className="h-full w-full lg:flex-row flex flex-col gap-5">
        <div className="h-full w-full flex flex-col gap-5">
          <div className="p-3 border-b h-full bg-white rounded-sm border">
            <p className="font-Medium py-3">Notiice Board</p>
            <div className="w-full bg-gray-50 flex  p-2 rounded-sm border gap-5 items-center justify-between">
              <div>
                {" "}
                <h3 className="font-Medium capitalize">
                  Today is public holiday!!
                </h3>
                <p className="font-Regular text-[12px]">
                  Published by{" "}
                  <span className="font-Medium">School Head Master</span>
                </p>
              </div>
              <div className="border bg-white h-fit w-[80px] rounded-sm p-2 flex flex-col items-start justify-center">
                <p className="font-Regular">JAN, 03</p>
                <p className="font-Regular">2024</p>
              </div>
            </div>
          </div>
          <div className="p-3 border-b h-full bg-white rounded-sm border">
            <p className="font-Medium py-3">Upcoming Event</p>
            <div className="w-full bg-gray-50 flex  p-2 rounded-sm border gap-5 items-center justify-between">
              <div>
                {" "}
                <h3 className="font-Medium capitalize">
                  Speech and price given day
                </h3>
                <p className="font-Regular text-[12px]">
                  Published by{" "}
                  <span className="font-Medium">School Head Master</span>
                </p>
              </div>
              <div className="border bg-white h-fit w-[80px] rounded-sm p-2 flex flex-col items-start justify-center">
                <p className="font-Regular">AUG, 07</p>
                <p className="font-Regular">2024</p>
              </div>
            </div>
          </div>
          {/* <CalendarDemo /> */}
        </div>
        <div className="h-fit lg:w-[400px] rounded-sm border w-full ">
          <div className="p-3 border-b bg-white">
            <p className="font-Medium">Calender</p>
          </div>
          <div className=" flex flex-col gap-5 items-center justify-center">
            <div className="bg-white w-full h-full flex items-center justify-center">
              <CalendarDemo />
            </div>
            <div className="bg-white w-full h-full py-3">
              <StudentParentStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
