import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Products from '../components/Products';

export default function Index() {
  return (
    <div>
        <Header />
        <Main />
        <Products />
        <Footer />
    </div>
  );
};