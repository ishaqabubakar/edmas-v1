// import React, { createContext, ReactNode, useState } from "react";
"use client";
import axiosInstance from "@/API/AXIOS";
import { getCookie } from "@/helpers/cookie";
import { useSearchParams } from "next/navigation";
import { ReactNode, createContext, useEffect, useState } from "react";

interface UserContextProps {
  collapse: any;
  setCollapse: any;
  userSession: any;
  userData: any;
  setUserData: any;
  ctx: any;
  fetchSchoolById: any;
  setUserSession: any;
  retrivedUserData: any;
  schoolData:any,
  ownersData:any,
  studentBySchool:any,
  teacherBySchool:any
  classBySchool:any
  sectionBySchool:any
  creating:boolean,
  setCreating:any
  paramID:any
  paramMode:any
  studentById:any



}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userSession, setUserSession] = useState() as any;
  const searchParam  = useSearchParams()
  const paramID = searchParam.get('id')
  const paramMode = searchParam.get('mode')
  const retrivedUserData = getCookie("userSession") as any;
  let ctx: any;

  if (retrivedUserData !== undefined && retrivedUserData !== null) {
    try {
      ctx = JSON.parse(retrivedUserData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      ctx = null;
    }
  } else {
    ctx = null;
  }

  const [collapse, setCollapse] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [schoolData, setSchoolData] = useState<any[] | undefined>();
  const [ownersData, setOwnersData] = useState<any[] | undefined>();
  const [studentBySchool, setStudentBySchool] = useState<any[] | undefined>();
  const [teacherBySchool, setTeacherBySchool] = useState<any[] | undefined>();
  const [classBySchool, setClassBySchool] = useState<any[] | undefined>();
  const [sectionBySchool, setSectionBySchool] = useState<any[] | undefined>();
  const [studentById, setStudentById] = useState<any[] | undefined>();
  const [creating, setCreating]= useState(false)
  const[trackStudentID, setTrackStudentID] = useState()



  const fetchSchoolById = async () => {
    try {
      const res = await axiosInstance.post("/get-school-by-id", {
        id: ctx?.schoolId,
      });
      console.log("Response from /get-school-by-id:", res);
      
      if (res.status === 200) {
        const data = res.data;
  
        if (data !== null && data !== undefined) {
          setUserData(JSON.stringify(data)); // Set the entire data object to userData
        } else {
          console.warn("Data is null or undefined in the response.");
        }
      }
    } catch (error) {
      console.error("Error fetching school:", error);
    }
  };

  const fetchSchoolData = async () => {
    try {
      const res = await axiosInstance.get("/all-school");
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setSchoolData(newData.data); // Set newData directly, assuming it's an object or an array
          console.log(newData.data) 
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOwnersData = async () => {
    try {
      const res = await axiosInstance.get("/all-owners");
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setOwnersData(newData.data); // Set newData directly, assuming it's an object or an array
          console.log(newData.data) 
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchStudentBySchoolId = async () => {
    try {
      const res = await axiosInstance.post("/get-student",{schoolId: ctx?.schoolId});
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setStudentBySchool(newData.data); // Set newData directly, assuming it's an object or an array
          console.log(newData.data) 
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTeacherBySchoolId = async () => {
    try {
      const res = await axiosInstance.post("/get-teachers",{id: ctx?.schoolId});
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setTeacherBySchool(newData.data); // Set newData directly, assuming it's an object or an array
          console.log(newData.data) 
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchClassBySchoolId = async () => {
    try {
      const res = await axiosInstance.post("/get-classes",{schoolId: ctx?.schoolId});
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setClassBySchool(newData.data); // Set newData directly, assuming it's an object or an array
          console.log(newData.data) 
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSectionBySchoolId = async () => {
    try {
      const res = await axiosInstance.post("/get-sections",{id: ctx?.schoolId});
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setSectionBySchool(newData.data); // Set newData directly, assuming it's an object or an array
          console.log(newData.data) 
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchStudentById = async () => {
    try {
      const res = await axiosInstance.post("/student-by-id",{id: paramID});
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setStudentById(newData.data); // Set newData directly, assuming it's an object or an array
          // alert(JSON.stringify(newData.data)) 
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    fetchOwnersData()
    fetchSchoolData()
    fetchSchoolById();
    fetchStudentBySchoolId()
    fetchTeacherBySchoolId()
    fetchClassBySchoolId()
    fetchSectionBySchoolId()
    fetchStudentById()
  },[]);

  useEffect(() => {
    fetchOwnersData()
    fetchSchoolData()
    fetchSchoolById();
    fetchStudentBySchoolId()
    fetchTeacherBySchoolId()
    fetchClassBySchoolId()
    fetchSectionBySchoolId()
    fetchStudentById()
  }, [creating, paramID]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  fetchOwnersData();
  fetchSchoolData();
  fetchSchoolById();
  fetchStudentBySchoolId();
  fetchTeacherBySchoolId();
  fetchClassBySchoolId();
  fetchSectionBySchoolId();
}, []);

  return (
    <UserContext.Provider
      value={{
        collapse,
        setCollapse,
        userSession,
        userData,
        setUserData,
        ctx,
        fetchSchoolById,
        setUserSession,
        retrivedUserData,
        schoolData,
        ownersData,
        studentBySchool,
        teacherBySchool,
        classBySchool,
        sectionBySchool,
        creating,
        setCreating,
        paramID,
        paramMode,
        studentById

      


      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
