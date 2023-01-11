import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import award__1 from '../assets/award__1.jpeg';
import award__2 from '../assets/award__2.jpeg';
import award__3 from '../assets/award__3.jpeg';

const StyledAwards = styled.div`
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

    div.awards__container {
        width: 100%;
        
        display: flex;
        flex-direction: column;

        div.awards__box {
            margin-bottom: 40px;

            &:last-child {
                margin-bottom: 0;
            }

            display: flex;
            flex-direction: column;

            img {
                width: 100%;
                height: max-content;

                object-fit: contain;
                image-rendering: optimizeQuality;

                border-radius: 2px;
            }

            a {
                width: max-content;
                margin-top: 20px;
                padding-bottom: 4px;

                border-bottom: 1px solid gray;

                color: gray;
                font-size: 14px;
                line-height: 24px;
                font-weight: 500;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
        }
    }
`;

export default function Awards() {
    useEffect(() => {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
    }, []);

    return (
        <div>
            <Header />
            <StyledAwards>
                <h1>Premios</h1>
                <div className='awards__container'>
                    <div className='awards__box'>
                        <img src={award__1} alt='Silvina Silberman' />
                        <a>Ver Publicación</a>
                    </div>
                    <div className='awards__box'>
                        <img src={award__2} alt='Silvina Silberman' />
                        <a>Ver Publicación</a>
                    </div>
                    <div className='awards__box'>
                        <img src={award__3} alt='Silvina Silberman' />
                        <a>Ver Publicación</a>
                    </div>
                </div>
            </StyledAwards>
            <Footer />
        </div>
    );
};