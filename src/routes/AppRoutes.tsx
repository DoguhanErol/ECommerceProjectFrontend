// src/AppRoutes.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import OrdersPage from '../pages/OrdersPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import PrivateRoute from '../utils/PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
      <Routes>
        {/* Everybody can access these routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected routes for logged-in users */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrdersPage />} />
        </Route>

        {/* Not found route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};

export default AppRoutes;
