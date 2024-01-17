// import React, { createContext, ReactNode, useState } from "react";
"use client";
import axiosInstance from "@/API/AXIOS";
import { getCookie } from "@/helpers/cookie";
import { ReactNode, createContext, useEffect, useState } from "react";

interface UserContextProps {
  collapse: any;
  setCollapse: any;
  userSession: any;
  userData: any;
  setUserData: any;
  ctx: any;
  fetchSchool:any
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const userSession = getCookie("userSession");
  const ctx = userSession ? JSON.parse(userSession) : null;
  const [collapse, setCollapse] = useState(false);
  const [userData, setUserData] = useState() as any;

  const fetchSchool = async () => {
    try {
      const res = await axiosInstance.post("/get-school-by-id", {
        id: ctx.schoolId,
      });
      if (res.status === 200) {
        setUserData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <UserContext.Provider
      value={{
        collapse,
        setCollapse,
        userSession,
        userData,
        setUserData,
        ctx,
        fetchSchool
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
