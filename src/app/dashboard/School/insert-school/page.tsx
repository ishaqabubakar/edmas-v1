import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create School</h4>
          <Button className="rounded-sm">Add school</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0 font-Regular">School Account</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 items-center w-[500px]">
                <Label className="w-[200px]">School Name</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="School name"
                />
              </div>
              <div className="flex gap-5 items-center w-[500px]">
                <Label className="w-[200px]">Email</Label>
                <Input
                  type="email"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-5 items-center w-[500px]">
                <Label className="w-[200px]">Password</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0">Other Information</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex gap-5">
              <div className="flex gap-5 items-center w-[500px]">
                <Label className="w-[200px]">Loc. Address</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Loc. Address"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 items-center w-[500px]">
                <Label className="w-[200px]">Contact Number</Label>
                <Input
                  type="number"
                  max={10}
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Phone"
                />
              </div>
              <div className="flex gap-5 items-center w-[500px]">
                <Label className="w-[200px]">School Logo</Label>
                <Input
                  type="file"
                  max={10}
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Phone"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
