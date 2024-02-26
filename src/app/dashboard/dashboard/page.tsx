"use client";
import CalendarDemo from "@/app/(component)/Calender/viewCalender";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contextAPI/generalContext";
import {
  ChevronRight,
  Clock,
  X,
} from "lucide-react";
import DigitalClock from "@/app/(component)/DigitalClock";
import TopHeaderStats from "./topHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [hideWelcomeMessage, setHideWelcomeMessage] = useState(true);
  const router = useRouter();

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
        <div className="h-full w-full flex flex-col gap-5">
          <div className="p-3 border-b h-full bg-white rounded-sm border">
            <div className="flex justify-between items-center">
              <p className="font-Medium py-3">Notiice Board</p>
              <Link
                href="/dashboard/NoticeBoard/notices"
                className="font-Medium py-3 hover:text-slate-900 flex gap-1 items-center"
              >
                <p> View all</p>
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="flex flex-col gap-[10px]">
              {contextValue?.noticeboardBySchoolId
                ?.slice(0, 4)
                .map((notice: any) => (
                  <div
                    key={notice._id}
                    onClick={ () => {
                     contextValue?.fetchNoticeBoardById(notice?._id);
                      router.push(`/dashboard/NoticeBoard/notices?notice=${notice._id}`);
                    }}
                    className="w-full flex bg-gray-50 h-[80px] border p-5 rounded-sm gap-5 items-center justify-between overflow-clip"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="font-Medium capitalize">{notice.title}</h3>
                      <div className="font-Regular text-[12px] flex items-center">
                        <p className="flex items-center">
                          <Clock size={16} className="text-gray-500 mr-1" />
                          <span className="text-gray-500 text-[14px] font-Medium">
                            {notice.date}
                          </span>
                        </p>
                        <span className="mx-1 text-[16px] text-gray-500">
                          |
                        </span>
                        <span className="font-Regular text-[14px] text-gray-500">
                          {notice.author}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
