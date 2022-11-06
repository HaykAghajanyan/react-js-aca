import {createSlice} from "@reduxjs/toolkit";
import {LOGIN} from "../../constants";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    authRoute: LOGIN,
    selectedColor: '',
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        selectColor: (state, {payload}) => {
            state.selectedColor = payload
        },
        changeUser: (state, {payload}) => {
            state.user = payload
        },
        authRouteChange: (state, {payload}) => {
            state.authRoute = payload
        }
    }
})

export const {selectColor, changeUser, authRouteChange} = appSlice.actions;

export const userSelector = state => state.appSlice.user
export const userIdSelector = state => state.appSlice.user.id
export const colorSelector = state => state.appSlice.selectedColor
export const authRouteSelector = state => state.appSlice.authRoute

export default appSlice.reducer;

// 'appSlice/selectColor'
