import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './book/book';
import categoryReducer from './category/category';

export default configureStore({
  reducer: {
    book: booksReducer,
    category: categoryReducer,
  },
});
