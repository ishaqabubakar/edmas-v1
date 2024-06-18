"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-screen flex justify-center text-center items-center  ">
      <div className="flex gap-3 flex-col">
        <Image  src="/feeling_sad.svg" alt={"feeling sad"}  width="250" height={250}/>
        <h2>Ooops! Something went wrong</h2>
        <Button
        className="text-[12px] bg-transparent text-blue-500 hover:bg-transparent"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
