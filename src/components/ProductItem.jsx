import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductItem({ product }) {
    const { id, title, description } = product;

    return (
        <NavLink to={`/coleccion/${id}`}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{id}</p>
        </NavLink>
    );
};