"use client";

import TableComponent from "@/app/(component)/tables/ownersTable";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export const Owner = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">View Owners</h4>
          <Link href={"/dashboard/Owners/Create"}>
            <Button className="rounded-sm">Add Owner</Button>
          </Link>
        </div>
      </div>
      <TableComponent />
    </div>
  );
};

export default Owner;
