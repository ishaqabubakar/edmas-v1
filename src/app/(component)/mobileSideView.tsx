
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";;
import { MenuIcon } from "lucide-react";
import MobileSidebar from "./mobileSidebar";

export function ViewSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetClose></SheetClose>
      <SheetContent className="w-[250px] p-0">
        <MobileSidebar />
      </SheetContent>
    </Sheet>
  );
}

export default ViewSidebar;
