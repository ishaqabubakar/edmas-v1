"use client";
import type { Metadata } from "next";
import Sidebar from "../(component)/sidebar";
import MainHeader from "../(component)/(Header)/mainHeader";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const metadata: Metadata = {
  title: "EduApp",
  description: "Modern school management system",
};
export const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, 'font-poppins bg-gray-50 no-scrollbar overflow-hidden') }>
        <main className="flex flex-row w-screen h-screen overflow-clip no-scrollbar">
          <Sidebar />
          <div className="flex flex-col w-full h-full">
            <MainHeader />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
