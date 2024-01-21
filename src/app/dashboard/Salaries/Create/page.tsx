
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
import { Textarea } from "@/components/ui/textarea";
import React from "react";

 const page= () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Salary</h4>
          <Button className="rounded-sm">Add Salary</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Salary Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Staff Name</Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                      <SelectValue
                        placeholder="Select Staff"
                        className="text-[16px] "
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="John Mensah">John Mensah</SelectItem>
                      <SelectItem value="Mercy Aboagye">Mercy Aboagye</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Staff Type</Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                      <SelectValue
                        placeholder="Select Type"
                        className="text-[16px] "
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Teacher">Teacher</SelectItem>
                      <SelectItem value="Supporting">Supporting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Description</Label>
                  <Textarea placeholder="Description" className="text-sm focus-visible:outline-none" />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Amount Paid</Label>
                  <Input
                    type="number"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Amount"
                  />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Transaction Date</Label>
                  <Input
                    type="Date"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder=""
                  />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Status</Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                      <SelectValue
                        placeholder="Select Status"
                        className="text-[16px] "
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Paid">Paid</SelectItem>
                      <SelectItem value="Not Paid">Not Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page
