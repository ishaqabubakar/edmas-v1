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


 const Page= () => {
  const contextValue = useContext(UserContext);
  const classData = contextValue?.classBySchool;
  const sectionData = contextValue?.sectionBySchool;
  const creating = contextValue?.creating
  const setCreating = contextValue?.setCreating
  const router = useRouter()
  const [sName, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [className, setClassName] = useState("");
  const [adminNumber, setAdminNumber] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [pName, setPname] = useState("");
  const [gender, setGender] = useState("");
  const [pPhone, setPphone] = useState("");
  const [pProffession, setPproffession] = useState("");
  const [pEmail, setPemail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sectionName, setSectionName] = useState("");
  

  const payLoad = {
    name: sName,
    dob: dob,
    email: email,
    password: password,
    address: address,
    phonenumber: phone,
    gender: gender,
    class: className,
    section: sectionName,
    role: "student",
    admissioncode: adminNumber,
    school: contextValue?.ctx?.schoolId,
    parent: {
      fullname: pName,
      phone: pPhone,
      proffession: pProffession,
      parentemail: pEmail,
    },
  };

  const handleFormSubmission = async (e: any) => {
    try {
      if (!email || !sName || !password || !className) {
        return toast.error("Please ensure all fieds are correctly filled");
      }
      setCreating(true);
      const res = await axiosInstance.post("/register", { data: payLoad });
      if (res.status === 201) {
        toast.success(res.data.message);
        setCreating(false);
        return router.push('/dashboard/Students')
      }
    } catch (error: any) {
      setCreating(false);
      return toast.error(error.response.mesage);
    }
  };

  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
        <div className="flex gap-2 items-center">
              <Back />
              <h4 className="text-[20px] font-Regular">Create Students</h4>
            </div>
          <Button className="rounded-sm" onClick={handleFormSubmission}>
            Add Student
            {creating && <LoaderIcon className="mr-2 animate-spin" size={14} />}
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full h-fit  rounded-sm ">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 bg-white  rounded-sm border">
              <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 bg-white">
                <p className="p-0 font-Regular">Student Information</p>
              </div>
              <div className="p-5 w-full flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Student Name</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Student name"
                      onChange={(e: any) => setSname(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Email</Label>
                    <Input
                      type="email"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Email"
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Password</Label>
                    <Input
                      type="password"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Password"
                      onChange={(e: any) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Admission Number</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Admission"
                      onChange={(e: any) => setAdminNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Age</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Age"
                      onChange={(e: any) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
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
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Date of birth</Label>
                    <Input
                      type="date"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Date of birth"
                      onChange={(e: any) => setDob(e.target.value)}
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
                      onChange={(e: any) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">House Address</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="House Address"
                      onChange={(e: any) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5  flex-col">
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
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Section</Label>
                    <Select onValueChange={(val) => setSectionName(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select section"
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
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-white rounded-sm border h-fit">
              <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 bg-white">
                <p className="p-0 font-Regular">Parent Information</p>
              </div>
              <div className="flex flex-col p-5 gap-5">
                <div className=" flex flex-col gap-5">
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Full name</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Full name"
                      onChange={(e: any) => setPname(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Email</Label>
                    <Input
                      type="email"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Email"
                      onChange={(e: any) => setPemail(e.target.value)}
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Proffession</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Proffession"
                      onChange={(e: any) => setPproffession(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Phone</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Phone"
                      onChange={(e: any) => setPphone(e.target.value)}
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
