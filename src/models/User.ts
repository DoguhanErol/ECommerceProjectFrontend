// src/models/User.ts
export type UserProfileToken = {
    refresh: string;
    access: string;
    user_id: number;
    username: string;
  };
  
  
  export type UserProfile = {
    userName: string;
  };
  

export type UserInfo = {
  id: number;
  username: string;
  email: string;
}


  