// src/pages/ProfilePage.tsx

import React from 'react';
import ProfileInformations from '../components/modals/ProfileInformations';
import bg_image from '../assets/bg_image.webp'


const ProfilePage: React.FC = () => {

  return (
    <div className="flex justify-center items-center min-h-screen  bg-cover " style={{ backgroundImage: `url(${bg_image})` }}>
      <ProfileInformations />
    </div>
  );
};

export default ProfilePage;
