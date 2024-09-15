import axios from "axios";
import { UserProfileToken } from "../models/User";
import { API_URL } from "../config/authConfig";


export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(API_URL , {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    console.log('Error');
  }
};

export const registerAPI = async (
  username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(API_URL , {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    console.log('Error');
  }
};