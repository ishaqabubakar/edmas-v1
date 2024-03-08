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
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const contextValue = useContext(UserContext);
  const setCreating = contextValue?.setCreating;
  const router = useRouter();

  const [feesData, setFeesData] = useState({
    classname: "",
    school: "",
    student: "",
    amount: "",
    status: "",
    narration: "",
    transactionDate: "",
  });

  const payLoad = {
    classname: feesData.classname,
    school: contextValue?.ctx?.schoolId,
    student: feesData.student,
    amount: feesData.amount,
    status: feesData.status,
    narration: feesData.narration,
    transactionDate: feesData.transactionDate,
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();
    try {
      if (!feesData.amount || !feesData.school) {
        // return toast.error("Please ensure all fieds are correctly filled");
        return
      }
      setCreating(true);
      const res = await axiosInstance.post("/create-fees", { data: payLoad });
      if (res.status === 201) {
        setCreating(false);
        return router.push("/dashboard/Fees");
      }
    } catch (error: any) {
      setCreating(false);
      return toast.error(error.response.mesage);
    }
  };

  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <div className="flex gap-2 items-center">
            <Back />
            <h4 className="text-[20px] font-Regular">Create Fees</h4>
          </div>
          <Button className="rounded-sm" onClick={handleFormSubmission}>
            Add Fees
            {contextValue?.creating && (
              <LoaderIcon className="mr-2 animate-spin" size={14} />
            )}
          </Button>
        </div>
        <div className="w-full flex flex-col gap-5 h-full">
          <div className="w-full bg-white h-fit border rounded-sm ">
            <div className="border-b pb-3 w-full flex items-center h-[60px] p-5 justify-between">
              <p className="p-0 font-Regular">Fees Details</p>
            </div>
            <form className="flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-5">
                <div className=" flex flex-col gap-5">
                  <div className="flex flex-col gap-5">
                    <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                      <Label className="w-[200px]">Student</Label>
                      <Select
                        onValueChange={(val) =>
                          setFeesData({ ...feesData, student: val })
                        }
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
                          setFeesData({ ...feesData, classname: val })
                        }
                      >
                        <SelectTrigger className="w-full h-10 border py-3 rounded-sm font-Medium">
                          <SelectValue
                            placeholder="Select Class"
                            className="text-[16px] "
                          />
                        </SelectTrigger>
                        <SelectContent className="rounded-sm">
                          {contextValue?.classBySchool?.length > 0 ? (
                            contextValue?.classBySchool?.map((item: any) => (
                              <SelectItem
                                key={item?._id}
                                value={item?.classname}
                              >
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
                      <Label className="w-[200px]">Narration</Label>
                      <Textarea
                        placeholder="Description"
                        className="text-sm focus-visible:outline-none"
                        onChange={(e: any) =>
                          setFeesData({
                            ...feesData,
                            narration: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                      <Label className="w-[200px]">Amount Paid</Label>
                      <Input
                        type="number"
                        className="rounded-sm focus-visible:outline-none"
                        placeholder="Amount"
                        onChange={(e: any) =>
                          setFeesData({ ...feesData, amount: e.target.value })
                        }
                      />
                    </div>
                    <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                      <Label className="w-[200px]">Transaction Date</Label>
                      <Input
                        type="Date"
                        className="rounded-sm focus-visible:outline-none"
                        placeholder=""
                        onChange={(e: any) =>
                          setFeesData({
                            ...feesData,
                            transactionDate: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex lg:flex-row lg:gap-5 gap-2 lg:items-center items-start lg:w-[500px] w-full flex-col">
                      <Label className="w-[200px]">Status</Label>
                      <Select
                        onValueChange={(val) =>
                          setFeesData({ ...feesData, status: val })
                        }
                      >
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
    </div>
  );
};

export default Page;
