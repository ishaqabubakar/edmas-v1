"use client"
import type { Metadata } from "next";
import Sidebar from "../(component)/sidebar";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "@/contextAPI/generalContext";

const metadata: Metadata = {
  title: "EduApp",
  description: "Modern school management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const contextValue = useContext(UserContext)
  const collapse = contextValue?.collapse
  const setCollapse=contextValue?.setCollapse
  return (
    <html lang="en">
      <body className=" font-poppins bg-brand-gray-5">
        <section className="flex flex-row w-screen h-screen">
         <Sidebar />
          <div className="flex flex-col h-full w-full">
            <div className="h-[70px] border-b py-5 flex items-center w-full">
              <MenuIcon  onClick={()=>setCollapse((prev: any) =>!prev)}/>
            </div>
          </div>
        </section>
        {children}
      </body>
    </html>
  );
}
