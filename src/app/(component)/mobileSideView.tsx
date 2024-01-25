import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "./sidebar"
import MobileSidebar from "./mobileSidebar"
import { MenuIcon } from "lucide-react"

export function ViewSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <MenuIcon />
      </SheetTrigger>
      <SheetClose ></SheetClose>
      <SheetContent className="w-[250px] p-0">
     <MobileSidebar />
      </SheetContent>
    </Sheet>
  )
}


export default ViewSidebar