"use client";
import { useContext } from "react";
import { UserContext } from "@/contextAPI/generalContext";
import { ChevronLeft, Clock } from "lucide-react";

import { useRouter } from "next/navigation";
import { ViewSingleNotice } from "../../../(component)/singleNotice";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const contextValue = useContext(UserContext);
  
  return (
    <>
      {!contextValue?.noticeID ? (
        <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
          <div className="h-full w-full lg:flex-row flex flex-col gap-5">
            <div className="h-full w-full flex flex-col gap-5">
              <div className="p-3 border-b h-full  rounded-sm overflow-y-scroll">
                <div className="flex justify-between items-center">
                  <p className="font-Medium py-3">All Notices</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  {contextValue?.noticeboardBySchoolId?.map((notice: any) => (
                    <div
                      key={notice._id}
                      onClick={() => {
                        contextValue?.fetchNoticeBoardById(notice?._id);
                        router.push(`/dashboard/NoticeBoard/notices?notice=${notice._id}`);
                      }}
                      className="w-full flex bg-white h-[80px] border p-5 rounded-sm gap-5 items-center justify-between overflow-clip"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="font-Medium capitalize">
                          {notice.title}
                        </h3>
                        <div className="font-Regular text-[12px] flex items-center">
                          <p className="flex items-center">
                            <Clock size={16} className="text-gray-500 mr-1" />
                            <span className="text-gray-500 text-[14px] font-Medium">
                              {notice?.date}
                            </span>
                          </p>
                          <span className="mx-1 text-[16px] text-gray-500">
                            |
                          </span>
                          <span className="font-Regular text-[14px] text-gray-500">
                            {notice?.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
          <div className="h-full w-full lg:flex-row flex flex-col gap-5">
            <div className="h-full w-full flex flex-col gap-5">
              <div className="p-3 border-b h-full rounded-sm  overflow-y-scroll">
                <div className="flex items-center cursor-pointer">
                  <ChevronLeft size={12} />
                  <p onClick={()=>router.back()} className="font-Medium py-3 bg-transparent text-black hover:bg-transparent" >Back</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                 
                    <div
                      className="w-full flex flex-col bg-white  border p-5 rounded-sm gap-5 "
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="font-Medium capitalize text-[20px]">
                          {contextValue?.noticeById?.title}
                        </h3>
                        <div className="font-Regular text-[12px] flex items-center">
                          <p className="flex items-center">
                            <Clock size={14} className="text-gray-500 mr-1" />
                            <span className="text-gray-500 text-[12px] font-Medium">
                            {contextValue?.noticeById?.date}
                            </span>
                          </p>
                          <span className="mx-1 text-[12px] text-gray-500">
                            |
                          </span>
                          <span className="font-Regular text-[12px] text-gray-500">
                          {contextValue?.noticeById?.author}
                          </span>
                        </div>
                      </div>
                      <p className="text-[14px] font-Regular">{contextValue?.noticeById?.description}</p>
                    </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
