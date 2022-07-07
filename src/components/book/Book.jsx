import React from 'react';
import './Book.css';
import AddButton from '../addButton/addButton'

const Home = ({item}) => (

  item.map( items =>(
    <div className="home" >
    <ul>
    <div>  <h6> Caterygory</h6>  <li key={items.id}> {items.category}</li></div>
    <div> <h6> Title</h6>  <li> {items.title}</li></div>
    <div>  <h6> Athour:</h6>  <li> {items.author}</li></div>
    </ul>
    <AddButton/>
  </div>
  ))

);
export default Home;



