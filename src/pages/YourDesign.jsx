import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';

const StyledYourDesign = styled.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 60px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }
`;

export default function YourDesign() {
    useEffect(() => {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
    }, []);

    const { getProducts } = useContext(AppContext);
    const [products, setProducts] = useState(null);
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        getProducts(setProducts);
        products && products.forEach((data, index) => {
            if (index <= 7) {
                setPhotos(... photos, data.title);
            };
        });
        photos && console.log(photos);
    }, []);

    return (
        <div>
            <Header />
            <StyledYourDesign>
                <h1>Elegí Tu Próximo Retrato</h1>
            </StyledYourDesign>
            <Footer />
        </div>
    );
};