import React, { useEffect, useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes } from 'react-router-dom';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from './constants/adminAuth.constant';

import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';

export default function App() {
    const { createAdminUser, user } = useContext(AppContext);

    useEffect(() => {
      const verifiedAdminUser = async () => {
        try {
          if(!user?.email || user?.email != ADMIN_EMAIL) { 
            return await createAdminUser(ADMIN_EMAIL, ADMIN_PASSWORD);
          }
        } catch(error) {
          console.error(error.message);
        }
      };
  
      verifiedAdminUser();
    }, []);

    return (
          <Routes>
            <Route 
              path='/' 
              element={<Index />} 
            />
            <Route 
              path='/coleccion/:productId' 
              element={<ProductDetails />} />
            <Route 
              path='/contact' 
              element={<Contact />} 
            />
            <Route 
              path='/login' 
              element={<Login />} 
            />
            <Route 
              path='/admin' 
              element={<Admin />}
            />
          </Routes>  
    );
};