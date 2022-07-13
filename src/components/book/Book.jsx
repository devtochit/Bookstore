import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/book/book';
import './Book.css';

function Book({ id, title, author, }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Book Available</h1>
      <ul>
        <li key={id}>
          {title}
        </li>
        <li> {author}</li>
      </ul>
      <div>
        <button
          onClick={() => {
            dispatch(deleteBook(id));
          }}
          type="button">
          remove
        </button>

      </div>
    </div>
  )
}

export default Book