import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedColor: '',
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        selectColor: (state, { payload }) => {
            state.selectedColor = payload
        }
    },
})

export const { selectColor } = appSlice.actions;

export const colorSelector = state => state.appSlice.selectedColor

export default appSlice.reducer;

// 'appSlice/selectColor'
