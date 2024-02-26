"use client";

import ViewAndEditSchool from "@/app/(component)/(view)/view-edit-school";
import SchoolTable from "@/app/(component)/tables/schoolTable";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contextAPI/generalContext";
import Link from "next/link";
import React, { useContext } from "react";

const page = () => {
  const contextValue = useContext(UserContext);
  return (
    <>
    {
      !(contextValue?.paramID && contextValue?.paramMode) &&    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">View Schools</h4>

          <Link href={"/dashboard/Schools/create"}>
            <Button className="rounded-sm">Create School</Button>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-full border rounded-sm flex items-center justify-center">
          <SchoolTable />
        </div>
      </div>
    </div>
    }
  {contextValue?.paramID && contextValue?.paramMode && <ViewAndEditSchool />}
    </>
  );
};

export default page;
