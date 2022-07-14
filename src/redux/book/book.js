import { getData, removeData, uploadData } from '../../util/axios';
// Actions
const ADDBOOK = 'bookstore/books/ADDBOOKS';
const DELETEBOOKS = 'bookstore/books/DELETEBOOKS';
const READ_BOOKS = 'bookstore/books/READ_BOOKS';

const initialState = [];

// Reducer

export function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADDBOOK: {
      return [
        ...state,
        action.payload,
      ];
    }
    case DELETEBOOKS: {
      const ActualBooks = state.filter((book) => book.id !== action.payload);
      return ActualBooks;
    }
    case READ_BOOKS: {
      return action.payload;
    }
    default:
      return initialState;
  }
}

// Action creators

// export const addbook = (book) => ({ type: ADDBOOK, payload: book });
export const addbook = (book) => async (dispatch) => {
  await uploadData(book);
  dispatch({
    type: ADDBOOK, payload: book,
  });
};

// export const deletebook = (id) => ({ type: DELETEBOOKS, payload: id });

export const deletebook = (id) => async (dispatch) => {
  await removeData(id);
  dispatch({
    type: DELETEBOOKS,
    payload: id,
  });
};

export const readBooks = () => async (dispatch) => {
  const books = await getData();
  dispatch({
    type: READ_BOOKS,
    payload: books,
  });
};
