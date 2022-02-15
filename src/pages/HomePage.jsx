import React from 'react'
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className='header w-full h-screen flex justify-center items-center text-center'>
        <div className='title'>
            <h1 className='text-xl'>Welcome to the</h1> 
            <div className='text-5xl mt-2 mb-4'>
                <span className='text-red-500'>R</span>
                <span className='text-blue-500'>e</span>
                <span className='text-green-500'>c</span>
                <span className='text-yellow-500'>o</span>
                <span className='text-gray-500'>l</span>
                <span className='text-orange-500'>o</span>
                <span className='text-lime-500'>r</span>
                <span className='text-teal-500'>i</span>
                <span className='text-purple-500'>z</span>
                <span className='text-pink-500'>e</span>
                <span className='text-indigo-500'>r</span>
            </div>
            <p className='mt-2 mb-4 text-lg'>
              Colorizer app remade with <span className='text-cyan-500 text-xl'>React</span>
            </p>
            <Link to='/colors'>
              <button className='bg-red-400 hover:bg-red-500 transition ease-in-out text-white p-2 rounded w-full'>
                Try now
              </button>
            </Link>
        </div>
    </div>
  )
}

export default HomePage