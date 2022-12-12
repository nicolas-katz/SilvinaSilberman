import React, { useEffect, useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes } from 'react-router-dom';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from './constants/adminAuth.constant';

import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import { ProtectedAdmin, ProtectedLogin } from './ProtectedRoutes';
import NotFound from './pages/NotFound';

export default function App() {
    const { createAdminUser, user } = useContext(AppContext);

    useEffect(() => {
      const verifiedAdminUser = async () => {
        try {
          if(!user?.email || user?.email != ADMIN_EMAIL) { 
            return await createAdminUser(ADMIN_EMAIL, ADMIN_PASSWORD);
          }
        } catch(error) {
            if(error.message == 'Firebase: Error (auth/email-already-in-use).') {
              console.error('Administrador ya registrado.')
            }
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