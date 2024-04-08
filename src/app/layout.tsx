import type { Metadata } from "next";

import "./globals.css";


import 'devextreme/dist/css/dx.light.css';
import { Toaster } from "sonner";
import { UserProvider } from "@/contextAPI/generalContext";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "EdMas",
  description: "Modern school management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" type="image/png" href="/edmasLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={cn(fontSans.variable, 'font-poppins') }>
     
      <Toaster richColors position="top-right" expand={true}/>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
