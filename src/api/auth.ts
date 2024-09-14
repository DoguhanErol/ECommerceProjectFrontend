// src/api/auth.ts

import axios from 'axios';
import { API_URL } from '../config/authConfig';
import { UserLogin, UserToken } from '../types/user';

export const loginUser = async (userLogin: UserLogin): Promise<UserToken> => {
  try {
    const response = await axios.post<UserToken>(API_URL, userLogin);
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};
