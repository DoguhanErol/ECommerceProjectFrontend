import axios from "axios";
import { UserProfileToken } from "../models/User";
import { API_URL_LOGIN,API_URL_REGISTER } from "../config/authConfig";


export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(API_URL_LOGIN , {
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
  password: string,
  email: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(API_URL_REGISTER, {
      username,
      password,
      email,
    });
    return data;
  } catch (error) {
    console.log('Error', error);
  }
};