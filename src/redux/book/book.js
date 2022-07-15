// action
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBookThunk, uploadData, removeData } from '../../util/axios';

export const getBook = createAsyncThunk('job/getBook', getBookThunk);
export const addingBook = createAsyncThunk('job/addingBook', uploadData);
export const removeBook = createAsyncThunk('job/removeBook', removeData);

const initialState = {
  bookItems: [],
  isLoading: true,
};

export const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    // addBook: (state, action) => {
    //   const item = action.payload;
    //   state.bookItems.push(item); // eslint-disable-line
    // },

    // deleteBook: (state, action) => {
    //   const itemId = action.removeBook;
    //   state.bookItems = state.bookItems.filter((book) => book.id !== itemId);
    // },

  },
  extraReducers: {
    [getBook.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [getBook.fulfilled]: (state, action) => {
      state.isLoading = false;// eslint-disable-line
      const item = action.payload;
      state.bookItems = item; // eslint-disable-line
    },
    [getBook.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
    [addingBook.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [addingBook.fulfilled]: (state, action) => {
      state.isLoading = false;// eslint-disable-line
      const item = action.meta.arg;
      state.bookItems.push(item);// eslint-disable-line
    },
    [addingBook.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
    [removeBook.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [removeBook.fulfilled]: (state, action) => {
      state.isLoading = false; // eslint-disable-line
      const itemId = action.meta.arg;
      state.bookItems = state.bookItems.filter((book) => book.id !== itemId);// eslint-disable-line
    },
    [removeBook.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
  },
});

export const { addBook, deleteBook, getValues } = bookSlice.actions;
export default bookSlice.reducer;
