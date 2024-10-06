import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import OrdersPage from '../pages/OrdersPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedRoute from '../routes/PrivateRoute'; // Güncellenmiş ProtectedRoute
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/Layout';
import { UserProvider } from '../context/useAuth';
import ProductsPage from '../pages/ProductsPage';
import RegisterPage from '../pages/RegisterPage';

const AppRoutes = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Ana sayfa */}
          <Route path="/login" element={<LoginPage />} /> {/* Login sayfası */}
          <Route path="/register" element={<RegisterPage />} /> 

          <Route path="/products" element={<ProductsPage />} /> 


          {/* Protected routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} /> {/* 404 sayfası */}
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default AppRoutes;
