import { createSlice } from "@reduxjs/toolkit";
const createColorsStorage = () => {
    if (localStorage.getItem("colors") === null) {
        localStorage.setItem("colors", "[]")
        console.log("db created")
    } else {
        console.log("db already exists")
    }
}
createColorsStorage()

let colorsData = JSON.parse(localStorage.getItem("colors"))

export const colorSlice = createSlice({
    name: "colors",
    initialState: colorsData,
    reducers: {
        store_color: (state, color) => {
            state.push({
                id: Date.now(),
                color: color.payload,
            })
            localStorage.setItem("colors", JSON.stringify(state))
        }
    }
})

export const { store_color } = colorSlice.actions

export default colorSlice.reducer