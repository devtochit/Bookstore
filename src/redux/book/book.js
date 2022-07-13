// action
import { createSlice } from '@reduxjs/toolkit';

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
    }

  },
});

export const { addBook, deleteBook, clearValues } = bookSlice.actions;
export default bookSlice.reducer;
