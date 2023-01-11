import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsMouse } from 'react-icons/all';

const StyledMain = styled.main`
  position: relative;

  width: 100%;
  height: 640px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #00000073;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;

  a {
    width: max-content;
    height: 54px;
    margin-top: 40px;
    padding: 0 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: 2px solid white;
    border-radius: 1px;
    outline: none;
    transition: all .6s;
    cursor: pointer;

    color: white;
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;

    &:hover {
      background-color: white;

      color: black;
    }
  }

  svg {
    position: absolute;
    bottom: 60px;
    left: calc(50% - 20px);

    cursor: pointer;

    color: white;
    font-size: 32px;

    animation: mouse 0.8s alternate infinite ease-in-out;
  }

  @keyframes mouse {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(40px);
    }
  }

  @media only screen and (min-width: 768px) {
    height: 680px;

    a {
      font-size: 16px;
      line-height: 26px;
    }

    svg {
      font-size: 34px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 780px;

    svg {
      font-size: 36px;
    }
  }
`;

export default function Index() {  
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
        <StyledMain>
          <NavLink to='/contact'>Cotizar proyecto</NavLink>
          <BsMouse />
        </StyledMain>
        <Products />
        <Footer />
    </div>
  );
};