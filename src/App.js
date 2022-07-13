import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/header';
import Routing from './routes/router';

function App() {
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
