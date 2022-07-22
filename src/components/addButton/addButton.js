import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addingBook } from '../../redux/book/book';
import './addButton.css';

function addButton() {
  const dispatch = useDispatch();
  const [bookTitle, setBookInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    setBookInput(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthorInput(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const onSubmit = (e) => {
    // const { title, author } = values;
    e.preventDefault();
    dispatch(addingBook(
      {
        title: bookTitle,
        author: authorInput,
        id: uuidv4(),
        category,
      },
    ));
  };

  return (
    <form className="form" onSubmit={onSubmit}>

      <h1 className="form-header">ADD NEW BOOK</h1>
      <input
        className="title-imput"
        type="text"
        value={bookTitle}
        onChange={(e) => handleTitle(e)}
        placeholder="book title"
        required
      />
      <input
        className="title-imput"
        type="text"
        value={authorInput}
        onChange={(e) => handleAuthor(e)}
        placeholder="book author"
        required
      />
      <select className="title-select" name="category" id="category" onChange={(e) => handleCategory(e)}>
        <option value="default">Choose category...</option>
        <option value="Action">Action</option>
        <option value="History">Economy</option>
        <option value="History">Science fiction</option>
      </select>
      <button
        className="button-submit"
        type="submit"

      >
        ADD BOOK
      </button>
    </form>
  );
}

export default addButton;
