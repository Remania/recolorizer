import React, { useState } from 'react'
import genRandNumberByArray from "../helpers/genRandNumberByArray"
import genRandFloat from "../helpers/genRandFloat"
import genRandNumber from "../helpers/genRandNumber"
import { FiCopy } from "react-icons/fi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';

const GenRandColor = () => {
  const [colorValue, setColorValue] = useState("rgb(255,255,255)")
  const [colorType, setColorType] = useState("RGB")

  const rgb = []
  for (let i = 0; i < 256; i++) {
    rgb.push(i)
  }

  //* GEN RGB COLOR
  const genRgbColor = (e) => {
    let rgbColor = "rgb"
    let rgbItems = []
    for (let i = 0; i < 3; i++) {
        rgbItems.push(rgb[genRandNumberByArray(rgb)])
    }
    rgbColor += `(${rgbItems})`

    const color_type = e.target.textContent
    setColorType(color_type)
    setColorValue(rgbColor)
  }

  //* GEN RGBA COLOR
  const genRgbaColor = (e) => {
    let rgbaColor = "rgba"
    let rgbaItems = []
    for (let i = 0; i < 3; i++) {
        rgbaItems.push(rgb[genRandNumberByArray(rgb)])
    }
    let opacity = genRandFloat(1, 2)
    rgbaColor += `(${rgbaItems}, ${opacity})`
    
    const color_type = e.target.textContent
    setColorType(color_type)
    setColorValue(rgbaColor)
  }

  //* GEN HEX COLOR
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  const genHexColor = (e) => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[genRandNumberByArray(hex)]
    }

    const color_type = e.target.textContent
    setColorType(color_type)
    setColorValue(hexColor)
  }

  //* GEN HEX TP COLOR
  const genHexTpColor = (e) => {
    let hexTpColor = "#"
    for (let i = 0; i < 6; i++) {
        hexTpColor += hex[genRandNumberByArray(hex)]
    }
    let opacity = genRandNumber(100)
    hexTpColor += `${opacity}`

    const color_type = e.target.textContent
    setColorType(color_type)
    setColorValue(hexTpColor)
  }

  //* GEN HSL COLOR
  const genRandPercentageNumber = (array) => {
    let number = `${genRandNumber(100)}%`
    array.push(number)
  }
  const genHslColor = (e) => {
    let hslColor = "hsl"
    let hue = genRandNumber(360)
    let saturation_lightness = []
    for (let i = 0; i < 2; i++) {
        genRandPercentageNumber(saturation_lightness)
    }
    hslColor += `(${hue}, ${saturation_lightness})`

    const color_type = e.target.textContent
    setColorType(color_type)
    setColorValue(hslColor)
  }

  const genHslaColor = (e) => {
    let hslaColor = "hsla"
    let hue = genRandNumber(360)
    let saturation_lightness = []
    for (let i = 0; i < 2; i++) {
        genRandPercentageNumber(saturation_lightness)
    }
    let opacity = genRandFloat(1, 2)
    hslaColor += `(${hue}, ${saturation_lightness}, ${opacity})`
    
    const color_type = e.target.textContent
    setColorType(color_type)
    setColorValue(hslaColor)
  }

  //* HANDLE COPY
  const handleCopy = () => {
    const copy_input = document.getElementById("copy_input")
    copy_input.select()
    document.execCommand("copy")
    toast(`${colorValue.toUpperCase()} copied!!!`)
  }

  return (
    <div className='container mx-auto p-4 mt-4'>
        <div className='flex justify-between items-center'>
            <h4>Color:</h4>
            <input type='text' readOnly className='text-right font-medium focus:outline-none selection:bg-transparent' id="copy_input" value={colorValue} onChange={() => setColorValue(colorValue)} />
        </div>
        <div style={{ background: `${colorValue}` }} className='w-full h-24 my-2 transition ease-in-out relative rounded-lg'>
            <button
            data-tip="Copy"
            type='button' 
            onClick={handleCopy} 
            className='copy top-0 left-0 absolute p-2 text-white rounded-lg hover:bg-gray-700 active:scale-75 transition ease-in-out'>
                <FiCopy />
            </button>
        </div>
        <h3>Using <span className='font-medium'>{colorType}</span></h3>
        <div className='flex flex-col gap-2 pt-4'>
            <button 
            onClick={genRgbColor} className='btn-primary' type='button'>RGB</button>
            <button 
            onClick={genRgbaColor} className='btn-primary' type='button'>RGBA</button>
            <button 
            onClick={genHexColor} className='btn-primary' type='button'>HEX</button>
            <button 
            onClick={genHexTpColor}
            className='btn-primary' type='button'>HEX Transparency</button>
            <button 
            onClick={genHslColor}
            className='btn-primary' type='button'>HSL</button>
            <button 
            onClick={genHslaColor}
            className='btn-primary' type='button'>HSLA</button>
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

export default GenRandColor