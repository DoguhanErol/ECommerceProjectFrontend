import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../models/User";
import { loginAPI, registerAPI } from "../services/AuthService";
import React from "react";
import axios from "axios";
//auth givenli degil guvenli hale getir
type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    username: string,
    password: string,
    email: string
  ) => {
    try {
      const res = await registerAPI(username, password, email);
      if (res) {
        localStorage.setItem("token", res?.data.access);
        const userObj = {
          userName: res?.data.username,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res?.data.access!);
        setUser(userObj!);
        console.log('Register Success');
      }
    } catch (e) {
      console.log(e, 'error');
    }
  };
  
  const loginUser = async (username: string, password: string) => {
    
    await loginAPI(username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.access);
          const userObj = {
            userName: res?.data.username,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.access!);
          setUser(userObj!);
          console.log('login success')
        }
      })
      .catch((e) => console.log(e,'error'));
  };

  const isLoggedIn = () => {
    return !!token;
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);