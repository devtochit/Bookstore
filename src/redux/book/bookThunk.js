import axios from "axios";
import { bookEndPoint, deleteBook } from "../../util/axios";
import { addBook } from "./book";

export const getBookThunk = async (job, thunkAPI) => {
    try {
        const response = await axios.get(bookEndPoint, job)
        // thunkAPI.dispatch(clearState())
        const mapbooks = Object.entries(response.data).map(([id, book]) => {
            const { category, title } = response[0]
        })
        return { id, category, title, }
        thunkAPI.dispatch(addBook(mapbooks))
    } catch (err) {
        console.log(err)

        return thunkAPI.rejectWithValue('something went wrong')
    }

}
export const addBookThunk = async ({ book, job }, thunkAPI) => {
    try {
        const response = await axios.post(bookEndPoint, book, job)
        return response
    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue('something went wrong')
    }

}


export const removeBookThunk = async (jobId, thunkAPI) => {
    try {
        const response = await axios.delete(deleteBook`${jobId}`)
    } catch (err) {

        return thunkAPI.rejectWithValue('something went wrong')
    }

}