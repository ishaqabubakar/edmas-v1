"use client";

import ViewAndEdit from "@/app/(component)/(view)/View-edit-student";
import Back from "@/app/(component)/Back";
import EmptyData from "@/app/(component)/emptyData";
import StudentTable from "@/app/(component)/tables/studentTable";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contextAPI/generalContext";
import Link from "next/link";
import React, { useContext } from "react";

const Dashboard = () => {
  const contextValue = useContext(UserContext);
  return (
    <>
      {!(contextValue?.paramID && contextValue?.paramMode) && (
        <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
          <div className="w-full flex gap-5">
            <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
              <div className="flex gap-2 items-center ">
                <Back />
                <h4 className="text-[20px] font-Regular sm:block hidden">View Students</h4>
              </div>
              <Link href={"/dashboard/Students/create"}>
                <Button className="rounded-sm">Create Student</Button>
              </Link>
            </div>
          </div>

          {contextValue?.studentBySchool?.length > 0 && <StudentTable />}

          {contextValue?.studentBySchool?.length == 0 && (
            <EmptyData message="No Student data at the moment" />
          )}
        </div>
      )}
      {contextValue?.paramID && contextValue?.paramMode && <ViewAndEdit />}
    </>
  );
};

export default Dashboard;
