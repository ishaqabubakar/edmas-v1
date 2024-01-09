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
                Total School
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
                Total School
              </p>
              <h3 className="text-[35px] font-Medium">180.00k</h3>
            </div>
            <div className="flex flex-col item-center leading-6">
              <Icon
                icon="ri:school-line"
                className="text-[50px] text-[#1a773d]"
              />
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#7a1a63]/10 white rounded-sm h-fit flex flex-col items-center gap-5 p-5">
          <div className="flex items-center justify-between w-full gap-5 ">
            <div className=" rounded-sm flex flex-col items-start justify-center">
              <p className="text-[14px] font-Regular text-brand-icon">
                Total School
              </p>
              <h3 className="text-[35px] font-Medium">180.00k</h3>
            </div>
            <div className="flex flex-col item-center leading-6">
              <Icon
                icon="ri:school-line"
                className="text-[50px] text-[#7a1a63]"
              />
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#00bfef]/10 white rounded-sm h-fit flex flex-col items-center gap-5 p-5">
          <div className="flex items-center justify-between w-full gap-5 ">
            <div className=" rounded-sm flex flex-col items-start justify-center">
              <p className="text-[14px] font-Regular text-brand-icon">
                Total School
              </p>
              <h3 className="text-[35px] font-Medium">180.00k</h3>
            </div>
            <div className="flex flex-col item-center leading-6">
              <Icon
                icon="ri:school-line"
                className="text-[50px] text-[#00c0ef]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex gap-5">
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
                  Published by < span className="font-Medium">School Head Master</span>
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
                  Published by < span className="font-Medium">School Head Master</span>
                </p>
              </div>
              <div className="border bg-white h-fit w-[80px] rounded-sm p-2 flex flex-col items-start justify-center">
                <p className="font-Regular">AUG, 07</p>
                <p className="font-Regular">2024</p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div className="bg-white h-full w-[400px] rounded-sm border">
          <div className="p-3 border-b">
            <p className="font-Medium">Student/pagent</p>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <StudentParentStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
