"use client";

import axiosInstance from "@/API/AXIOS";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { UserContext } from "@/contextAPI/generalContext";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useContext, useState } from "react";
import { toast } from "sonner";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("../../../(component)/custom-editor");
  },
  { ssr: false }
);

const Page = () => {
  const contextValue = useContext(UserContext);
  const schoolId = contextValue?.ctx?.schoolId;
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState() as any;

  const handleNoticeSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!title || !description || !date) {
        return toast.error("Ensure all fields are filled correctly.");
      }

      contextValue?.setCreating(true);
      const response = await axiosInstance.post("/create-noticeboard", {
        title,
        description,
        date,
        school: schoolId,
        author:contextValue?.ctx?.fullname
      });

      if (response.status === 200) {
        router.push("/dashboard/NoticeBoard");
        contextValue?.setCreating(false);
        toast.success("Notice created successfully");
      } else {
        contextValue?.setCreating(false);
        toast.error("Failed to create notice. Please try again.");
      }
    } catch (error) {
      contextValue?.setCreating(false);
      console.error("Error creating notice:", error);
      toast.error("An error occurred while creating the notice.");
    }
  };
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Notice</h4>
          <Button className="rounded-sm" onClick={handleNoticeSubmit}>
            Add Notice
            {contextValue?.creating && (
              <LoaderIcon className="mr-2 animate-spin" size={14} />
            )}
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Notice Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Title</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Title"
                      onChange={(e: any) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Description</Label>
                    <Textarea
                      contentEditable={true}
                      placeholder="Description"
                      className="text-sm focus-visible:outline-none"
                      onChange={(e: any) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Date</Label>
                    <Input
                      type="date"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="End time"
                      onChange={(e: any) => setDate(e.target.value)}
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
