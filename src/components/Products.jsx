import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const StyledProducts = styled.section`
    width: 100%;
    height: max-content;
    margin: 40px 0;
    padding: 0 20px;

    display: flex;
    flex-direction: column;

    & div.filters {
        margin-top: 40px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        & button {
            width: max-content;
            height: max-content;
            margin-right: 14px;
            margin-bottom: 14px;

            background-color: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            transition: all .6s;

            color: black;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;

            &.active {
                color: var(--colorPrincipal);
            }
        }
    }

    & div.portfolio {
        width: 100%;
        height: 100px;
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        & a {
            width: 100%;
            height: 360px;

            & img {
                width: 100%;
                height: 100%;

                object-fit: cover;

                border-radius: 1px;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & div.filters {
            margin-top: 60px;

            justify-content: space-between;
        }

        & div.portfolio {
            & img {
                width: 32%;
                height: 240px;
                margin: 1% 0;
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

        & div.filters {
            margin-top: 140px;
        }

        & div.portfolio {
            & img {
                height: 360px;
            }
        }
    }
`;

export default function Products() {
    const { products } = useContext(AppContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(products);
        }, 1500)
    }, []);

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
        <StyledProducts>
            <div className='filters'>
                <button 
                    className='active'
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
                <button 
                    name='black&white' 
                    onClick={handleClick}>
                    Black & White
                </button>
                <button 
                    name='famosos' 
                    onClick={handleClick}>
                    Famosos
                </button>
                <button 
                    name='clasicos' 
                    onClick={handleClick}>
                    Clasicos
                </button>
            </div>
            <div className='portfolio'>
                {
                    data.length > 0 ? data.map((product) => {
                        return(
                            <ProductItem 
                                key={product.id} 
                                product={product} 
                            />
                        )
                    }) : <h1>Cargando productos...</h1>
                }
            </div>
        </StyledProducts>
    );
};