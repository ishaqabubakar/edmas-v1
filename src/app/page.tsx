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
        <form className="w-[400px] h-fit  rounded-[10px] flex flex-col items-center bg-white p-5 lg:p-[30px] justify-center">
          <div className="flex flex-col items-center pb-[30px]">
            <h3 className="text-[25px] font-bold">Sign in</h3>
            <p className="text-sm text-center">Enter your details to access the account</p>
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-[10px]">
              {/* <p className="font-poppins text-gray-500 text-sm">
                 Select Access type
                </p> */}
              <Select
                onValueChange={(value) => setAccess(value)}
                value={access}
              >
                <SelectTrigger className="w-full h-12 border border-black py-3 rounded-[10px] placeholder-black font-Medium">
                  <SelectValue
                    placeholder="Select account type"
                    className="text-[16px] text-black"
                  />
                </SelectTrigger>
                <SelectContent>
                  {accessTpe.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="font-poppins"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <InputField
                type="email"
                border={"border rounded-md px-3"}
                placeholder="Email"
                onChange={function (arg0: any): void {
                  throw new Error("Function not implemented.");
                }}
                width={"w-full"}
                required={true}
                defaultValue={undefined}
              />
              <InputField
                type="password"
                border={"border rounded-md px-3 mb-[10px]"}
                placeholder="Password"
                onChange={function (arg0: any): void {
                  throw new Error("Function not implemented.");
                }}
                width={"w-full"}
                required={true}
                defaultValue={undefined}
              />
            </div>
            <CheckBox
              textDesktop="Remember me"
              textMobile="Remember me"
              forgotPassword="Forgot password"
            />
            <Button className="w-full mt-[30px]" size={"lg"}>
              Login
            </Button>
          </div>
        </form>
    </main>
  );
}
