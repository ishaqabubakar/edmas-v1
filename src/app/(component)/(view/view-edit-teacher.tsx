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

const ViewAndEditTeacher = () => {
  const contextValue = useContext(UserContext);
  const router = useRouter();
  const [name, setName] = useState(contextValue?.teacherById?.name);
  const [dob, setDob] = useState(contextValue?.teacherById?.dob);
  const [email, setEmail] = useState(contextValue?.teacherById?.email);
  const [address, setAddress] = useState(contextValue?.teacherById?.address);
  const [phone, setPhone] = useState(contextValue?.teacherById?.phone);
  const [gender, setGender] = useState(contextValue?.teacherById?.gender);
  const [className, setClassName] = useState(contextValue?.teacherById?.class);

  const payLoad = {
    name,
    dob,
    email,
    address,
    phone,
    gender,
    class: className,
    role: "teacher",
    school: contextValue?.ctx?.schoolId,
  };
  const handleFormSubmission = async (e: any) => {
    try {
    //    if(contextValue?.ctx?.role !=='owner' || contextValue?.ctx?.role !=='admin'){
    //     return toast.error('Sorry you do not have permission to edit ')
    //    } 
      contextValue?.setCreating(true);
      const res = await axiosInstance.put("/update-teacher", { id: contextValue?.paramID, data: payLoad });
      if (res.status === 200) {
        toast.success(res.data.message);
        router.push("/dashboard/Teachers");
        contextValue?.setCreating(false);
      }
    } catch (error: any) {
      contextValue?.setCreating(false);
      return toast.error(error.response.mesage);
    }
  };

  return (
    <div className="p-5  overflow-y-scroll no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">
            {contextValue?.paramMode === "view" ? (
              <p>View Teacher</p>
            ) : (
              <p>Edit Teacher</p>
            )}
          </h4>
          {contextValue?.paramMode === "edit" && contextValue?.paramID && (
            <Button className="rounded-sm" onClick={handleFormSubmission}>
             Update Teacher
              {contextValue?.creating && (
                <LoaderIcon className="mr-2 animate-spin" size={14} />
              )}
            </Button>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 overflow-y-auto no-scrollbar">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0 font-Regular">Teacher Account</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Teacher Name</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Teacher's Name"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                  disabled={contextValue?.paramMode==='view'}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Email</Label>
                <Input
                  type="email"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  disabled={contextValue?.paramMode==='view'}
                />
              </div>
              {/* <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Password</Label>
                <Input
                  type="password"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  disabled={contextValue?.paramMode==='view'}
                />
              </div> */}
            </div>
          </form>
        </div>
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0">Other Information</p>
          </div>
          <form className="flex flex-col gap-5 p-5 h-fit">
            <div className="flex flex-col gap-5">
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Date of birth</Label>
                <Input
                  type="date"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Teacher's Name"
                  value={dob}
                  onChange={(e: any) => setDob(e.target.value)}
                  disabled={contextValue?.paramMode==='view'}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Gender</Label>
                <Select onValueChange={(val) => setGender(val)}   disabled={contextValue?.paramMode==='view'}   value={gender}>
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
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Contact Number</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e: any) => setPhone(e.target.value)}
                  disabled={contextValue?.paramMode==='view'}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Address</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Address"
                  value={address}
                  onChange={(e: any) => setAddress(e.target.value)}
                  disabled={contextValue?.paramMode==='view'}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Class</Label>
                <Select onValueChange={(val) => setClassName(val)}   disabled={contextValue?.paramMode==='view'}   value={className}>
                  <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                    <SelectValue
                      placeholder="Select class"
                      className="text-[16px] "
                    />
                  </SelectTrigger>
                  <SelectContent className="rounded-sm">
                    {contextValue?.classBySchool?.length > 0 ? (
                      contextValue?.classBySchool?.map((item: any) => (
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewAndEditTeacher;
