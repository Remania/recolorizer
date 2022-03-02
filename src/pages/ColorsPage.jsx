import React from 'react'
import { Link } from "react-router-dom"
import GenRandColor from '../components/GenRandColor'
import { AiFillStar } from "react-icons/ai"

import { useSpring, animated } from "react-spring"
import Title from "../components/Title"

const ColorsPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 50,
  })
  return (
    <animated.div
    style={props} 
    className='bg w-full h-screen flex justify-center items-center flex-col text-center'>
        <div className='body'>
            <Link to='/'>
              <Title />
            </Link>
            <Link to="/colors/favorites">
              <button type='button' className='flex justify-center items-center gap-2 btn-primary w-full'>
                <AiFillStar />
                See Favorite Colors
              </button>
            </Link>
            <GenRandColor />
        </div>
    </animated.div>
  )
}

export default ColorsPage