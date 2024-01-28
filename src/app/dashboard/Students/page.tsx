"use client";

import ViewAndEdit from "@/app/(component)/(view/View-edit-student";
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
              <h4 className="text-[20px] font-Regular">View Students</h4>
              <Link href={"/dashboard/Students/create"}>
                <Button className="rounded-sm">Create Student</Button>
              </Link>
            </div>
          </div>
          <StudentTable />
        </div>
      )}
      {contextValue?.paramID && contextValue?.paramMode && <ViewAndEdit />}
    </>
  );
};

export default Dashboard;
