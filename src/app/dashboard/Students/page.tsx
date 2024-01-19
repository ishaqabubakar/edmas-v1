"use client"

import StudentTable from "@/app/(component)/tables/studentTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">View Students</h4>
          <Link href={"/dashboard/Students/create"}>
            <Button className="rounded-sm">Add Student</Button>
          </Link>
        </div>
      </div>
      <StudentTable />
    </div>
  );
};

export default Dashboard;
