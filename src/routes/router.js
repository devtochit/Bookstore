import { Routes, Route } from 'react-router-dom';
import Calculate from '../components/calculator/calculator';
import Book from '../components/Hompage';
import QuotesPage from '../components/QoutePage/QoutePage';

function Routing({ item }) {
  return (
    <Routes>
      <Route exact path="/" element={<Book item={item} />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>

  );
}

export default Routing;
