import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const StyledFooter = styled.footer`
  width: 100%;
  height: max-content;
  padding: 60px 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-top: 1px solid gainsboro;

  div.footer__header {
    margin-bottom: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;

      object-fit: contain;

      cursor: pointer;
    }
  }

  div.footer__body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 8px;

        color: black;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      a {
        color: gray;
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }

  div.footer__copyright {
    margin-top: 60px;
    padding: 60px 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 1px solid gainsboro;

    h6 {
      color: black;
      font-size: 12px;
      line-height: 22px;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;

      a {
        width: max-content;
        padding-bottom: 4px;

        border-bottom: 1px solid gray;
        
        color: gray;
        text-decoration: none;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    div.footer__header {
      img {
        width: 140px;
      }
    }

    div.footer__body {
      justify-content: space-evenly;
    }
  }

  @media only screen and (min-width: 900px) {
    div.footer__body {
      justify-content: center;

      div {
        margin: 0 80px;

        h4 {
          font-size: 16px;
          line-height: 26px;
        }

        a {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }

    div.footer__copyright {
      h6 {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
`;

export default function Footer() {
    const handleTop = () => {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    };

    return (
      <StyledFooter>
        <div className='footer__header'><img src={logo} alt='Silvina Silberman' onClick={handleTop} /></div>
        <div className='footer__body'>
          <div>
            <h4>Productos</h4>
            <NavLink to='/'>Portfolio</NavLink>
            <NavLink to='/designs'>Tu Diseño</NavLink>
            <NavLink to='/faqs'>FAQ's</NavLink>
          </div>
          <div>
            <h4>Quien Soy</h4>
            <NavLink to='/about'>Sobre Mi</NavLink>
            <NavLink to='/awards'>Premios</NavLink>
          </div>
          <div>
            <h4>Contacto</h4>
            <NavLink to='/contact'>Contacto</NavLink>
            <a href='mailto:silvinasilberman@gmail.com?subject=Consulta desde la Web' target='_blank'>Email</a>
            <a href='' target='_blank'>Instagram</a>
          </div>
        </div>
        <div className='footer__copyright'><h6>© 2023 Silvina Silberman / Desarrollado por <a href='' target='_blank'>Nicolas Katz</a></h6></div>
      </StyledFooter>
    );
};