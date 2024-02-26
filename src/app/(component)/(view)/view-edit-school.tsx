"use client";

import axiosInstance from "@/API/AXIOS";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserContext } from "@/contextAPI/generalContext";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useContext, useState } from "react";
import { toast } from "sonner";

const ViewAndEditSchool = () => {
  const contextValue = useContext(UserContext);
  const currentSchoolData = contextValue?.singleSchoolById;
  const [schoolName, setSchoolName] = useState(currentSchoolData?.fullname);
  const [email, setEmail] = useState(currentSchoolData?.email);
  const [location, setLocation] = useState(currentSchoolData?.location);
  const [contact, setcontact] = useState(currentSchoolData?.phone);
  const router = useRouter();

  const handleFormSubmission = async () => {
    try {
    
      contextValue?.setCreating(true);
      const res = await axiosInstance.put("/update-school", {
        fullname: schoolName,
        location,
        phone: contact,
        email,
        _id:contextValue?.paramID
      });

      if (res.status === 200) {
        router.push("/dashboard/Schools");
        contextValue?.setCreating(false);
        return toast.success("School updated successfully");
      } else {
        return toast.error("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      contextValue?.setCreating(false);
      toast.error(error.response.message);
    }
  };

  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
        <h4 className="text-[20px] font-Regular">
            {contextValue?.paramMode === "view" ? (
              <p>View School</p>
            ) : (
              <p>Edit School</p>
            )}
          </h4>
          {contextValue?.paramMode === "edit" && contextValue?.paramID && (
            <Button className="rounded-sm" onClick={handleFormSubmission}>
             Update School
              {contextValue?.creating && (
                <LoaderIcon className="mr-2 animate-spin" size={14} />
              )}
            </Button>
          )}
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
                    value={schoolName}
                    disabled={contextValue?.paramMode==='view'}
                    onChange={(e) => setSchoolName(e.target.value)}
                  />
                </div>
                <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Email</Label>
                  <Input
                    type="email"
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Email"
                    value={email}
                    disabled={contextValue?.paramMode==='view'}
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
                    value={location}
                    disabled={contextValue?.paramMode==='view'}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-5">
                <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                  <Label className="w-[200px]">Contact Number</Label>
                  <Input
                    type="phone"
                    value={contact}
                    className="rounded-sm focus-visible:outline-none"
                    placeholder="Phone"
                    disabled={contextValue?.paramMode==='view'}
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

export default ViewAndEditSchool;
