import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: "Book",
    initialState: [],
    reducers: {
        addBook: (state, action) => {
            const newBook = {
                id: new Date(),
                name: action.payload.book
            }
            state.push(newBook);
        }
    },
    deleteBook: (state, action) => {
        return state.filter((item) => item.id === action.payload.id)
    }
})
export const { addBook, deleteBook } = bookSlice.actions;
export default tasksSlice.reducer;
