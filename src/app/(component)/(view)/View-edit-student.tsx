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
import Back from "../Back";

const ViewAndEdit = () => {
  const contextValue = useContext(UserContext);
  const classData = contextValue?.classBySchool;
  const sectionData = contextValue?.sectionBySchool;
  const creating = contextValue?.creating;
  const setCreating = contextValue?.setCreating;
  const router = useRouter();
  const [sName, setSname] = useState(contextValue?.studentById?.name);
  const [email, setEmail] = useState(contextValue?.studentById?.email);
  // const [password, setPassword] = useState("");
  const [className, setClassName] = useState(contextValue?.studentById?.class);
  const [adminNumber, setAdminNumber] = useState(
    contextValue?.studentById?.admissioncode
  );
  const [age, setAge] = useState(contextValue?.studentById?.age);
  const [dob, setDob] = useState(contextValue?.studentById?.dob);
  const [pName, setPname] = useState(contextValue?.studentById?.parentName);
  const [gender, setGender] = useState(contextValue?.studentById?.gender);
  const [pPhone, setPphone] = useState(contextValue?.studentById?.phone);
  const [pProffession, setPproffession] = useState(
    contextValue?.studentById?.proffession
  );
  const [pEmail, setPemail] = useState(contextValue?.studentById?.parentemail);
  const [phone, setPhone] = useState(contextValue?.studentById?.phonenumber);
  const [address, setAddress] = useState(contextValue?.studentById?.address);
  const [sectionName, setSectionName] = useState(
    contextValue?.studentById?.section
  );

  const payLoad = {
    name: sName,
    dob: dob,
    // password: password,
    address: address,
    phonenumber: phone,
    gender,
    email,
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
      setCreating(true);
      const res = (await axiosInstance.put("/update-student", {
        data: payLoad,
        id: contextValue?.paramID,
      })) as any;
      if (res.status === 200) {
        toast.success(res.data.message);
        router.push("/dashboard/Students");
        setCreating(false);
      }
    } catch (error: any) {
      setCreating(false);
      return toast.error(error);
    }
  };

  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      {contextValue?.paramMode !== "view" && (
        <div className="w-full flex gap-5">
          <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
            <div className="flex gap-2 items-center">
              <Back />
              <h4 className="text-[20px] font-Regular">Create Student</h4>
            </div>
            <Button className="rounded-sm" onClick={handleFormSubmission}>
              Update
              {creating && (
                <LoaderIcon className="mr-2 animate-spin" size={14} />
              )}
            </Button>
          </div>
        </div>
      )}
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
                      value={sName}
                      onChange={(e: any) => setSname(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Email</Label>
                    <Input
                      type="email"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Email"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.email)}
                      disabled={contextValue?.paramMode === "view"}
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
                      value={adminNumber}
                      onChange={(e: any) =>
                        setAdminNumber(e.target.adminNumber)
                      }
                      disabled={contextValue?.paramMode === "view"}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Age</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Age"
                      value={age}
                      onChange={(e: any) => setAge(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Gender</Label>
                    <Select
                      value={gender}
                      disabled={contextValue?.paramMode === "view"}
                      onValueChange={(val) => setGender(val)}
                    >
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
                      value={dob}
                      onChange={(e: any) => setDob(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
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
                      value={phone}
                      onChange={(e: any) => setPhone(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">House Address</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="House Address"
                      value={address}
                      onChange={(e: any) => setAddress(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
                    />
                  </div>
                </div>
                <div className="flex gap-5  flex-col">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Class</Label>
                    <Select
                      value={className}
                      disabled={contextValue?.paramMode === "view"}
                      onValueChange={(val) => setClassName(val)}
                    >
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
                    <Select
                      value={sectionName}
                      disabled={contextValue?.paramMode === "view"}
                      onValueChange={(val) => setSectionName(val)}
                    >
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
                      value={pName}
                      onChange={(e: any) => setPname(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-2 lg:gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Email</Label>
                    <Input
                      type="email"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Email"
                      value={pEmail}
                      onChange={(e: any) => setPemail(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
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
                      value={pProffession}
                      onChange={(e: any) => setPproffession(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
                    />
                  </div>
                  <div className="flex lg:flex-row gap-5 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Phone</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Phone"
                      value={pPhone}
                      onChange={(e: any) => setPphone(e.target.value)}
                      disabled={contextValue?.paramMode === "view"}
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

export default ViewAndEdit;
