"use client";
import {
  CreditCard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  UserRound,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { removeCookie } from "@/helpers/cookie";
import { useRouter } from "next/navigation";
import { UserContext } from "@/contextAPI/generalContext";
import { useContext } from "react";

export function UserPforile() {
  const router = useRouter();

  const handleLogout = () => {
    removeCookie("userSession");
    return router.push("/");
  };
  const handleSettingsNavigate = () => {
    return router.push("/dashboard/Settings");
  };
  const handleBillingNavigate = () => {
    return router.push("/dashboard/Billing");
  };
  const handleSupportNavigate = () => {
    return router.push("/dashboard/Support");
  };
  const handleProfileNavigate = () => {
    return router.push("/dashboard/Profile");
  };
  const contextValue = useContext(UserContext);
  const ctx = contextValue?.ctx;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <div className="w-[40px] bg-gray-50 h-[40px] rounded-sm border-[2px] flex items-center justify-center">
          <h3 className="text-[16px] font-Medium">
            <UserRound />
          </h3>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5 rounded-sm">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleProfileNavigate}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleBillingNavigate}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSettingsNavigate}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}
        {/* <DropdownMenuItem onClick={handleSupportNavigate}>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserPforile;
