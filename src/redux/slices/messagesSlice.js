import {createSlice, current} from "@reduxjs/toolkit";
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
        addComment: (state, {payload}) => {
            const {id, commentsArr} = payload
            const messageIndex = state.messages.findIndex(item => item.id === id)

            state.messages[messageIndex].comments = commentsArr
        },
        deleteMessage: (state, {payload}) => {
            state.messages = state.messages.filter(item => item.id !== payload)
        }
    },
    extraReducers: builder => {
        messagesExtraReducer(builder)
    }
})

export const {setMessage, deleteMessage, addComment} = messagesSlice.actions

export const messagesSelector = state => state.messages.messages
export const messagesLoadingSelector = state => state.messages.loading
export const messagesErrorSelector = state => state.messages.errorMessage

export default messagesSlice.reducer
