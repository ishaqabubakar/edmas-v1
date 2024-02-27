"use client";

import Back from "@/app/(component)/Back";
import SubjectTable from "@/app/(component)/tables/subjectTable";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <div className="flex gap-2 items-center">
            <Back />
            <h4 className="text-[20px] font-Regular">View Subjects</h4>
          </div>
          <Link href={"/dashboard/Subjects/create"}>
            <Button className="rounded-sm">Create Subject</Button>
          </Link>
        </div>
      </div>
      <SubjectTable />
    </div>
  );
};

export default page;
