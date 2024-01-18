// useUserHook.js

import { useEffect, useState } from 'react';
import axiosInstance from '@/API/AXIOS';

const useUserHook = () => {
  const [userData, setUserData] = useState(null) as any;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.post("/get-user-data"); // Adjust the endpoint as needed
        if (response.status === 200) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Run once on component mount

  return {
    userData,
  };
};

export default useUserHook;
