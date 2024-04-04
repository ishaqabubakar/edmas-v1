"use client";

import TableComponent from "@/app/(component)/tables/ownersTable";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contextAPI/generalContext";
import { useContext } from "react";
import Link from "next/link";
import ViewAndEditAccount from "@/app/(component)/(view)/view-edit-owner";
import Back from "@/app/(component)/Back";


 const Page = () => {
  const contextValue = useContext(UserContext)
  return (
    <>
   {!(contextValue?.paramID && contextValue?.paramMode)  && <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
        <div className="flex gap-2 items-center">
              <Back />
              <h4 className="text-[20px]  font-Regular sm:block hidden">View Admin</h4>
            </div>
         <Link href={"/dashboard/Account/Create"}>
            <Button className="rounded-sm">Create Admin</Button>
          </Link>
        </div>
      </div>
      <TableComponent />
      
    </div>}
    {contextValue?.paramID && contextValue?.paramMode && <ViewAndEditAccount />}
    </>
  );
};

export default Page;
