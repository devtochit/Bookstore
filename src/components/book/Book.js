import React from 'react';
import { useDispatch } from 'react-redux';
import './Book.css';

function Book({
  id, title, author, deletebook,
}) {
  const dispatch = useDispatch();
  const removeBook = (id) => {
    deletebook(id);
  };

  return (
    <div>
      <h1> Book Available</h1>
      <ul>
        <li key={id}>
          {title}
        </li>
        <li>
          {' '}
          {author}
        </li>
      </ul>
      <div>
        <button
          onClick={() => {
            dispatch(removeBook(id));
          }}
          type="button"
        >
          remove
        </button>

      </div>
    </div>
  );
}

export default Book;
