import React, { useState, useEffect, useContext } from 'react';
import { BsAward, BsCart, BsGrid1X2, AiOutlineCar, CiMoneyCheck1 } from 'react-icons/all';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';
import { IoWarningOutline } from 'react-icons/all';

const StyledProduct = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 40px;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: max-content;
    margin-bottom: 20px;

    object-fit: contain;
    image-rendering: optimizeQuality;
  }

  div.product__information {
    span {
      display: flex;
      flex-direction: row;
      align-items: center;

      color: black;
      font-size: 12px;
      line-height: 22px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;

      a {
        margin-right: 10px;

        color: gray;
        text-decoration: none;
      }

      label {
        margin-left: 10px;
      }
    }

    h1 {
      margin-top: 10px;

      display: flex;
      flex-direction: row;
      align-items: center;

      color: black;
      font-size: 36px;
      line-height: 46px;
      font-weight: 500;

      span {
        margin-top: 6px;
        margin-left: 10px;

        color: black;
        font-size: 20px;
      }
    }

    h2 {
      margin-top: 20px;

      display: flex;
      flex-direction: row;
      align-items: center;

      color: black;
      font-size: 28px;
      line-height: 38px;
      font-weight: 400;

      span {
        margin-left: 4px;
        
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      h3 {
        width: max-content;
        height: max-content;
        margin-left: 20px;
        padding: 6px 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 2px;

        color: white;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;

        &.disponible {
          background-color: #4ea522;
        }

        &.vendido {
          background-color: #be2727;
        }
      }
    }

    p {
      margin-top: 20px;

      color: gray;
      font-size: 18px;
      line-height: 28px;
      font-weight: 300;
    }

    a.ask__product {
      width: max-content;
      height: 48px;
      margin-top: 20px;
      padding: 0 28px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      background-color: transparent;
      border: 2px solid black;
      border-radius: 2px;

      color: black;
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2px;

      svg {
        margin-left: 14px;

        color: black;
        font-size: 16px;
      }
    }

    div.buyer__information {
      margin-top: 40px;
      padding-top: 40px;

      border-top: 1px solid gainsboro;

      display: flex;
      flex-direction: column;

      h4 {
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;

        color: black;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;

        svg {
          margin-right: 10px;

          color: black;
          font-size: 18px;
        }

        &:first-child {
          margin-top: 0;
        }
      }

      p {
        margin-top: 10px;

        color: gray;
        font-size: 18px;
        line-height: 28px;
        font-weight: 300;
      }
    }
  }
`;

const StyledProductError = styled.div`
        width: 100%;
        height: max-content;
        margin: 60px 0;
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

    @media only screen and (min-width: 540px) {
            flex-direction: row;
            justify-content: space-between;

            text-align: left;

            svg {
                min-width: max-content;
                margin-bottom: 0;
                margin-right: 20px;
            }
        }
`;

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState(null);
    const { productId } = useParams();
    const { getProductById } = useContext(AppContext);

    useEffect(() => {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }, []);

    useEffect(() => {
      getProductById(setProduct, productId);

      if (!product) {
        setMessage('Los productos estan siendo cargados a la web, espere un momento.');
      } else {
        setMessage(null);
      };
    }, [productId]);
  
    return (
        <div>
          <Header />
          { 
            product ?
            <StyledProduct>
              <img src={product.primaryImage} alt={product.title} />
              <div className='product__information'>
                <span><NavLink to='/'>Inicio </NavLink> / <label>{product.title}</label></span>
                <h1>{product.title} <span>{product.award && <BsAward />}</span></h1>
                <h2>{product.price} <span>usd</span> <h3 className={product.status === 'disponible' ? 'disponible' : 'vendido'}>{product.status}</h3></h2>
                <p>{product.description}</p>
                <a className='ask__product' href={`mailto:silvinasilberman@gmail.com?subject=Quiero encargar: ${product.title}`}>Comprar <BsCart /></a>
                <div className='buyer__information'>
                  <h4>
                    <BsGrid1X2 />
                    Marco
                  </h4>
                  <p>Al momento de realizar tu pedido, podrás eligir entre distintas opciones de marcos y/o portarretratos, el cuál estará incluido en su compra.</p>
                  <h4>
                    <AiOutlineCar />
                    Envíos a domicilio
                  </h4>
                  <p>Los envíos a domicilio no estarán incluidos en la compra, al momento de realizar tu pedido deberás pactar la forma de intercambio con el vendedor.</p>
                  <h4>
                    <CiMoneyCheck1 />
                    Formas de pago
                  </h4>
                  <p>La forma de pago principal es efectivo en dólares. Sin embargo, también se aceptan transferencias bancarias o mercado pago con tarjeta de credito o debito. En este ultimo caso, preguntar el tipo de cambio.</p>
                </div>
              </div>
            </StyledProduct>
            : <StyledProductError>
              <IoWarningOutline />
              { message }
            </StyledProductError>
          }
          <Footer />
        </div>
    );
};