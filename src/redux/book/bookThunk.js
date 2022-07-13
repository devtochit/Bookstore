import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch, id } from "../../util/axios";
import { clearState } from "./book"

export const postBookThunk = (job, thunkAPI) => {
    const response = await customFetch.post('apps/:id/books', job)
    thunkAPI.dispatch(clearState())
    return response.data
}


export const deleteBook = (job, thunkAPI) => {

}