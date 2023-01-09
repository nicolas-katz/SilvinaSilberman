import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import { ProtectedAdmin, ProtectedLogin } from './ProtectedRoutes';
import NotFound from './pages/NotFound';

export default function App() {
    return (
          <Routes>
            <Route 
              path='/' 
              element={<Index />} 
            />
            <Route 
              path='/coleccion/:productId' 
              element={<ProductDetails />} 
            />
            <Route 
              path='/contact' 
              element={<Contact />} 
            />
            <Route 
              path='/login' 
              element={
                <ProtectedLogin>
                  <Login />
                </ProtectedLogin>
              } 
            />
            <Route 
              path='/admin' 
              element={
                <ProtectedAdmin>
                  <Admin />
                </ProtectedAdmin>
              }
            />
            <Route 
              path='/*' 
              element={<NotFound />} 
            />
          </Routes>  
    );
};