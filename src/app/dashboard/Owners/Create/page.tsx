"use client";

import axiosInstance from "@/API/AXIOS";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/customInput";
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
import { generateRandomPassword } from "@/helpers/generatePassword";
import { LoaderIcon } from "lucide-react";

import React, { useContext, useState } from "react";
import { toast } from "sonner";

const Dashboard = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("") as any;
  const [contact, setContact] = useState("");
  const [school, setSchool] = useState("") as any;
  const contextValue = useContext(UserContext);
  const [creating, setCreating] = useState(false);


  const schoolData = contextValue?.schoolData;

  const handleFormData = async (e: any) => {
    const payLoad = {
      name: fullName,
      email: email,
      password,
      role: "owner",
      school: school,
      dob: dob,
      gender,
    };
    e.preventDefault();
    alert(email);

    try {
      if (!fullName || !email || !password || !contact || !dob) {
        return toast.error("Ensure all fieds are correctly filled");
      }

      setCreating(true);
      const res = await axiosInstance.post("/register", { data: payLoad });
      if (res.status === 201) {
        setCreating(false);
        return toast.success("Dataa saved successfully");
      }
    } catch (error: any) {
      return toast.error(error.message);
    }
  };

  const handleGeneratePassword = (e: any) => {
    e.preventDefault();
    const newPassword = generateRandomPassword(20);
    setPassword(newPassword);
  };
  return (
    <div className="p-5  overflow-y-scroll no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Owner</h4>
          <Button className="rounded-sm" onClick={handleFormData}>
            Add Owner {creating && <LoaderIcon className="mr-2 animate-spin" />}
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
              <div className="flex flex-col lg:gap-5 gap-3 items-start lg:w-[500px] w-full ">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col mt-[-10px]">
                  <Label className="w-[200px]">Password</Label>
                  <InputField
                    type="password"
                    border={"border px-5 border-gray-200 rounded-sm"}
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                    width={"w-full"}
                    required={true}
                    defaultValue={undefined}
                  />
                </div>
                <Button
                  className="rounded-sm lg:ml-[160px] lg:w-[340px] w-full"
                  variant={"outline"}
                  onClick={handleGeneratePassword}
                >
                  Generate Password
                </Button>
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
                  <SelectContent className="rounded-sm">
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
                  <SelectContent className="rounded-sm">
                    {schoolData?.length > 0 ? (
                      schoolData.map((item: any) => (
                        <SelectItem key={item?._id} value={item?.fullname}>
                          {item?.fullname}
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

export default Dashboard;
