// RouteApp.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import GeraCotacao from '../pages/GeraCotacao/GeraCotacao';
import NavBar from '../components/Navbar/Navbar';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';

const RouteApp = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/gera-cotacao" 
            element={
              <PrivateRoute>
                <NavBar>
                  <GeraCotacao />
                </NavBar>
              </PrivateRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default RouteApp;
