//Permission: EVERYBODY

import React from 'react'
import { useAuth } from '../context/useAuth';
import bg_image from '../assets/bg_2.webp';
import HomeHero from '../components/modals/HomeHero';
import HomeProducts from '../components/modals/HomeProducts';
import Divider from '../components/ui/Divider';
import HomeCategories from '../components/modals/HomeCategories';
import HomeCart from '../components/modals/HomeCart';
import HomeOrders from '../components/modals/HomeOrders';


const HomePage:React.FC = () => {
  const { isLoggedIn, logout } = useAuth();

  // soyle yapacagiz eger giris yapilmamissa productscard, categoriescard,logincard gozukucek
  //eger giris yapildiysa ek olarak cartCard, ordersCard, profileCard gozukecek
  return (
    <div className='flex  flex-wrap gap-1 bg-cover bg-center bg-fixed items-center justify-center min-h-screen' style={{ backgroundImage: `url(${bg_image})` }}>
      <HomeHero />
      <Divider headerText='Products' />
      <HomeProducts />
      <Divider headerText='Categories' />

      <HomeCategories />

      {isLoggedIn() ? (
        <>
        <Divider headerText='Your Cart' />
        <HomeCart />
        <Divider headerText='Your Orders' />
        <HomeOrders />
        </>

      ) : (
        <>
        <Divider headerText='Login' />
        <div>Login Cart</div>
        </>
      )}


    </div>
  )
}


export default HomePage