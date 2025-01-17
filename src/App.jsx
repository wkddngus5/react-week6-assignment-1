import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import AboutPage from './pages/AboutPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import Header from './common/Header';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" exact element={<RestaurantsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
