import { Routes, Route } from 'react-router-dom';
import Book from '../components/book/bookContainer';
import Categories from '../components/category/category';

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Book />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>

  );
}

export default Routing;
