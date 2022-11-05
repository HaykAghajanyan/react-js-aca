import {combineReducers} from "@reduxjs/toolkit";

import cats from "./slices/catsSlice";
import appSlice from "./slices/appSlice";
import messages from "./slices/messagesSlice";

export const rootReducer = combineReducers({
    cats,
    appSlice,
    messages,
})
