import React from 'react'
import { Link } from "react-router-dom"
import GenRandColor from '../components/GenRandColor'

const ColorsPage = () => {
  return (
    <div className='bg w-full h-screen flex justify-center items-center flex-col text-center'>
        <div className='body'>
            <Link to='/'>
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
            </Link> 
            <GenRandColor />
        </div>
    </div>
  )
}

export default ColorsPage