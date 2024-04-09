"use client";

import { Button } from "../../components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Back = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant={"outline"}
      size={"sm"}
      className="flex items-center  rounded-sm w-[75px] justify-center"
    >
      <ChevronLeft fontSize={12} />
      <p>Back</p>
    </Button>
  );
};

export default Back;
