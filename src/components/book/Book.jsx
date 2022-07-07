import React from 'react';
import './HomePage.css';

const Home = ({ title, author, item_id, category, }) => (
  <div className="home" >
    <div className="title">{title}</div>
    <div className="author">{author}</div>
    <div className="category">{category}</div>

  </div>
);
export default Home;



