// action
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch, id } from "../../util/axios";


export const getBookThunk = createAsyncThunk(
  'apps/:id/books',
  async (name, thunkAPI) => {
    try {
      const response = await axios(customFetch)
    } catch (err) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
  }

)










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
    [getBookThunk.pending]: (state) => {
      state.isLoading = true
    },
    [getBookThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.bookItems = action.payload
    },
    [getBookThunk.rejected]: (state, action) => {
      console.log(action)
      state.isLoading = false
    }
  }
});

export const { addBook, deleteBook, clearValues } = bookSlice.actions;
export default bookSlice.reducer;
