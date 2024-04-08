"use client";

import Sidebar from "../(component)/sidebar";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contextAPI/generalContext";
import { Toaster } from "sonner";
import MainHeader from "../(component)/(Header)/mainHeader";

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
  const router = useRouter();
  const pathName = usePathname();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (pathName === "/dashboard") {
      router.push("/dashboard/dashboard");
    }

    if (!userContext?.userSession) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/edmasLogo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body
        className={cn(
          fontSans.variable,
          "font-poppins bg-gray-50 no-scrollbar overflow-hidden"
        )}
      >
        <main className="flex flex-row w-screen h-screen overflow-clip no-scrollbar">
          <Sidebar />
          <div className="flex flex-col w-full h-full">
            <MainHeader />
            {children}
            <Toaster richColors position="top-right" expand={true} />
          </div>
        </main>
      </body>
    </html>
  );
}
