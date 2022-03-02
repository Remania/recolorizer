import React from 'react'
import { Link } from "react-router-dom"
import { useSpring, animated } from "react-spring"
import Title from "../components/Title"

const HomePage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 50,
  })
  return (
    <animated.div
    style={props} 
    className='bg w-full h-screen flex justify-center items-center text-center'>
        <div className='body'>
            <Link to='/'>
              <Title />
            </Link>
            <p className='mt-2 mb-4 text-lg font-medium'>
              Colorizer app remade with <span className='text-cyan-500 text-xl'>React</span>
            </p>
            <p className='mt-2 mb-4 text-lg font-medium'>
              Made by <a className='text-cyan-500 underline hover:text-cyan-400 transition ease-in-out' href='https://github.com/Remania' target='_blank' rel='noreferrer'>Remania</a>
            </p>
            <Link to='/colors'>
              <button className='bg-red-400 hover:bg-red-500 transition ease-in-out text-white p-2 rounded w-full'>
                Try now
              </button>
            </Link>
        </div>
    </animated.div>
  )
}

export default HomePage