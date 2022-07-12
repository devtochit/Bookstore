// action
import { REMOVE_BOOK, ADD_BOOK } from './constant';

const initialState = [
  {
    title: 'book 1',
    author: 'author 1',
    id: 1,
  },
  {
    title: 'book 2',
    author: 'author 2',
    id: 2,
  },
  {
    title: 'book 3',
    author: 'author 3',
    id: 3,
  },
];

// reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((i) => i.id !== action.payload.id);
    default: return state;
  }
};
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
const removeBook = (id) => ({
  type: removeBook,
  payload: id,
});
export { addBook, removeBook };
