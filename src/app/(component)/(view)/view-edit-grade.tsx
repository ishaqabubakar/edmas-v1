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

const ViewAndEditGrade = () => {
  const contextValue = useContext(UserContext);
  const subjectData = contextValue?.subjectBySchoolId;
  const schoolId = contextValue?.ctx?.schoolId;
  const classData = contextValue?.classBySchool;
  const router = useRouter();

  const [formData, setFormData] = useState({
    student: contextValue?.gradeById?.studentName,
    subject: contextValue?.gradeById?.subjectname,
    examMark: contextValue?.gradeById?.marks,
    examGrade: contextValue?.gradeById?.grade,
    term: contextValue?.gradeById?.term,
    classname: contextValue?.gradeById?.classname,
  });

  const handleGradeSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (
        !formData.student ||
        !formData.subject ||
        !formData.examGrade ||
        !formData.examMark
      ) {
        return alert("Ensure all fields are filled correctly.");
      }

      contextValue?.setCreating(true);
      const response = await axiosInstance.put("/update-gradebook", {
        id: contextValue?.paramID,
        data: {
          school: schoolId,
          student: formData.student,
          classname: formData.classname,
          subject: formData.subject,
          grade: formData.examGrade,
          marks: formData.examMark,
          term: formData.term,
        },
      });

      if (response.status === 200) {
        contextValue?.setCreating(false);
        router.push("/dashboard/Grade");
        // toast.success("Material created successfully");
      } else {
        contextValue?.setCreating(false);
        console.log("updated");
      }
    } catch (error) {
      contextValue?.setCreating(false);
      console.error("error updating grade:", error);
      toast.error("An error occurred while updating the grade.");
    }
  };
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <div className="flex gap-2 items-center">
            <Back />
            {contextValue?.paramMode === "view" ? (
              <p>View Grade</p>
            ) : (
              <p>Edit Gradel</p>
            )}
          </div>
          {contextValue?.paramMode === "edit" && contextValue?.paramID && (
            <Button className="rounded-sm" onClick={handleGradeSubmit}>
              Update Grade
              {contextValue?.creating && (
                <LoaderIcon className="mr-2 animate-spin" size={14} />
              )}
            </Button>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Grade Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Student Name</Label>
                    <Select
                      onValueChange={(val) =>
                        setFormData({ ...formData, student: val })
                      }
                      value={formData.student}
                      disabled={contextValue?.paramMode === "view"}
                    >
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Student"
                          className="text-[16px] "
                        />
                      </SelectTrigger>

                      <SelectContent className="rounded-sm">
                        {contextValue?.studentBySchool?.length > 0 ? (
                          contextValue?.studentBySchool?.map((item: any) => (
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
                    <Label className="w-[200px]">Class</Label>
                    <Select
                      onValueChange={(val) =>
                        setFormData({ ...formData, classname: val })
                      }
                      value={formData.subject}
                      disabled={contextValue?.paramMode === "view"}
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
                    <Label className="w-[200px]">Subject</Label>
                    <Select
                      onValueChange={(val) =>
                        setFormData({ ...formData, subject: val })

                      }
                      value={formData.classname}
                      disabled={contextValue?.paramMode === "view"}
                    >
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
                    <Label className="w-[200px]">Term</Label>
                    <Select
                      onValueChange={(val) =>
                        setFormData({ ...formData, term: val })
                      }
                      value={formData.term}
                      disabled={contextValue?.paramMode === "view"}
                    >
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Term "
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Term 1">Term 1</SelectItem>
                        <SelectItem value="Term 2">Term 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Exams Marks</Label>
                    <Input
                      type="number"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="eg. 89%"
                      value={formData.examMark}
                      disabled={contextValue?.paramMode === "view"}
                      onChange={(e: any) =>
                        setFormData({ ...formData, examMark: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Exams Grade</Label>
                    <Input
                      type="text"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Grade eg.B+"
                      value={formData.examGrade}
                      disabled={contextValue?.paramMode === "view"}
                      onChange={(e: any) =>
                        setFormData({ ...formData, examGrade: e.target.value })
                      }
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

export default ViewAndEditGrade;
