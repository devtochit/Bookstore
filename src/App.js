import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBook } from './redux/book/book'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/header';
import Routing from './routes/router';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBook())

  }, [])
  return (
    <>
      <Router>
        <Header />

        <Routing />

      </Router>
    </>
  );
}

export default App;
