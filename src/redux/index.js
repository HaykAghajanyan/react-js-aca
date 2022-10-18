import {combineReducers} from "@reduxjs/toolkit";

import appSlice from "./slices/appSlice";
import messages from "./slices/messagesSlice";

export const rootReducer = combineReducers({
    appSlice,
    messages,
})
