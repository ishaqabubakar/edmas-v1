"use client";
import axiosInstance from "@/API/AXIOS";
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
import { UserContext } from "@/contextAPI/generalContext";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const contextValue = useContext(UserContext);
  const classData = contextValue?.classBySchool;
  const sectionData = contextValue?.sectionBySchool;
  const subjectData = contextValue?.subjectBySchoolId;

  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [section, setSection] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const router = useRouter();
  const handleSubjectSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!className || !subject || !section || !startTime || !endTime) {
        return toast.error("Ensure all fields are filled correctly.");
      }
      contextValue?.setCreating(true);
      const response = await axiosInstance.post("/create-routine", {
        schoolId: contextValue?.ctx?.schoolId,
        classIds: className,
        sectionIds: section,
        subjectIds: subject,
        day: day,
        starttime: startTime,
        endtime: endTime,
      });
      if (response.status === 200) {
        router.push("/dashboard/Routines");

        contextValue?.setCreating(false);
        toast.success("Routine created successfully");
      } else {
        contextValue?.setCreating(false);
        toast.error("Failed to create routine. Please try again.");
      }
    } catch (error) {
      contextValue?.setCreating(false);
      console.error("Error creating routine:", error);
      toast.error("An error occurred while creating the routine.");
    }
  };
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Routine</h4>
          <Button className="rounded-sm" onClick={handleSubjectSubmit}>
            Add Routine
            {contextValue?.creating && (
              <LoaderIcon className="mr-2 animate-spin" size={14} />
            )}
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Routine Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Class Name</Label>
                    <Select onValueChange={(val) => setClassName(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Class"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent className="rounded-sm">
                        {classData?.length > 0 ? (
                          classData.map((item: any) => (
                            <SelectItem key={item?._id} value={item?.classname}>
                              {item?.classname}
                            </SelectItem>
                          ))
                        ) : (
                          <p className="p-2"> No data found</p>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Section Name</Label>
                    <Select onValueChange={(val) => setSection(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Section"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent className="rounded-sm">
                        {sectionData?.length > 0 ? (
                          sectionData.map((item: any) => (
                            <SelectItem key={item?._id} value={item?.name}>
                              {item?.name}
                            </SelectItem>
                          ))
                        ) : (
                          <p className="p-2"> No data found</p>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Subject Name</Label>
                    <Select onValueChange={(val) => setSubject(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Subject"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent className="rounded-sm">
                        {subjectData?.length > 0 ? (
                          subjectData.map((item: any) => (
                            <SelectItem
                              key={item?._id}
                              value={item?.subjectname}
                            >
                              {item?.subjectname}
                            </SelectItem>
                          ))
                        ) : (
                          <p className="p-2"> No data found</p>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Day</Label>
                    <Select onValueChange={(val) => setDay(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Day"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Monday">Monday</SelectItem>
                        <SelectItem value="Tuesday">Tuesday</SelectItem>
                        <SelectItem value="Wednesday">Wednesday</SelectItem>
                        <SelectItem value="Thurday">Thurday</SelectItem>
                        <SelectItem value="Friday">Friday</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Start Time</Label>
                    <Input
                      type="time"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="start time"
                      onChange={(e: any) => setStartTime(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">End Time</Label>
                    <Input
                      type="time"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="End time"
                      onChange={(e: any) => setEndTime(e.target.value)}
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

export default Page;
