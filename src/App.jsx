import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Index from './pages/Index';

export default function App() {
  return (
        <Routes>
          <Route 
            path='/' 
            element={<Index />} 
          />
          <Route 
            path='/contacto' 
            element={<Contact />} 
          />
        </Routes>  
  );
};