"use client";

import axiosInstance from "../../../../API/AXIOS";
import Back from "../../../(component)/Back";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "@/components/ui/label";
import { UserContext } from "@/contextAPI/generalContext";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

const Dashboard = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const contextValue = useContext(UserContext);
  const router = useRouter();

  const handleFormData = async (e: any) => {
    const payLoad = {
      name: fullName,
      email: email,
      password,
      role: "owner",
      school: contextValue?.ctx?.name
    };
    e.preventDefault();

    try {
      if (!fullName || !email || !password) {
        return alert("Ensure all fieds are correctly filled");
      }

      contextValue?.setCreating(true);
      const res = await axiosInstance.post("/register", { data: payLoad });
      if (res.status === 201) {
        contextValue?.setCreating(false);
        return router.push("/dashboard/Owners");
      }
    } catch (error: any) {
      contextValue?.setCreating(false);
      return toast.error(error.message);
    }
  };

  return (
    <div className="p-5  overflow-y-scroll no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <div className="flex gap-2 items-center">
            <Back />
            <h4 className="text-[20px] font-Regular">Create Admin</h4>
          </div>
          <Button className="rounded-sm" onClick={handleFormData}>
            Add Admin
            {contextValue?.creating && (
              <LoaderIcon className="mr-2 animate-spin" size={14} />
            )}
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 overflow-y-auto no-scrollbar">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0 font-Regular">Account Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                <Label className="w-[200px]">Full Name</Label>
                <Input
                  type="text"
                  className="rounded-sm focus-visible:outline-none"
                  placeholder="Full Name"
                  onChange={(e: any) => setFullname(e.target.value)}
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
      </div>
    </div>
  );
};

export default Dashboard;
