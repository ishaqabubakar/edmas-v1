import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { sidebarMenus } from "../../../public/data/sidebarData";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";
import { UserContext } from "@/contextAPI/generalContext";

const MobileMainMenus = ({}) => {
  const contextValue = useContext(UserContext);
  const collapse = contextValue?.collapse;
  const setCollapse = contextValue?.setCollapse;
  const [openSubmenus, setOpenSubmenus] = useState([]);
  const router = useRouter();

  const handleToggle = (index: number) => {
    const updatedSubmenus = [...openSubmenus] as any;
    updatedSubmenus[index] = !updatedSubmenus[index];
    setOpenSubmenus(updatedSubmenus);
    setCollapse(true);
  };

  return (
    <div>
      {sidebarMenus.map((menu, key) => (
        <div key={key}>
          <div className="w-full">
            <li
              className={`flex flex-row items-center justify-between cursor-pointer px-[10px] hover:bg-zinc-700 rounded-sm gap-[10px] h-[40px] text-[14px] font-Medium w-full transition-all ease-in-out duration-500  ${
                !collapse &&
                "hover:bg-zinc-700 rounded-sm transition-all ease-in-out duration-500"
              } ${
                contextValue?.ctx?.role != "manager" &&
                menu.menu === "Manage Schools" &&
                "hidden"
              } ${
                contextValue?.ctx?.role != "manager" &&
                menu.menu === "Super Admin" &&
                "hidden"
              }`}
              onClick={() => handleToggle(key)}
            >
              <p className="flex items-center gap-[10px]">
                <Icon icon={menu.icon} className="text-[20px] text-white " />
                <p className={`text-[14px] font-Regular text-white`}>
                  {menu.menu}
                </p>
              </p>
              {collapse && (
                <ChevronDown className="text-[10px] text-white" size={14} />
              )}
            </li>
            {menu.sub.map((sub, subIndex) => (
              <Link
                key={subIndex}
                className={`text-white flex ml-[20px] flex-row items-center cursor-pointer px-[10px] hover:text-white/60 rounded-sm gap-[10px] h-[40px] text-[13px] font-Medium w-full transition-all ease-in-out duration-500 ${
                  !collapse
                    ? "hidden"
                    : openSubmenus[key]
                    ? "block pl-[15px] transition-all ease-in-out duration-500"
                    : "hidden transition-all ease-in-out duration-500"
                }`}
                href={`/dashboard/${sub.menus}`}
              >
                <SheetClose>{sub.menus}</SheetClose>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileMainMenus;
