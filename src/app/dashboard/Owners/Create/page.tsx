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
import Toast from "@/components/ui/toast";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("") as any;
  const [contact, setContact] = useState("");
  const [school, setSchool] = useState("") as any;
  const [schoolData, setSchoolData] = useState([
    { schoolName: "Crown Prince Academy", id: 1 },
    { schoolName: "Best of the Best", id: 2 },
    { schoolName: "Nhyiraba Preparatory", id: 3 },
    { schoolName: "Primus International School", id: 4 },
    { schoolName: "Best Brain Academy", id: 5 },
  ]) as any;

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const res = await axiosInstance.get("/all-school");
        const resData = JSON.stringify(res.data);
        setSchoolData(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSchoolData();
  }, []);

  const handleFormData = async () => {
    try {
      if (!fullName || !email || !password || !contact || !dob) {
        return Toast("error", "Please ensure all fields are filled correctly.");
      }
      const payLoad = {
        name: fullName,
        email,
        password,
        role: "owner",
        school: school,
        dob: dob,
        gender,
      } as any;
      const res = await axiosInstance.get("/register", payLoad);
      if (res.status === 200) {
        return Toast("success", "Account created successfully.");
      }
    } catch (error: any) {
      return Toast("error", error.message);
    }
  };

  return (
    <div className="p-5  overflow-y-scroll no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Owner</h4>
          <Button className="rounded-sm" onClick={handleFormData}>
            Add Owner
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 overflow-y-auto no-scrollbar">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0 font-Regular">Owner Account</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Full Name</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Full Name"
                  onChange={(e) => setFullname(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Password</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setDob(e.target.value)}
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
                  type="number"
                  max={10}
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Phone"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">School</Label>
                <Select onValueChange={(val) => setSchool(val)}>
                  <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                    <SelectValue
                      placeholder="Select School"
                      className="text-[16px] "
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {schoolData.map((item: any) => (
                      <SelectItem key={item.id} value={item.schoolName}>
                        {item.schoolName}
                      </SelectItem>
                    ))}
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

export default Dashboard;
