import React, { useEffect, useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, redirect } from 'react-router-dom';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from './constants/adminAuth.constant';

import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';

export default function App() {
    const { createAdminUser, userEmail, isLogged } = useContext(AppContext);

    useEffect(() => {
      const verifiedAdminUser = async () => {
        try {
          if(userEmail == ADMIN_EMAIL) { 
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
              path='/contacto' 
              element={<Contact />} 
            />
            {
              !isLogged ? <Route 
                path='/login' 
                element={<Login />} 
              /> : redirect('/admin')
            }
            { 
              isLogged ? <Route 
                path='/admin' 
                element={<Admin />} 
              /> : redirect('/login')
            }
          </Routes>  
    );
};