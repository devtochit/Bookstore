import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/book/book';

function addButton() {
  const dispatch = useDispatch();
  const [bookTitle, setBookInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  const handleInput = (e) => {
    setBookInput(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthorInput(e.target.value);
  };
  const onSubmit = (e) => {
    // const { title, author } = values;
    e.preventDefault();
    dispatch(addBook({
      title: bookTitle,
      author: authorInput,
      id: uuidv4(),

    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={bookTitle}
        onChange={(e) => handleInput(e)}
        placeholder=" title"
      />

      <input
        value={authorInput}
        onChange={(e) => handleAuthor(e)}
        placeholder=" Author"
      />
      <button type="submit"> Add Book</button>
    </form>
  );
}

export default addButton;
