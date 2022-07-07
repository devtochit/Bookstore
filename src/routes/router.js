import { Routes, Route } from 'react-router-dom';
import Calculate from '../components/calculator/calculator';
import HomePage from '../components/Hompage/Homepage';
import QuotesPage from '../components/QoutePage/QoutePage';

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/calculator" element={<Calculate />} />
      <Route exact path="/quotes" element={<QuotesPage />} />
    </Routes>

  );
}

export default Routing;
