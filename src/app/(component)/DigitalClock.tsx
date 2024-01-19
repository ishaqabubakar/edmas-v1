// components/DigitalClock.js
import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  // Determine AM or PM
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

  return (
    <div className="text-4xl text-center font-poppins flex gap-1 p-5 justify-center">
      <div className="border h-[50px] rounded-sm w-[50px] flex items-center justify-center bg-gray-50">
        <p className="text-black text-[25px]">{displayHours}</p>
      </div>
      <p>:</p>
      <div className="border h-[50px] rounded-sm w-[50px] flex items-center justify-center bg-gray-50">
        <p className="text-black text-[25px]">{minutes}</p>
      </div>
      <p>:</p>
      <div className="border h-[50px] rounded-sm w-[50px] flex items-center justify-center bg-gray-50">
        <p className="text-black text-[25px]">{seconds}</p>
      </div>
      <div className="border h-[50px] rounded-sm w-[50px] flex items-center justify-center bg-gray-50">
        <p className="text-black text-[25px]">{amOrPm}</p>
      </div>
    
    </div>
  );
};

export default DigitalClock;
