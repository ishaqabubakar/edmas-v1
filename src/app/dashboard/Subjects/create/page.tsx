"use client";
import axiosInstance from "@/API/AXIOS";
import Back from "@/app/(component)/Back";
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

  const router = useRouter();

  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [className, setClassName] = useState("");
  const allTeachers = contextValue?.teacherBySchool;
  const classData = contextValue?.classBySchool;

  const handleSubjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!name || !teacher) {
        return toast.error("Ensure all fields are filled correctly.");
      }

      contextValue?.setCreating(true);
      const response = await axiosInstance.post("/create-subject", {
        subjectname: name,
        school: contextValue?.ctx?.schoolId,
        teacher,
        classId: className,
      });

      if (response.status === 200) {
        contextValue?.setCreating(false);
        return router.push("/dashboard/Subjects");
      }
    } catch (error: any) {
      contextValue?.setCreating(false);
      return console.error("Error creating subject:", error);
    }
  }
    return (
      <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
        <div className="w-full flex gap-5">
          <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
            <div className="flex gap-2 items-center">
              <Back />
              <h4 className="text-[20px] font-Regular">Create Subject</h4>
            </div>
            <Button className="rounded-sm" onClick={handleSubjectSubmit}>
              Add Subject
              {contextValue?.creating && (
                <LoaderIcon className="mr-2 animate-spin" size={14} />
              )}
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 h-full">
          <div className="w-full bg-white h-fit border rounded-sm ">
            <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
              <p className="p-0 font-Regular">Subject Details</p>
            </div>
            <form className="flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-5">
                <div className="lg:flex-row flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Subject Name</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Title"
                      onChange={(e: any) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Class</Label>
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
                  <div className="flex flex-col gap-5">
                    <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                      <Label className="w-[200px]">Teacher</Label>
                      <Select onValueChange={(val) => setTeacher(val)}>
                        <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                          <SelectValue
                            placeholder="Select Teacher"
                            className="text-[16px] "
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {allTeachers?.length > 0 ? (
                            allTeachers.map((item: any) => (
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
