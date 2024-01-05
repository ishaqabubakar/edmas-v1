"use client";

import { CheckBox } from "@/components/ui/CheckBox";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/customInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const accessTpe = ["Admin", "Teacher", "Student", "Parent"];
export default function Home() {
  const [access, setAccess] = useState() as any;
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-50">
        <form className="sm:w-[400px] h-fit  rounded-[10px] flex flex-col items-center bg-white p-5 lg:p-[30px] w-full">
          <div className="flex flex-col items-center pb-[30px]">
            <h3 className="text-[25px] font-bold">Forgot Password</h3>
            <p className="text-sm text-center">Enter your student email</p>
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-[10px]">
              <InputField
                type="email"
                border={"border rounded-md px-3 mb-[10px]"}
                placeholder="Email"
                onChange={function (arg0: any): void {
                  throw new Error("Function not implemented.");
                }}
                width={"w-full"}
                required={true}
                defaultValue={undefined}
              />
            </div>
            <Button className="w-full mt-[10px]" size={"lg"}>
            Send
            </Button>
          </div>
        </form>
    </main>
  );
}
