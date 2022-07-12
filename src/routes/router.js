import { Routes, Route } from 'react-router-dom';
import Book from '../components/book/Book';
import Categories from '../components/category/category';

function Routing({ item }) {
  return (
    <Routes>
      <Route exact path="/" element={<Book item={item} />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>

  );
}

export default Routing;
