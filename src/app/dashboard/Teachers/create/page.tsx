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
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [className, setClassName] = useState("");

  const payLoad = {
    name,
    dob,
    email,
    password,
    address,
    phone,
    gender,
    class: className,
    role: "teacher",
    school: contextValue?.ctx?.schoolId,
  };
  const handleFormSubmission = async (e: any) => {
    try {
      if (!email || !name || !password || !className) {
        return toast.error("Please ensure all fieds are correctly filled");
      }
      contextValue?.setCreating(true);
      const res = await axiosInstance.post("/register", { data: payLoad });
      if (res.status === 201) {
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
          <div className="flex gap-2 items-center">
            <Back />
            <h4 className="text-[20px] font-Regular">Create Teachers</h4>
          </div>
          <Button className="rounded-sm" onClick={handleFormSubmission}>
            Add teacher
            {contextValue?.creating && (
              <LoaderIcon className="mr-2 animate-spin" size={14} />
            )}
          </Button>
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
                  onChange={(e: any) => setName(e.target.value)}
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
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Password</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Password"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
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
                  onChange={(e: any) => setDob(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Gender</Label>
                <Select onValueChange={(val) => setGender(val)}>
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
                  onChange={(e: any) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Address</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Address"
                  onChange={(e: any) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Class</Label>
                <Select onValueChange={(val) => setClassName(val)}>
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

export default Page;
