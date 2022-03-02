import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { IoIosColorPalette } from "react-icons/io"
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip'

import { useSpring, animated } from "react-spring"
import Title from "../components/Title"

const FavColorsPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 50,
  })

  const colors = useSelector((state) => state.colors)
  const dispatch = useDispatch()

  const copyColor = (color) => {
    toast(`${color.toUpperCase()} copied!!!`)
  }

  return (
    <animated.div 
    style={props}
    className='bg w-full h-screen flex justify-center items-center flex-col text-center'>
        <div className='body'>
            <Link to='/'>
              <Title />
            </Link>
            <Link to="/colors">
              <button type='button' className='flex justify-center items-center gap-2 btn-primary w-full'>
                <IoIosColorPalette />
                Generate Random Color
              </button>
            </Link>
            {
              (colors.length > 0)
              ? (
                <>
                  <ul className='mt-4 h-96 overflow-y-scroll px-2'>
                    {
                      colors.map(color => (
                        <li key={color.id} className="relative">
                          <div
                          style={{ backgroundColor: `${color.color}` }}
                          className="w-full h-24 mb-4 border border-gray-300 rounded-lg"
                          >
                          </div>
                          <CopyToClipboard 
                          text={color.color}
                          onCopy={() => copyColor(color.color)}
                          >
                            <button
                            data-tip="Copy"
                            type='button' 
                            className='copy bottom-0 left-0 absolute p-2 text-white rounded-lg hover:bg-gray-700 active:scale-75 transition ease-in-out'>
                              {color.color}
                            </button>
                          </CopyToClipboard>
                        </li>
                      ))
                    }
                  </ul>
                </>
              )
              : <p className='mt-4 text-xl'>No favorites colors yet...</p>
            }
        </div>
        <ToastContainer
          pauseOnHover={false}
        />
        <ReactTooltip 
          place='bottom'
        />
    </animated.div>
  )
}

export default FavColorsPage