// action
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBookThunk, addBookThunk, removeBookThunk } from './bookThunk'

export const getBook = createAsyncThunk('job/getBook', getBookThunk)
export const addingBook = createAsyncThunk('job/addingBook', addBookThunk)
export const removeBook = createAsyncThunk('job/removeBook', removeBookThunk)











// const book = [{
//   title: 'book 1',
//   author: 'author 1',
//   id: 1,
// },
// {
//   title: 'book 2',
//   author: 'author 2',
//   id: 2,
// },
// {
//   title: 'book 3',
//   author: 'author 3',
//   id: 3,
// },
// ];

const initialState = {
  bookItems: [],
  isLoading: true,
};

export const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const item = action.payload;
      state.bookItems.push(item); // eslint-disable-line
    },

    deleteBook: (state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((book) => book.id !== itemId);  // eslint-disable-line
    },

    clearValues: () => {
      return {
        ...initialState
      }
    },
  },
  extraReducers: {
    [getBook.pending]: (state) => {
      state.isLoading = true
    },
    [getBook.fulfilled]: (state, action) => {
      state.isLoading = false
      state.bookItems = action.payload
    },
    [getBook.rejected]: (state, action) => {
      console.log(action)
      state.isLoading = false
    },
    [addingBook.pending]: (state) => {
      state.isLoading = true
    },
    [addingBook.fulfilled]: (state, action) => {
      state.isLoading = false
      state.bookItems = action.payload
    },
    [addingBook.rejected]: (state, action) => {
      console.log(action)
      state.isLoading = false
    },
    [removeBook.pending]: (state) => {
      state.isLoading = true
    },
    [removeBook.fulfilled]: (state, action) => {
      state.isLoading = false
      state.bookItems = action.payload
    },
    [removeBook.rejected]: (state, action) => {
      console.log(action)
      state.isLoading = false
    }
  }
});

export const { addBook, deleteBook, clearValues } = bookSlice.actions;
export default bookSlice.reducer;