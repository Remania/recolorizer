import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { IoIosColorPalette } from "react-icons/io"
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip'

const FavColorsPage = () => {
  const colors = useSelector((state) => state.colors)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(colors)
  }, []) 
  

  const copyColor = (color) => {
    toast(`${color.toUpperCase()} copied!!!`)
  }

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
                  <ul className='mt-2 h-96 overflow-y-scroll px-2'>
                    {
                      colors.map(color => (
                        <li key={color.id} className="relative">
                          <input type='text' readOnly className='w-0' id="copy_color" value={color.color} />
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
    </div>
  )
}

export default FavColorsPage