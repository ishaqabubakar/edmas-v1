import type { Metadata } from "next";

const metadata: Metadata = {
  title: "EduApp",
  description: "Modern school management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" font-poppins bg-brand-gray-5">
        <section className="flex flex-row w-screen h-screen">
          <aside className="border-r w-[200px] bg-white p-5">sidebar</aside>
          <div className="flex flex-col h-full"></div>
        </section>
        {children}
      </body>
    </html>
  );
}
