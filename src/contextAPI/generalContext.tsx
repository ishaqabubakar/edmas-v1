// import React, { createContext, ReactNode, useState } from "react";
"use client";
import axiosInstance from "@/API/AXIOS";
import { getCookie } from "@/helpers/cookie";
import { useSearchParams } from "next/navigation";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";


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
  schoolData: any;
  ownersData: any;
  studentBySchool: any;
  teacherBySchool: any;
  classBySchool: any;
  sectionBySchool: any;
  creating: boolean;
  setCreating: any;
  paramID: any;
  paramMode: any;
  studentById: any;
  setTrackStudentID: any;
  subjectBySchoolId: any;
  routineBySchoolId: any;
  noticeboardBySchoolId: any;
  noticeById: any;
  noticeID: any;
  trigger: Boolean;
  setTrigger: any;
  fetchNoticeBoardById: any;
  fetchStudentById: any;
  teacherById: any;
  fetchTeacherById: any;
  fetchAcountById: any;
  fetchAcountByOwner: any;
  singleSchoolById: any;
  fetchCurrentSchoolById: any;
  salariesBySchool:any
  feesBySchool:any
  gradeBySchool:any
  gradeById:any
  fetchGradeById :any
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userSession, setUserSession] = useState() as any;
  const searchParam = useSearchParams();
  const paramID = searchParam.get("id");
  const noticeID = searchParam.get("notice");
  const paramMode = searchParam.get("mode");
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
  const [noticeById, setNoticeById] = useState<any[] | undefined>();
  const [teacherById, setTeacherById] = useState<any[] | undefined>();
  const [fetchAcountById, setFetchAcountById] = useState<any[] | undefined>();
  const [singleSchoolById, setSingleSchoolById] = useState<any[] | undefined>();
  const [trigger, setTrigger] = useState(false);
  const [salariesBySchool, setSalariesBySchool] = useState()
  const [feesBySchool, setFeesBySchool] = useState()
  const [gradeBySchool, setGradeBySchool] = useState()
  const [gradeById, setFetchGradeById] = useState()
  const [routineBySchoolId, setRoutineBySchoolId] = useState<
    any[] | undefined
  >();
  const [noticeboardBySchoolId, setNoticeboardBySchoolId] = useState<
    any[] | undefined
  >();
  const [subjectBySchoolId, setSubjectBySchoolId] = useState<
    any[] | undefined
  >();
  const [creating, setCreating] = useState(false);
  const [trackStudentID, setTrackStudentID] = useState();

  const fetchSchoolById = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-school-by-id", {
        id: ctx?.schoolId,
      });
      // console.log("Response from /get-school-by-id:", res);

      if (res.status === 200) {
        const data = res.data;

        if (data !== null && data !== undefined) {
          setUserData(JSON.stringify(data));
        } else {
          console.warn("Data is null or undefined in the response.");
        }
      }
    } catch (error) {
      console.error("Error fetching school:", error);
    }
  }, [ctx?.schoolId]);

  const fetchSchoolData = async () => {
    try {
      const res = await axiosInstance.get("/all-school");
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setSchoolData(newData.data);
          // console.log(newData.data);
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
          setOwnersData(newData.data);
          // console.log(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchStudentBySchoolId = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-student", {
        schoolId: ctx?.schoolId,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setStudentBySchool(newData.data);
          // console.log(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [ctx?.schoolId]);
  const fetchTeacherBySchoolId = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-teachers", {
        id: ctx?.schoolId,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setTeacherBySchool(newData.data);
          // console.log(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [ctx?.schoolId]);

  const fetchClassBySchoolId = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-classes", {
        schoolId: ctx?.schoolId,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setClassBySchool(newData.data);
          // console.log(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [ctx?.schoolId]);
  const fetchSectionBySchoolId = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-sections", {
        id: ctx?.schoolId,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setSectionBySchool(newData.data);
          // console.log(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [ctx?.schoolId]);

  const fetchStudentById = async (id: any) => {
    try {
      const res = await axiosInstance.post("/student-by-id", {
        id: id,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setStudentById(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const fetchSubjectBySchoolId = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-subject", {
        schoolId: ctx?.schoolId,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setSubjectBySchoolId(newData.data);
          // console.log(subjectBySchoolId);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRoutineBySchoolId = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-routine", {
        schoolId: ctx?.schoolId,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setRoutineBySchoolId(newData.data);
          // console.log(subjectBySchoolId);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNoticeBoardBySchoolId = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/get-noticeboards", {
        id: ctx?.schoolId,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setNoticeboardBySchoolId(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const fetchNoticeBoardById = async (id: any) => {
    try {
      const res = await axiosInstance.post("/notice-id", {
        id: id,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setNoticeById(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTeacherById = async (id: any) => {
    try {
      const res = await axiosInstance.post("/teacher-by-id", {
        id: id,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setTeacherById(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAcountByOwner = async (id: any) => {
    try {
      const res = await axiosInstance.post("/owner-by-id", {
        id: id,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
          setFetchAcountById(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCurrentSchoolById = async (id: any) => {
    {
      try {
        const res = await axiosInstance.post("/get-school-by-id", {
          id: id,
        });
        if (res.status === 200) {
          const newData = res.data;
          // console.log(JSON.stringify(newData))
          if (newData) {
            setSingleSchoolById(newData.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchSalariesBySchoolId = async () => {
    {
      try {
        const res = await axiosInstance.post("/get-salaries", {
          schoolId: ctx?.schoolId,
        });
        if (res.status === 200) {
          const newData = res.data;
          // console.log(JSON.stringify(newData))
          if (newData) {
           setSalariesBySchool(newData.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const fetchFeesBySchoolId = async () => {
    {
      try {
        const res = await axiosInstance.post("/get-fees", {
          schoolId: ctx?.schoolId,
        });
        if (res.status === 200) {
          const newData = res.data;
          console.log(JSON.stringify(newData))
          if (newData) {
           setFeesBySchool(newData.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const fetchGradeBySchoolId = async () => {
    {
      try {
        const res = await axiosInstance.post("/get-gradebooks", {
          id: ctx?.schoolId,
        });
        if (res.status === 200) {
          const newData = res.data;
          console.log(JSON.stringify(newData))
          if (newData) {
           setGradeBySchool(newData.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchGradeById = async (id: any) => {
    try {
      const res = await axiosInstance.post("/get-gradebook-by-id", {
        id: id,
      });
      if (res.status === 200) {
        const newData = res.data;
        if (newData) {
         setFetchGradeById(newData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOwnersData();
    fetchSchoolData();
    fetchSchoolById();
    fetchStudentBySchoolId();
    fetchTeacherBySchoolId();
    fetchClassBySchoolId();
    fetchSectionBySchoolId();
    fetchStudentById(paramID);
    fetchStudentBySchoolId();
    fetchRoutineBySchoolId();
    fetchNoticeBoardBySchoolId();
    fetchNoticeBoardById(noticeID);
    fetchTeacherById(paramID);
    fetchCurrentSchoolById(paramID)
    fetchSalariesBySchoolId()
    fetchFeesBySchoolId()
    fetchGradeBySchoolId()
    fetchGradeById(paramID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchOwnersData();
    fetchSchoolData();
    fetchSchoolById();
    fetchStudentBySchoolId();
    fetchTeacherBySchoolId();
    fetchClassBySchoolId();
    fetchSectionBySchoolId();
    fetchStudentById(paramID);
    fetchSubjectBySchoolId();
    fetchRoutineBySchoolId();
    fetchNoticeBoardBySchoolId();
    fetchTeacherById(paramID);
    fetchCurrentSchoolById(paramID)
    fetchSalariesBySchoolId()
  fetchFeesBySchoolId()
  fetchGradeBySchoolId()
  fetchGradeById(paramID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creating, paramID,ctx?.schoolId]);

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
        studentById,
        setTrackStudentID,
        subjectBySchoolId,
        routineBySchoolId,
        noticeboardBySchoolId,
        noticeById,
        noticeID,
        trigger,
        setTrigger,
        fetchNoticeBoardById,
        fetchStudentById,
        teacherById,
        fetchTeacherById,
        fetchAcountById,
        fetchAcountByOwner,
        singleSchoolById,
        fetchCurrentSchoolById,
        salariesBySchool,
        feesBySchool,
        gradeBySchool,
        gradeById,
        fetchGradeById 
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
