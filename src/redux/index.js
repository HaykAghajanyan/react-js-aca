import appSlice from "./slices/appSlice";
import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    appSlice,
})
