// src/hooks/useUser Profile.ts

import { useEffect, useState } from 'react';
import { getUserProfileInfo } from '../services/ProfileService'; // Adjust the path as necessary
import { UserInfo } from '../models/User'; // Adjust the path as necessary

export const useFetchUserProfile  = () => {
  const [userProfile, setUserProfile] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  //Problemli oncelikle auth sistemini duzeltmen gerekli
  useEffect(() => {
    const fetchUser = async () => {
      setUserProfile(null);
      setIsLoading(true);
      try {
        const data = await getUserProfileInfo();
        setUserProfile(data);
      } catch (error) {
        setIsError('Failed to fetch user profile information');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []); // Empty dependency array means this effect runs once on mount

  return { userProfile, isLoading, isError };
};

