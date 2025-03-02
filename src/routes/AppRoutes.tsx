import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import OrdersPage from '../pages/OrdersPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedRoute from '../routes/PrivateRoute'; // Güncellenmiş ProtectedRoute
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/modals/Layout';
import { UserProvider } from '../context/useAuth';
import ProductsPage from '../pages/ProductsPage';
import RegisterPage from '../pages/RegisterPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductsByCategory from '../pages/ProductsByCategory';
import { CartProvider } from '../context/CartContext';

const AppRoutes = () => {

  
  return (
    <UserProvider>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Ana sayfa */}
          <Route path="/login" element={<LoginPage />} /> {/* Login sayfası */}
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/category/:categoryName" element={<ProductsByCategory />} /> 
          <Route path="/products/:id" element={<ProductDetailPage />} />



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
            path="/orders"
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            }
          />


          <Route path="*" element={<NotFoundPage />} /> {/* 404 sayfası */}
        </Route>
      </Routes>
      </CartProvider>
    </UserProvider>
  );
};

export default AppRoutes;
