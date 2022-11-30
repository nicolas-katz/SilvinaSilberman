import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductItem from './ProductItem';

export default function Products() {
    const { products } = useContext(AppContext);
    const [data, setData] = useState([]);

    const handleClick = (e) => {
        const op = e.target.name;
    
        switch(op) {
          case 'all':
                setData(products);
                document.querySelectorAll('button').forEach((btn)=> btn.classList.remove('active'));
                e.target.classList.add("active");
                break;
    
          case 'birome':
                setData(products.filter((product) => product.category === op));
                document.querySelectorAll('button').forEach((btn)=> btn.classList.remove('active'));
                e.target.classList.add("active");
                break;
    
          case 'color':
                setData(products.filter((product) => product.category === op));
                document.querySelectorAll('button').forEach((btn)=> btn.classList.remove('active'));
                e.target.classList.add("active");
                break;
    
          default:
                break;
        }
    };

    return (
        <section>
            <div>
                <button 
                    name='all' 
                    onClick={handleClick}>
                    Todos
                </button>
                <button 
                    name='birome' 
                    onClick={handleClick}>
                    Birome
                </button>
                <button 
                    name='color' 
                    onClick={handleClick}>
                    Color
                </button>
            </div>
            <div>
            {
                data.length > 0 ? 

                data.map((product) => {
                    return(
                        <ProductItem key={product.id} product={product} />
                    )
                })
                : 
                products.map((product) => {
                    return(
                        <ProductItem key={product.id} product={product} />
                    )
                })
            }
            </div>
        </section>
    );
};