"use client";

import React from "react";
import { BillingData } from "../../../../public/data/sidebarData";
import { Button } from "@/components/ui/button";
import { VscMarkdown } from "react-icons/vsc";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar  flex flex-col gap-5 items-center">
      <div className="pt-5">
        <h3 className="text-[24px] font-Medium text-center">Choose a plan </h3>
        <p className="max-w-[600px] text-center text-[12px] font-Regular">
          Join us today and experience the difference with our subscription
          plans. Unlock a world of possibilities and elevate your experience
          with Edmas
        </p>
      </div>
      <div className="flex  gap-5 flex-wrap justify-center">
        <div className="border shadow-inner bg-white rounded-sm sm:w-[500px] w-full  h-fit sm:h-[500px] flex flex-col gap-5 p-5">
          <h4 className="font-Medium text-[14px] px-3 py-2 rounded-sm w-fit border bg-yellow-100">
            {BillingData.starter1.plan}
          </h4>
          <div className="flex  flex-col ">
            <div className="flex items-end">
              <h4 className="text-[30px] font-Medium">{`${BillingData.starter1.price} GHS/`}</h4>
              <p className="">per term</p>
            </div>
          </div>
          <Button className="rounded-sm">GET STARTED</Button>
          <div>
            <ul className="flex gap-2 flex-col">
              {BillingData.starter1.features.map((c, key) => (
                <li key={key} className="flex items-center gap-2">
                  <Check fontSize={24} className="text-green-500" />
                  <span className="text-[14px] font-Regular">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border  bg-white shadow-inner sm:w-[500px] w-full rounded-sm h-[500px] flex flex-col gap-5 p-5">
          <div className="flex items-center gap-1">
            <h4 className="font-Medium text-[14px] px-3 py-2 rounded-sm w-fit border bg-gray-100">
              {BillingData.starter2.plan}
            </h4>
            <h4 className="text-[12px]">Plus Golden Package</h4>
          </div>
          <div className="flex  flex-col">
            <div className="flex items-end">
              <h4 className="text-[30px] font-Medium">{`${BillingData.starter2.price} GHS/`}</h4>
              <p className="">per term</p>
            </div>
          </div>
          <Button className="rounded-sm">GET STARTED</Button>
          <div>
            <ul className="flex gap-2 flex-col">
              {BillingData.starter2.features.map((c, key) => (
                <li key={key} className="flex items-center gap-2">
                  <Check fontSize={24} className="text-green-500" />
                  <span className="text-[14px] font-Regular">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border shadow-inner bg-white sm:w-[500px] w-full rounded-sm  h-[500px] flex flex-col gap-5 p-5">
          <div className="flex items-center gap-1">
            <h4 className="font-Medium text-[14px] px-3 py-2 rounded-sm w-fit border bg-[#f1f7fb]">
              {BillingData.starter3.plan}
            </h4>
            <h4 className="text-[12px]">Plus Silver Package</h4>
          </div>
          <div className="flex  flex-col">
            <div className="flex items-end">
              <h4 className="text-[30px] font-Medium">{`${BillingData.starter3.price} GHS/`}</h4>
              <p className="">per term</p>
            </div>
          </div>
          <Button className="rounded-sm">GET STARTED</Button>
          <div>
            <ul className="flex gap-2 flex-col">
              {BillingData.starter3.features.map((c, key) => (
                <li key={key} className="flex items-center gap-2">
                  <Check fontSize={24} className="text-green-500" />
                  <span className="text-[14px] font-Regular">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border shadow-inner bg-white sm:w-[500px] w-full rounded-sm  h-[500px] flex flex-col gap-5 p-5">
          <div className="flex items-center gap-1">
            <h4 className="font-Medium text-[14px] border px-3 py-2 rounded-sm w-fit bg-zinc-100">
              {BillingData.starter4.plan}
            </h4>
            <h4 className="text-[12px]">Plus Diamond Package</h4>
          </div>
          <div className="flex  flex-col">
            <div className="flex items-end">
              <h4 className="text-[30px] font-Medium">{`${BillingData.starter4.price} GHS/`}</h4>
              <p className="">per term</p>
            </div>
          </div>
          <Button className="rounded-sm">GET STARTED</Button>
          <div>
            <ul className="flex gap-2 flex-col">
              {BillingData.starter4.features.map((c, key) => (
                <li key={key} className="flex items-center gap-2">
                  <Check fontSize={24} className="text-green-500" />
                  <span className="text-[14px] font-Regular">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
