import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addbook } from '../../redux/book/book';

function addButton() {
  const dispatch = useDispatch();
  const [bookTitle, setBookInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [category, setCategory] = useState('');

  const handleInput = (e) => {
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
    dispatch(addbook({
      title: bookTitle,
      author: authorInput,
      id: uuidv4(),
      category,

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

      <select name="category" id="category" onChange={(e) => handleCategory(e)}>
        <option value="default">Choose category...</option>
        <option value="Action">Action</option>
        <option value="History">History</option>
      </select>
    </form>
  );
}

export default addButton;
