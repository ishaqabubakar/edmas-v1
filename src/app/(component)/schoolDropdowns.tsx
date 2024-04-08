import React, { useEffect, useContext } from "react";
import { UserContext } from "@/contextAPI/generalContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function AllSchoolListData() {
  const contextValue = useContext(UserContext) as any;
  const schoolData = contextValue?.schoolData;
  const userSession = contextValue?.ctx;
  const router = useRouter();

  const handleSchoolChanged = (newSchoolId: any, newSchoolName: string) => {
    const updatedUserData = {
      ...userSession,
      schoolId: newSchoolId,
      name: newSchoolName // Update the school name
    };
    Cookies.set("userSession", JSON.stringify(updatedUserData));
    contextValue.setUserSession(JSON.stringify(updatedUserData));
    router.refresh(); // Redirect to trigger a refresh
  };

  useEffect(() => {
    const storedUserSession = JSON.parse(Cookies.get("userSession") || "{}");
    if (
      storedUserSession &&
      storedUserSession?.schoolId !== userSession?.schoolId
    ) {
      handleSchoolChanged(storedUserSession?.schoolId, storedUserSession?.name);
    }
  }, [userSession?.schoolId]);

  return (
    <Select onValueChange={(newValue: any) => {
      const selectedSchool = schoolData.find((school: any) => school?._id === newValue);
      if (selectedSchool) {
        handleSchoolChanged(selectedSchool?._id, selectedSchool?.fullname);
      }
    }}>
      <SelectTrigger className="w-[200px] rounded-sm h-[40px]">
        <SelectValue placeholder="Select School" />
      </SelectTrigger>
      <SelectContent className="rounded-sm mr-[100px]">
        {schoolData?.length > 0 ? (
          schoolData.map((item: any) => (
            <SelectItem key={item?._id} value={item?._id}>
              {item?.fullname}
            </SelectItem>
          ))
        ) : (
          <p className="p-2"> No data found</p>
        )}
      </SelectContent>
    </Select>
  );
}

export default AllSchoolListData;
