import React from 'react'
import cartPic from '../../assets/cart.webp'
const HomeCart = () => {
  return (
    <>
        {/* <div className="hero  min-h-screen h-auto  w-11/12 max-w-[100vh] rounded-2xl shadow-2xl bg-no-repeat  group" style={{ backgroundImage: `url(${cartPic})`,   backgroundSize:'90%' }}>
          <a href='/cart' className="hero-overlay  rounded-2xl shadow-2xl btn btn-ghost group" ></a>
          <h1 className="mb-5 text-4xl bg-gray-500 bg-opacity-70 rounded-md p-3 font-bold text-white pointer-events-none group-hover:text-secondary group-hover:text-5xl">Cart</h1>
        </div> */}

        <figure className="hero  h-auto  w-11/12 max-w-[100vh] rounded-2xl shadow-2xl bg-no-repeat  group" >
            <img src={cartPic} alt="Cart" />
          <a href='/cart' className="hero-overlay  rounded-2xl shadow-2xl btn btn-ghost group" >
          <h1 className="mb-5 text-4xl bg-gray-500 bg-opacity-70 rounded-md p-3 font-bold text-white pointer-events-none group-hover:text-secondary group-hover:text-5xl">Cart</h1>
          </a>
        </figure>
    </>
  )
}

export default HomeCart