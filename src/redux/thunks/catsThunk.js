import {createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../api/axios";

export const getCats = createAsyncThunk(
    'cats/get',
    async () => {
        return await instance.get('cats')
    }
)

const getCatsFulfilled = (state, { payload }) => {
    state.allCats = payload.data;
}

export const getCatsExtraReducer = builder => {
    builder
        .addCase(getCats.fulfilled, getCatsFulfilled)
}
