import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/header/header';
import Routing from './routes/router';

const item = [{
  id: 1,
  title: ' The Pragmatic programmer ',
  author: ' jesse uzoma',
  category: 'development',
}];

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routing item={item} />

      </Router>
    </>
  );
}

export default App;
