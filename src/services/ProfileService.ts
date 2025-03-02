// src/services/userService.ts

import axios from "axios";
import { API_URL_PROFILE } from "../config/authConfig"; // Adjust the import based on your config file
import { UserInfo } from "../models/User"; // Adjust the path as necessary

export const getUserProfileInfo = async (): Promise<UserInfo> => {
  try {
    const response = await axios.get<UserInfo>(`${API_URL_PROFILE}`);
    console.log('In Service:', response);
    return response.data;
  } catch (error) {
    console.log('Error fetching user profile info:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};
