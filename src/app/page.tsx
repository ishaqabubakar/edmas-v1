"use client";

import axiosInstance from "@/API/AXIOS";
import { CheckBox } from "@/components/ui/CheckBox";
import Toast from "@/components/ui/Toast";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/customInput";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";

const accessTpe = ["Admin", "Teacher", "Student", "Parent"];
export default function Home() {
  const [access, setAccess] = useState() as any;
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {

      if(!password || !email){
        return Toast('error', 'Invalid email or password')
      }
      setLoading(true)
       const response = await axiosInstance.post('/login',{ email, password})
        if(response.status===200){
          // alert(JSON.stringify(response)) 
          setLoading(false)
        }
    } catch (error:any) {
    if(error.response){
      setLoading(false)
      return Toast('error',error.response?.data.message)
    }
    else{
      setLoading(false)
      return Toast('error',error.response?.data.message)
    }
    }
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-50">
      <form className="w-[400px] h-fit  rounded-[10px] flex flex-col items-center bg-white p-5 lg:p-[30px] justify-center">
        <div className="flex flex-col items-center pb-[30px]">
          <h2 className="text-[40px]">
            <span>Ed</span>
            <span className="font-Bold text-orange-700">Mas</span>
          </h2>
          <p className="text-sm text-center">
            Enter your details to access the account
          </p>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-[10px]">
            <InputField
              type="email"
              border={"border rounded-md px-3"}
              placeholder="Email"
              onChange={setEmail}
              width={"w-full"}
              required={true}
              defaultValue={undefined}
            />
            <InputField
              type="password"
              border={"border rounded-md px-3 mb-[10px]"}
              placeholder="Password"
              onChange={setPassword}
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
          <Button className="w-full mt-[30px]" size={"lg"} onClick={handleLogin}>
            Login
            <LoaderIcon className={`ml-2 ${!loading && 'hidden'} animate-spin`} size={14}/>
          </Button>
        </div>
      </form>
    </main>
  );
}
