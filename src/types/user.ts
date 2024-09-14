

  // src/types/user.ts

// Kullanıcı giriş verileri için tip
export interface UserLogin {
    username: string;
    password: string;
}
  
  // JWT token için tip
  export interface UserToken {
    access: string;  // JWT token
    refresh?: string;  // Eğer refresh token da varsa  
}
  