import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/category/category';

import './category.css';

function category() {
  const dispatch = useDispatch();
  return (
    <button
      aria-label="Save"
      type="button"
      onClick={() => {
        dispatch(checkStatus());
      }}
    >
      {' '}
      checkstatus
    </button>
  );
}

export default category;
