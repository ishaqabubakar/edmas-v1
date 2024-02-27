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
import { Textarea } from "@/components/ui/textarea";
import { UserContext } from "@/contextAPI/generalContext";
import { setSeconds } from "date-fns";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const contextValue = useContext(UserContext);
  const sectionData = contextValue?.sectionBySchool;
  const subjectData = contextValue?.subjectBySchoolId;
  const schoolId = contextValue?.ctx?.schoolId;
  const router = useRouter();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState() as any;
  const [section, setSection] = useState() as any;

  const handleMaterialSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!name || !subject || !attachment) {
        return toast.error("Ensure all fields are filled correctly.");
      }

      contextValue?.setCreating(true);
      const response = await axiosInstance.post("/create-material", {
        subject,
        description,
        section,
        school: schoolId,
        attachment,
        materialname: name,
      });

      if (response.status === 200) {
        router.push("/dashboard/Materials");
        contextValue?.setCreating(false);
        toast.success("Material created successfully");
      } else {
        contextValue?.setCreating(false);
        toast.error("Failed to create material. Please try again.");
      }
    } catch (error) {
      contextValue?.setCreating(false);
      console.error("Error creating material:", error);
      toast.error("An error occurred while creating the material.");
    }
  };
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <div className="flex gap-2 items-center">
            <Back />
            <h4 className="text-[20px] font-Regular">Create Materials</h4>
          </div>
          <Button className="rounded-sm" onClick={handleMaterialSubmit}>
            {contextValue?.creating && (
              <LoaderIcon className="mr-2 animate-spin" size={14} />
            )}
            Add Material
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Material Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Name</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Material name"
                      onChange={(e: any) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Section Name</Label>
                    <Select onValueChange={(val) => setSection(val)}>
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
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Subject Name</Label>
                    <Select onValueChange={(val) => setSubject(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Subject"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent className="rounded-sm">
                        {subjectData?.length > 0 ? (
                          subjectData.map((item: any) => (
                            <SelectItem
                              key={item?._id}
                              value={item?.subjectname}
                            >
                              {item?.subjectname}
                            </SelectItem>
                          ))
                        ) : (
                          <p className="p-2"> No data found</p>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Description</Label>
                    <Textarea
                      placeholder="Description"
                      className="text-sm focus-visible:outline-none"
                      onChange={(e: any) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Attachment(File link)</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="provide google drive link"
                      onChange={(e: any) => setAttachment(e.target.value)}
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
