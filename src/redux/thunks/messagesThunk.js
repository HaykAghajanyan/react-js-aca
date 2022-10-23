import {createAsyncThunk} from "@reduxjs/toolkit";

export const getMessages = createAsyncThunk(
    'messages/get',
    async () => {
        return await fetch('http://localhost:3000/messages')
            .then(res => res.json())
    }
)

const getMessagesPending = (state) => {
    state.loading = true
}

const getMessagesFulfilled = (state, {payload}) => {
    state.loading = false
    state.messages = payload
}

const getMessagesRejected = (state) => {
    state.loading = false
    state.errorMessage = 'Some error occurred with messages'
}

export const messagesExtraReducer = builder => {
    builder
        .addCase(getMessages.pending, getMessagesPending)
        .addCase(getMessages.fulfilled, getMessagesFulfilled)
        .addCase(getMessages.rejected, getMessagesRejected)
}
