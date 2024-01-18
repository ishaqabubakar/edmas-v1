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
  fetchSchool: any;
  setUserSession:any
  retrivedUserData:any
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
const [userSession, setUserSession] = useState() as any

  const retrivedUserData = getCookie("userSession");
  const ctx = retrivedUserData? JSON.parse(retrivedUserData) : null;
  const [collapse, setCollapse] = useState(false);
  const [userData, setUserData] = useState() as any;
  const fetchSchool = async () => {
    try {
      const res = await axiosInstance.post("/get-school-by-id", {
        id: ctx.schoolId,
      });
      console.log("Response from /get-school-by-id:", res);
  
      if (res.status === 200) {
        // Check the structure of res.data
        console.log("Response Data:", res.data);
        const data = res.data.data;
        if (data) {
          setUserData(data);
        } else {
          console.warn("Data is undefined in the response.");
        }
      }
    } catch (error) {
      console.error("Error fetching school:", error);
    }
  };
  
  useEffect(() => {
    fetchSchool();
  }, []);

useEffect(() => {
  fetchSchool();
}, []);

// Alert the object, not the string representation
alert(JSON.stringify(userData));

  console.log(ctx)
  return (
    <UserContext.Provider
      value={{
        collapse,
        setCollapse,
        userSession,
        userData,
        setUserData,
        ctx,
        fetchSchool,
        setUserSession,
        retrivedUserData

      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
