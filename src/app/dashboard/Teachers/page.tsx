"use client";

import ViewAndEditTeacher from "@/app/(component)/(view)/view-edit-teacher";
import Back from "@/app/(component)/Back";
import EmptyData from "@/app/(component)/emptyData";
import TeachersTable from "@/app/(component)/tables/teachersTable";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contextAPI/generalContext";

import Link from "next/link";
import React, { useContext } from "react";

const Page = () => {
  const contextValue = useContext(UserContext);
  return (
    <>
      {!(contextValue?.paramID && contextValue?.paramMode) && (
        <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
          <div className="w-full flex gap-5">
            <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
              <div className="flex gap-2 items-center">
                <Back />
                <h4 className="text-[20px] font-Regular sm:block hidden">View Teachers</h4>
              </div>

              <Link href={"/dashboard/Teachers/create"}>
                {" "}
                <Button className="rounded-sm">Create teacher</Button>
              </Link>
            </div>
          </div>

          {contextValue?.teacherBySchool?.length > 0 && <TeachersTable />}

          {contextValue?.teacherBySchool?.length == 0 && (
            <EmptyData message="You do not have teacher yet" />
          )}
        </div>
      )}

      {contextValue?.paramID && contextValue?.paramMode && (
        <ViewAndEditTeacher />
      )}
    </>
  );
};

export default Page;
