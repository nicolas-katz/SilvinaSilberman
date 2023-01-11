import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoWarningOutline } from 'react-icons/all';

const StyledProducts = styled.section`
    width: 100%;
    height: max-content;
    margin-top: 20px;
    padding: 60px 20px;

    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 40px;

        color: black;
        font-size: 36px;
        line-height: 46px;
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

        div {
            width: 100%;
            height: max-content;
            padding: 20px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: black;
            border-radius: 2px;

            color: white;
            font-size: 12px;
            line-height: 22px;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;

            svg {
                margin-bottom: 20px;

                color: white;
                font-size: 28px;
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
            margin: 2% 0;

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
                padding: 10px;

                border: 1px solid gainsboro;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 42px;
            line-height: 52px;
        }

        & div.error__messages {
           div {
                width: 80%;
                padding: 40px;

                font-size: 14px;
                line-height: 24px;

                svg {
                    margin-bottom: 28px;

                    font-size: 32px;
                }
           }
        }
        
        & div.portfolio {
            justify-content: space-between;
            
            & a {
                width: 48%;

                img {
                    height: 480px;

                    object-fit: cover;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & div.error__messages {
           div {
                width: 80%;
                padding: 40px 80px;

                font-size: 18px;
                line-height: 28px;

                svg {
                    margin-bottom: 32px;

                    font-size: 40px;
                }
           }
        }

        & div.portfolio {
            & a {
                width: 32%;
                margin: 1% 0;

                img {
                    height: 420px;
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 80px 120px;

        h1 {
            margin-bottom: 60px;

            font-size: 52px;
            line-height: 62px;
        }

        & div.error__messages {
           div {
                width: 70%;
                padding: 40px 100px;

                font-size: 20px;
                line-height: 30px;
            }
        }

        & div.portfolio {
            & a {
                img {
                    height: 520px;
                }
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

        if (!products || products?.length < 0) setMessage('Los productos estan siendo cargados a la web, espere un momento o vuelva a intentarlo más tarde.') 
        else setMessage(null);
    }, []);

    return (
        <StyledProducts>
            <h1>Portfolio</h1>
            <div className='portfolio' id='portfolio'>
                {
                    products?.length > 0 && products ? products.map(( product ) => {
                        return(
                            <NavLink key={product.id} to={`/colection/${product.id}`}>
                                <img 
                                    src={product.images} 
                                    alt={product.title} 
                                />
                            </NavLink>
                        )
                    }) : <div className='error__messages'>
                            <div>
                                <IoWarningOutline />
                                { message }
                            </div>
                        </div>
                }
            </div>
        </StyledProducts>
    );
};