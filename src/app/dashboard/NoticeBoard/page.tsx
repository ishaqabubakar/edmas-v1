"use client";

import Back from "@/app/(component)/Back";
import EmptyData from "@/app/(component)/emptyData";
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
      {contextValue?.noticeboardBySchoolId?.length > 0 && <NoticeTable />}
      {contextValue?.noticeboardBySchoolId?.length == 0 && (
        <EmptyData message="You do not have class yet" />
      )}
    </div>
  );
};

export default Page;
