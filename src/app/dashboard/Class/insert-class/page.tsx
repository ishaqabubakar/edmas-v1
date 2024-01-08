import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Class</h4>
          <Button className="rounded-sm">Add Class</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0 font-Regular">Class Information</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className="lg:flex-row flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Class Name</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Class Name"
                  />
                </div>
                <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Email</Label>
                  <Input
                    type="email"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="lg:flex-row flex flex-col gap-5">
                <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Admission Number</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Admission"
                  />
                </div>
                <div className="flex lg:flex-row gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Age</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Age"
                  />
                </div>
              </div>
              <div className="lg:flex-row flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Gender</Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                      <SelectValue
                        placeholder="Select gender"
                        className="text-[16px] "
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Date of birth</Label>
                  <Input
                    type="date"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Date of birth"
                  />
                </div>
              </div>
              <div className="lg:flex-row flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Contact Number</Label>
                  <Input
                    type="phone"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Phone"
                  />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">House Address</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="House Address"
                  />
                </div>
              </div>
             <div className="flex gap-5 lg:flex-row flex-col">
             <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Class</Label>
                <Select>
                  <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                    <SelectValue
                      placeholder="Select Class"
                      className="text-[16px] "
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Class 1">Class 1</SelectItem>
                    <SelectItem value="Class 2">Class 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Parent</Label>
                <Select>
                  <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                    <SelectValue
                      placeholder="Select Parent"
                      className="text-[16px] "
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mavis Normanyo">Mavis Normanyo</SelectItem>
                    <SelectItem value="Mercy Aboagye">Mercy Aboagye</SelectItem>
                  </SelectContent>
                </Select>
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
