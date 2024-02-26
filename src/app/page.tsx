"use client";

import axiosInstance from "@/API/AXIOS";
import { CheckBox } from "@/components/ui/CheckBox";
import { showToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/customInput";
import { setCookie } from "@/helpers/cookie";
import { LoaderIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { UserContext } from "@/contextAPI/generalContext";
import { toast } from "sonner";
import Image from "next/image";


export default function Home() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const contextVaue = useContext(UserContext)
  const setUserSession = contextVaue?.setUserSession
  const userSession =contextVaue?.userSession
  
  useEffect(()=>{
    setCookie('userSession',userSession,'')
  },[userSession])

  const handleLogin = async (e: any) => {
    e.preventDefault();
 
    try {
      if (!password || !email) {
        return toast.error("Invalid email or password");
      }
      setLoading(true);
      await axiosInstance
        .post("/login", { email, password })
        .then((response) => {
          if (response.status === 200) {
            const resData = response.data.data;
            const userCredential = resData[0];
            const userSchoolCredential = resData[1];
            const schoolData = resData[2]
            const userData = {
              email: userCredential?.email,
              role: userCredential?.role,
              schoolId: userSchoolCredential?.school,
              fullname: userCredential?.name,
              initial: userCredential?.initial,
              name:schoolData.fullname
            };
             router.push("/dashboard/dashboard");
            setCookie("userSession", JSON.stringify(userData), "");
            setUserSession(JSON.stringify(userData))
            setLoading(false);
          }
        });
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setLoading(false);
        return toast.error(error.response?.data.message);
      } else {
        setLoading(false);
        return toast.error("error", error.response?.data.message);
      }
    }
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-50 p-5">
      <form className="lg:w-[400px] h-fit  rounded-[10px] flex flex-col items-center bg-white p-5 lg:p-[30px] justify-center w-full">
        <div className="flex flex-col items-center pb-[30px]">
       <div className="w-[70px] h-[70px] p-3 bg-slate-900 flex items-center justify-center rounded-sm">
       <Image src='/edmasLogo.png' height={60} width={60} alt="edmas logo"/>
       </div>
          <p className="text-sm text-center">
            Enter your details to access the account
          </p>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-[10px]">
            <InputField
              type="email"
              border={"border rounded-sm px-3"}
              placeholder="Email"
              onChange={setEmail}
              width={"w-full"}
              required={true}
              defaultValue={undefined}
            />
            <InputField
              type="password"
              border={"border rounded-sm px-3 mb-[10px]"}
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
          <Button
            className="w-full mt-[30px] rounded-sm"
            size={"lg"}
            onClick={handleLogin}
          >
            Login
            <LoaderIcon
              className={`ml-2 ${!loading && "hidden"} animate-spin`}
              size={14}
            />
          </Button>
        </div>
      </form>
    </main>
  );
}
