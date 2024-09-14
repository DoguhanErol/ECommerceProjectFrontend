// src/hooks/useAuth.ts

import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const useAuthStatus = () => {
  const { isAuthenticated } = useAuth();
  const [authStatus, setAuthStatus] = useState(isAuthenticated);

  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);

  return { authStatus };
};
