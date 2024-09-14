// src/App.tsx
import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import AppRoutes from './routes/AppRoutes'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes /> 
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
