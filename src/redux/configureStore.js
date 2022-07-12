import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/book';
import categoryReducer from './category/category';

export default configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});
