import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import categoryReducer from './categorySlice';

export default configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});
