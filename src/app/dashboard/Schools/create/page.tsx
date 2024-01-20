"use client";

import axiosInstance from "@/API/AXIOS";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useState } from "react";
import { toast } from "sonner";

const Dashboard = () => {
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setcontact] = useState("");

  const handleFormSubmission = async () => {
    try {
      if (!schoolName || !email || !location || !contact) {
        return toast.error("Invalid email or password");
      }

      const res = await axiosInstance.post("/create-school", {
        fullname: schoolName,
        location,
        phone: contact,
        email,
      });

      if (res.status === 200) {
        return toast.success("School created successfully");
      } else {
        return toast.error("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      alert(error);
    }
  };

  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create School</h4>
          <Button className="rounded-sm" onClick={handleFormSubmission}>
            Add School
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5">
            <p className="p-0 font-Regular">School Information</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">School Name</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="School name"
                    onChange={(e) => setSchoolName(e.target.value)}
                  />
                </div>
                <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Email</Label>
                  <Input
                    type="email"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-5">
                <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Location</Label>
                  <Input
                    type="text"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
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
                    onChange={(e) => setcontact(e.target.value)}
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
