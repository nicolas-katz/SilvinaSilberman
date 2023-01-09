import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoWarningOutline } from 'react-icons/all';

const StyledProducts = styled.section`
    width: 100%;
    height: max-content;
    margin-top: 20px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 36px;

        color: black;
        font-size: 42px;
        line-height: 52px;
        font-weight: 500;
        text-align: center;
    }

    & div.error__messages {
        width: 100%;
        height: max-content;
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #e8b717;
        border-radius: 2px;

        color: white;
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
        text-align: center;

        svg {
            margin-bottom: 12px;

            color: white;
            font-size: 36px;
        }
    }

    @media only screen and (min-width: 540px) {
        & div.error__messages {
            flex-direction: row;
            justify-content: space-between;

            text-align: left;

            svg {
                min-width: max-content;
                margin-bottom: 0;
                margin-right: 20px;
            }
        }
    }

    & div.portfolio {
        width: 100%;
        height: max-content;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        & a {
            width: 100%;
            height: max-content;
            margin: 1% 0;
            padding: 10px;

            border: 1px solid transparent;
            transition: all .6s;

            & img {
                width: 100%;
                height: 100%;

                object-fit: contain;
                image-rendering: optimizeQuality;

                border-radius: 2px;
            }

            &:hover {
                border: 1px solid gainsboro;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & div.portfolio {
            justify-content: space-between;
            
            & a {
                width: 48%;
                margin: 1%;

                img {
                    height: 420px;

                    object-fit: cover;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & div.portfolio {
            & img {
                height: 320px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 40px 100px;

        & div.portfolio {
            & img {
                height: 360px;
            }
        }
    }
`;

export default function Products() {
    const { getProducts } = useContext(AppContext);
    const [products, setProducts] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(()=> {
        getProducts(setProducts);

        if (!products) {
            setMessage('Los productos estan siendo cargados a la web, espere un momento.');
        } else if (products?.length === 0) {
            setMessage('Lo siento no hay productos disponibles en este momento.');
        } else {
            setMessage(null);
        };
    }, []);

    return (
        <StyledProducts>
            <h1>Portfolio</h1>
            <div className='portfolio' id='portfolio'>
                {
                    products ? products.map(( product ) => {
                        return(
                            <NavLink key={product.id} to={`/coleccion/${product.id}`}>
                                <img 
                                    src={product.primaryImage} 
                                    alt={product.title} 
                                />
                            </NavLink>
                        )
                    }) : <div className='error__messages'>
                            <IoWarningOutline />
                            { message }
                        </div>
                }
            </div>
        </StyledProducts>
    );
};