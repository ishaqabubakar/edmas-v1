import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { sidebarMenus } from "../../../public/data/sidebarData";
import { UserContext } from "@/contextAPI/generalContext";

const MainMenus = ({}) => {
  const contextValue = useContext(UserContext);
  const collapse = contextValue?.collapse;
  const setCollapse = contextValue?.setCollapse
  const [openSubmenus, setOpenSubmenus] = useState([]);
  const router = useRouter()

  const handleToggle = (index: number) => {
    const updatedSubmenus = [...openSubmenus] as any;
    updatedSubmenus[index] = !updatedSubmenus[index];
    setOpenSubmenus(updatedSubmenus);
    setCollapse(true)
  };

  return (
    <div>
      {sidebarMenus.map((menu, key) => (
        <div key={key}>
          <div className="w-full">
            <li
              className={`flex flex-row items-center cursor-pointer px-[10px] hover:bg-zinc-700 rounded-sm gap-[10px] h-[40px] text-[14px] font-Medium w-full transition-all ease-in-out duration-500  ${!collapse && "hover:bg-zinc-700 rounded-sm transition-all ease-in-out duration-500"}`}
              onClick={() => handleToggle(key)}
            >
              <Icon icon={menu.icon} className="text-[20px] text-white " />
              <p className={`text-[14px] font-Regular text-white ${!collapse ? 'hidden' : 'block'}`}>{menu.menu}</p>
            </li>
            {menu.sub.map((sub, subIndex) => (
              <li
                key={subIndex}
                className={`text-white flex ml-[15px] flex-row items-center cursor-pointer px-[10px] hover:text-zinc-700 rounded-sm gap-[10px] h-[40px] text-[12px] font-Medium w-full transition-all ease-in-out duration-500 ${!collapse ? 'hidden' : openSubmenus[key] ? 'block pl-[15px] transition-all ease-in-out duration-500' : 'hidden transition-all ease-in-out duration-500'}`}
              onClick={()=>router.push(`${sub.path}`)}
              >
                {sub.menus}
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainMenus;
