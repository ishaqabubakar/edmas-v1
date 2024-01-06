// import { getCookie } from "@/Hooks/Cookies";
// import React, { createContext, ReactNode, useState } from "react";
"use client"
import { ReactNode, createContext, useState } from "react";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Start writing story....",
        level: 1,
      },
    },
  ],
};

type User = {
  activeTeam: string | null;
  email: string;
  firstName: string;
  lastName: string;
  nameInitial: string;
  _id: string;
  fullName?: string;
  profile?: string;
};

interface UserContextProps {

  data:any;
  setData:any
  cover:any,
  setCover:any
  title:String | null,
  setTitle:any
  description:String,
  setDescription:any
  collapse:boolean,
  setCollapse:any

  Editdata:any;
  setEditData:any
  Editcover:any,
  setEditCover:any
  Edittitle:String | null,
  setEditTitle:any
  Editdescription:String,
  setEditDescription:any
  updating:String,
  setUpdating:any
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {

  const [data, setData] = useState(INITIAL_DATA) as any;
  const [cover, setCover] = useState() as any;
  const [title, setTitle] = useState('') as any;
  const [description, setDescription] = useState('') as any;

  const [Editdata, setEditData] = useState() as any;
  const [Editcover, setEditCover] = useState() as any;
  const [Edittitle, setEditTitle] = useState('') as any;
  const [Editdescription, setEditDescription] = useState('') as any;
  const [updating, setUpdating] = useState('') as any;
  const [collapse, setCollapse] = useState(false)

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        cover,
        setCover,
        title,
        setTitle,
        description,
        setDescription,
        Editdata,
        setEditData,
        Editcover,
        setEditCover,
        Edittitle,
        setEditTitle,
        Editdescription,
        setEditDescription,
        updating,
        setUpdating,
        collapse,
        setCollapse

        
        // newUser,
        // getUserByEmail,
        // getUserByActiveTeamId,
        // isActiveTeam,
        // setIsActiveTeam,
        // currentActiveTeam,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;