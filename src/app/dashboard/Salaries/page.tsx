import Back from "@/app/(component)/Back";
import SalariesTable from "@/app/(component)/tables/salariesTable";
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
            <h4 className="text-[20px] font-Regular">View Salaries</h4>
          </div>
          <Link href={"/dashboard/Salaries/Create"}>
            <Button className="rounded-sm">Create Salary</Button>
          </Link>
        </div>
      </div>
      <SalariesTable />
    </div>
  );
};

export default page;
