// src/App.tsx
import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes'

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <AppRoutes  /> 
      </BrowserRouter>
  );
};

export default App;
