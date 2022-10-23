import {createSlice} from "@reduxjs/toolkit";
import {messagesExtraReducer} from "../thunks/messagesThunk";

const initialState = {
    messages: [],
    loading: false,
    errorMessage: null,
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessage: (state, {payload}) => {
            state.messages.unshift(payload)
        },
        deleteMessage: (state, {payload}) => {
            state.messages = state.messages.filter(item => item.id !== payload)
        }
    },
    extraReducers: builder => {
        messagesExtraReducer(builder)
    }
})

export const {setMessage, deleteMessage} = messagesSlice.actions

export const messagesSelector = state => state.messages.messages
export const messagesLoadingSelector = state => state.messages.loading
export const messagesErrorSelector = state => state.messages.errorMessage

export default messagesSlice.reducer
