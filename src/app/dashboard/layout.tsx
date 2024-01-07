"use client";
import type { Metadata } from "next";
import Sidebar from "../(component)/sidebar";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "@/contextAPI/generalContext";
import MainHeader from "../(component)/(Header)/mainHeader";

const metadata: Metadata = {
  title: "EduApp",
  description: "Modern school management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValue = useContext(UserContext);
  const collapse = contextValue?.collapse;
  return (
    <html lang="en">
      <body className=" font-poppins bg-brand-gray-50">
        <section className="flex flex-row w-screen h-screen">
          <Sidebar />
          <div className="flex flex-col w-full h-full">
            <MainHeader />
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
