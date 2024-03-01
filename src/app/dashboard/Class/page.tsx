"use client";
import Back from "@/app/(component)/Back";
import EmptyData from "@/app/(component)/emptyData";
import ClassTable from "@/app/(component)/tables/classTable";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contextAPI/generalContext";

import Link from "next/link";
import React, { useContext } from "react";

const Dashboard = () => {
  const contextValue = useContext(UserContext);
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <div className="flex gap-2 items-center">
            <Back />
            <h4 className="text-[20px] font-Regular">Create Class</h4>
          </div>
          <Link href={"/dashboard/Class/create"}>
            <Button className="rounded-sm">Create Class</Button>
          </Link>
        </div>
      </div>
      {contextValue?.classBySchool?.length > 0 && <ClassTable />}

      {contextValue?.classBySchool?.length == 0 && (
        <EmptyData message="You do not have class yet" />
      )}
    </div>
  );
};

export default Dashboard;
