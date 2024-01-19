"use client";

import {
  AlertCircle,
  Cloud,
  CreditCard,
  DeleteIcon,
  FileQuestion,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MailQuestion,
  MessageSquare,
  PanelTopClose,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";

export function NotificationCenter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <div className="w-[40px] h-[40px] rounded-sm  flex items-center justify-center">
          <Icon icon="ion:notifications" className="text-[24px] text-gray-400 " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:w-[400px] w-[330px] flex flex-col mr-5 p-3 gap-2">
        <div className="flex gap-3 p-2 items-center justify-between border rounded-sm hover:bg-gray-50">
          <div className="flex items-center gap-2">
            <div className="h-[30px] w-[30px] rounded-sm bg-black p-1 flex items-center justify-center">
              <MailQuestion className="text-white" />
            </div>
            <p className="text-[16px] font-Medium">
              Assignment Alert from 09/01/2023
            </p>
          </div>
          <X className="text-red-500" size={18} />
        </div>
        <p>Clear all</p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NotificationCenter;
