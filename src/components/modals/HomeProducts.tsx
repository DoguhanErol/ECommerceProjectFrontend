import React from 'react'
import clothPic from '../../assets/clothing.webp'
const HomeProducts:React.FC = () => {
  return (
    <>
        <div className="hero  min-h-[50vh] h-auto  w-11/12 max-w-[100vh] rounded-2xl shadow-2xl bg-cover bg-centers group" style={{ backgroundImage: `url(${clothPic})` }}>
          <a href='/products' className="hero-overlay  rounded-2xl shadow-2xl btn btn-ghost group" ></a>
          <h1 className="mb-5 text-4xl bg-gray-500 bg-opacity-70 rounded-md p-3 font-bold text-white pointer-events-none group-hover:text-secondary group-hover:text-5xl">Products</h1>
        </div>
    </>
  )
}

export default HomeProducts