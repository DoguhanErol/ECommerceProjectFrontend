import React from 'react'
import useFetchCategories from '../../hooks/useFetchCategories';
import { Link } from 'react-router-dom';

const HomeCategories = () => {
    const { categories, loading, error } = useFetchCategories(); // Use the custom hook

  return (
    <>
    <div className=' flex  flex-wrap justify-center items-center bg-opacity-50 bg-base-300 sm:w-3/5 m-2 rounded-2xl shadow-2xl p-10  relative overflow-x-auto'>
    {categories && categories.map((category) => (
        <Link className='btn text-gray-700 text-3xl  m-5' to={'/products/category/' + category.name}>{category.name}</Link>
    ))}       
    </div>
    </>
  )
}

export default HomeCategories