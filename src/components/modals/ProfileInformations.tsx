import React from 'react'
import { useFetchUserProfile } from '../../hooks/useFetchUserProfile';
import ErrorComponent from './Error';
import LoadingComponent from './Loading';
import { useAuth } from '../../context/useAuth';
import { useNavigate } from 'react-router-dom';

export default function ProfileInformations() {
    const { userProfile, isLoading, isError } = useFetchUserProfile();
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();
    
    const handleLogout = () => {
        logout(); // Logout the user
        navigate('/login'); // Redirect to login page
      };

  return (
    <>
    {isLoading ? (
        <LoadingComponent />
    ): isError ?(
        <ErrorComponent message={'Error message : ' +isError} />
    ):userProfile ? (
      <div className="card bg-base-100 bg-opacity-90 text-base-content w-full max-w-md p-8  shadow-2xl animate__animated animate__fadeInUp">
        <div className="card-body">
            <div className='flex justify-center items-center w-full py-3 bg-primary rounded-lg'>
                <h2 className="card-title  text-2xl font-bold text-white">Your User Information</h2>
            </div>
          {/* Username */}
            <div className="flex items-center gap-3 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
              </svg>
              <h3 className='grow border-none'>{userProfile.username}</h3>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#565853"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480-522 140-740v55l340 223Z"/></svg>
              <h3 className='grow border-none'> {userProfile.email}</h3>
            </div>
            {/* Password */}
            <div className="flex items-center gap-3 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 opacity-70">
                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd"/>
              </svg>
              <h3 className='grow border-none'> ******</h3>
            </div>
            <a onClick={handleLogout} className="btn btn-outline btn-primary w-full">Logout</a>
        </div>
      </div>
        
    //     <div>
    //     <h1>Kullanıcı Profili</h1>
    //     {userProfile ? (
    //       <div>
    //         <p>ID: {userProfile.id}</p>
    //         <p>Kullanıcı Adı: {userProfile.username}</p>
    //         <p>Email: {userProfile.email}</p>
    //         {/* Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz */}
    //       </div>
    //     ) : (
    //       <p>Kullanıcı profili bulunamadı.</p>
    //     )}
    //   </div>
    ):(
        <ErrorComponent message={'User Not Founded, Error message: ' + isError} />
    )}
</>
  )
}
