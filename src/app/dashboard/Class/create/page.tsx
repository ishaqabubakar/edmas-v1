"use client";
import axiosInstance from "@/API/AXIOS";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserContext } from "@/contextAPI/generalContext";
import { LoaderIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const contextValue = useContext(UserContext);
  // const allTeachers = contextValue?.teacherBySchool;
  const schoolId = contextValue?.ctx?.schoolId;
  const router = useRouter()

  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [size, setSize] = useState("");


  const handleClassSubmit = async (e: any) => {
    e.preventDefault();
  
    try {
      if (!name) {
        return toast.error("Ensure all fields are filled correctly.");
      }
  
      contextValue?.setCreating(true);
  
      const response = await axiosInstance.post("/create-class", {
        classname: name,
        school: schoolId,
        size,
      });
  
      if (response.status === 200) {
        router.push('/dashboard/Class')
        setName("");
        setSize("");
        setTeacher("");
        contextValue?.setCreating(false);
        toast.success("Class created successfully");
      } else {
        contextValue?.setCreating(false);
        toast.error("Failed to create class. Please try again.");
      }
    } catch (error) {
      contextValue?.setCreating(false);
      console.error("Error creating class:", error);
      toast.error("An error occurred while creating the class.");
    }
  };
  

  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Class</h4>
          <Button className="rounded-sm" onClick={handleClassSubmit}>
            Add Class
            {contextValue?.creating && <LoaderIcon className="mr-2 animate-spin" size={14} />}
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {/* <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
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
                </div> */}
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Class Size</Label>
                  <Input
                    type="number"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Class size"
                    onChange={(e) => setSize(e.target.value)}
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
