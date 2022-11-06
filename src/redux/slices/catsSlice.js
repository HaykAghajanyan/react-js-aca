import {createSlice} from "@reduxjs/toolkit";
import {getCatsExtraReducer} from "../thunks/catsThunk";

const initialState = {
    allCats: [],
    likedCats: [],
}

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        updateLikedCats: (state, { payload }) => {
            state.likedCats = payload
        },
        updateCatData: (state, { payload }) => {
            const index = state.allCats.findIndex(item => item.id === payload.id)
            state.allCats.splice(index, 1, payload)
        }
    },
    extraReducers: builder => {
        getCatsExtraReducer(builder)
    }
})

export const { updateLikedCats, updateCatData } = catsSlice.actions

export const catsSelector = state => state.cats.allCats
export const likedCatsSelector = state => state.cats.likedCats

export default catsSlice.reducer
