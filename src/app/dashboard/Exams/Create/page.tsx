
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
import { Text } from "lucide-react";
import React from "react";

const page= () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Exam</h4>
          <Button className="rounded-sm">Add Exam</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Examination Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Exam Title</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Exam Title"
                  />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Class Name</Label>
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
                  <Label className="w-[200px]">Class Section</Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                      <SelectValue
                        placeholder="Select Section"
                        className="text-[16px] "
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Class 1B">Class 1B</SelectItem>
                      <SelectItem value="Class 2B">Class 2B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Subject Name</Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                      <SelectValue
                        placeholder="Select Subject"
                        className="text-[16px] "
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
        
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Instruction</Label>
                  <Textarea placeholder="Exams Instruction" className="text-sm focus-visible:outline-none" />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Start Date</Label>
                  <Input
                    type="time"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="End time"
                  />
                </div>
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">End Time</Label>
                  <Input
                    type="time"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder=""
                  />
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

export default page;
