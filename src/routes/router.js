import { Routes, Route } from 'react-router-dom';
import Categories from '../components/category/category';
import Book from '../components/book/Book';

function Routing({ item }) {
  return (
    <Routes>
      <Route exact path="/" element={<Book item={item} />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>

  );
}

export default Routing;
