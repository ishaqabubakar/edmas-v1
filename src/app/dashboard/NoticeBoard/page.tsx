"use client";

import Back from "@/app/(component)/Back";
import NoticeTable from "@/app/(component)/tables/noticeBoardTable";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contextAPI/generalContext";

import Link from "next/link";
import React, { useContext } from "react";

const Page = () => {
  const contextValue = useContext(UserContext);
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
        <div className="flex gap-2 items-center">
              <Back />
              <h4 className="text-[20px] font-Regular">View Noticeboard</h4>
            </div>
          <Link href={"/dashboard/NoticeBoard/Create"}>
            <Button className="rounded-sm">Create Notice</Button>
          </Link>
        </div>
      </div>
      {contextValue?.noticeboardBySchoolId?.length == 0 && (
        <div className="w-full flex flex-col gap-5 h-full">
          <div className="w-full bg-white h-full border rounded-sm flex items-center justify-center">
            <p className="text-gray-400">No Notice records yet</p>
          </div>
        </div>
      )}
      <NoticeTable />
    </div>
  );
};

export default Page;
