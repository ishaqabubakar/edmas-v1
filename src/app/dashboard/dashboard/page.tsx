"use client";
import CalendarDemo from "@/app/(component)/Calender/viewCalender";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contextAPI/generalContext";
import { X } from "lucide-react";
import SchedulerTable from "@/app/(component)/Scheduler";
import DigitalClock from "@/app/(component)/DigitalClock";
import TopHeaderStats from "./topHeader";

 const Page = () => {
  const [hideWelcomeMessage, setHideWelcomeMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideWelcomeMessage(false);
    }, 20000);
  });
  const contextValue = useContext(UserContext);
  const currentUser = contextValue?.ctx;
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex flex-col gap-5">
        {hideWelcomeMessage && (
          <div className="h-[100px] bg-white w-full rounded-sm border flex items-center  p-5 justify-between">
            <div className="">
              {" "}
              <h3 className="lg:text-[24px] font-Regular p-0 text-[16px]">
                Welcome to {currentUser?.name},
              </h3>
              <p className="hidden lg:block">{currentUser?.fullname}</p>
            </div>
            <X
              onClick={() => setHideWelcomeMessage(false)}
              className="hover:text-red-600 cursor-pointer transition-all ease-in-out duration-500"
            />
          </div>
        )}
        <TopHeaderStats />
      </div>
      <div className="h-full w-full lg:flex-row flex flex-col gap-5">
        <div className="h-full w-full flex flex-col gap-5 overflow-clip">
          <div className="p-3 border-b h-full bg-white rounded-sm border">
            <p className="font-Medium py-3">Notiice Board</p>
            <div className="w-full flex  p-2 rounded-sm gap-5 items-center justify-between overflow-clip">
              {/* <div>
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
              </div> */}
              <SchedulerTable />
            </div>
          </div>
          {/* <div className="p-3 border-b h-full bg-white rounded-sm border">
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
          </div> */}
          {/* <CalendarDemo /> */}
        </div>
        <div className="h-fit lg:w-[400px] rounded-sm border w-full ">
          <div className="p-3 border-b bg-white">
            <p className="font-Medium">Calender</p>
          </div>
          <div className=" flex flex-col gap-5 items-center justify-center">
            <div className="bg-white w-full h-full flex items-center justify-center">
              <DigitalClock />
            </div>
            <div className="bg-white w-full h-full py-3">
              <CalendarDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
