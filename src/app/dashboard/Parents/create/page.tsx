import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Parent</h4>
          <Button className="rounded-sm">Add Parent</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0 font-Regular">Parent Information</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Full Name</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Email</Label>
                  <Input
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-5">
                <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Proffesion</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Proffession"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Contact Number</Label>
                  <Input
                    type="phone"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Phone"
                  />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Date of Birth</Label>
                  <Input
                    type="date"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Date of Birth"
                  />
                </div>
             </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
