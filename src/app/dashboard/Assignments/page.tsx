import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular sm:block hidden">View Assignments</h4>
          <Link href={"/dashboard/Assignments/Create"}>
            <Button className="rounded-sm">Add Assignment</Button>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white flex h-full border items-center rounded-sm justify-center">
          <p className="text-gray-400">No Assignment record yet</p>
        </div>
      </div>
    </div>
  );
};

export default page;
