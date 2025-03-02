import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth'; // Güncellenmiş context
import { registerAPI } from '../services/AuthService'; // Güncellenmiş API
import bg_image from "../assets/bg_image.webp";
import 'animate.css';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const { registerUser, logout } = useAuth(); // Güncellenmiş context
  const navigate = useNavigate();


  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      await registerAPI(username, password,email);
      registerUser(username, password, email);
      navigate('/login'); // Kayıttan sonra giriş sayfasına yönlendirin
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${bg_image})` }}>
      <div className="card bg-base-100 bg-opacity-90 text-base-content w-full max-w-md p-8 shadow-2xl animate__animated animate__fadeInUp">
        <div className="card-body">
          <h2 className="card-title mb-6 text-2xl font-bold">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="input input-bordered flex items-center gap-3 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
              </svg>
              <input type="text" className="input grow border-none" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input input-bordered flex items-center gap-3 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
              </svg>
              <input type="password" className="input grow border-none" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input input-bordered flex items-center gap-3 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
              </svg>
              <input type="password" className="input grow border-none" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div className="input input-bordered flex items-center gap-3 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
              </svg>
              <input type="email" className="input grow border-none" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button className="btn btn-outline btn-primary w-full" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
