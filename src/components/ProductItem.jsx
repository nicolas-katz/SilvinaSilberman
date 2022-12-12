import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductItem({ product }) {
    const { id, primaryImage, title } = product;

    return (
        <NavLink to={`/coleccion/${id}`}>
            <img 
                src={primaryImage} 
                alt={title} 
            />
        </NavLink>
    );
};