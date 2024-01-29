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
import { Textarea } from "@/components/ui/textarea";
import { UserContext } from "@/contextAPI/generalContext";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const contextValue = useContext(UserContext);
  // const allTeachers = contextValue?.teacherBySchool;
  const schoolId = contextValue?.ctx?.schoolId;
  const router = useRouter();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [narration, setNarration] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

  const allTeachers = contextValue?.teacherBySchool;
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!name || !type || !amount || !transactionDate) {
        return toast.error("Ensure all fields are filled correctly.");
      }

      contextValue?.setCreating(true);

      const response = await axiosInstance.post("/create-salaries", {
        staffname: name,
        stafftype: type,
        school: schoolId,
        transactiondate: transactionDate,
        amount,
        status,
        narration
      });

      if (response.status === 200) {
        router.push("/dashboard/Salaries");
        contextValue?.setCreating(false);
        toast.success("Salary created successfully");
      } else {
        contextValue?.setCreating(false);
        toast.error("Failed to create salary. Please try again.");
      }
    } catch (error) {
      contextValue?.setCreating(false);
      console.error("Error creating salary:", error);
      toast.error("An error occurred while creating the salary.");
    }
  };

  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">Create Salary</h4>
          <Button className="rounded-sm" onClick={handleSubmit}>
            Add Salary
            {contextValue?.creating && (
              <LoaderIcon className="mr-2 animate-spin" size={14} />
            )}
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full">
        <div className="w-full bg-white h-fit border rounded-sm ">
          <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
            <p className="p-0 font-Regular">Salary Details</p>
          </div>
          <form className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Staff Name</Label>
                    <Select onValueChange={(val)=>setName(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Staff"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {allTeachers?.length > 0 ? (
                          allTeachers.map((item: any) => (
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
                    <Label className="w-[200px]">Staff Type</Label>
                    <Select onValueChange={(val)=>setType(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Type"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Teacher">Teacher</SelectItem>
                        <SelectItem value="Supporting">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Description</Label>
                    <Textarea
                    onChange={(e:any)=>setNarration(e.target.value)}
                      placeholder="Description"
                      className="text-sm focus-visible:outline-none"
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Amount Paid</Label>
                    <Input
                      type="number"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder="Amount"
                      onChange={(e:any)=>setAmount(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Transaction Date</Label>
                    <Input
                      type="Date"
                      className="rounded-sm focus-visible:outline-none"
                      placeholder=""
                      onChange={(e:any)=>setTransactionDate(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                    <Label className="w-[200px]">Status</Label>
                    <Select onValueChange={(val)=>setStatus(val)}>
                      <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                        <SelectValue
                          placeholder="Select Status"
                          className="text-[16px] "
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Paid">Paid</SelectItem>
                        <SelectItem value="Not Paid">Not Paid</SelectItem>
                      </SelectContent>
                    </Select>
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
