import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const { products } = useContext(AppContext);

    useEffect(() => {
        setProduct(products.find(product => product.id === productId));
    }, [products])
  
    return (
        <div>
          <div>
            <h1>{product.title} ({product.description})</h1>
          </div>
        </div>
    );
};