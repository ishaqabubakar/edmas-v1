import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const ViewTeachers = () => {
  return (
    <div className="p-5 h-full w-full overflow-y-auto no-scrollbar flex flex-col gap-5">
      <div className="w-full flex gap-5">
        <div className="w-full bg-white border justify-between  h-[70px] p-5 flex items-center gap-5 rounded-sm">
          <h4 className="text-[20px] font-Regular">View Teachers</h4>
          <Button className="rounded-sm">Add teacher</Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 h-full bg-white rounded-sm border">
        
      </div>
    </div>
  );
};

export default ViewTeachers;
