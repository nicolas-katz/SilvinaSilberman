import React from 'react';
import styled from 'styled-components';
import {
  BsInstagram,
  FaFacebookF
} from 'react-icons/all';
import logo from '../assets/logo.png';

const StyledFooter = styled.footer`
  width: 100%;
  height: max-content;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 992px) {
    padding: 20px;

    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1024px) {
    padding: 20px 80px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 20px 120px;
  }

  background-color: white;
  border-top: 1px solid gainsboro;

  & img {
    width: 100px;

    object-fit: contain;

    cursor: pointer;
  }

  & h4 {
    margin: 40px 0;
    color: black;
    font-size: 16px;
    line-height: 26px;
    font-weight: 300;
    text-align: center;

    & a {
      transition: all .6s;

      color: black;
      text-decoration: none;

      &:hover {
        color: var(--colorHover);
      }
    }
  }

  & div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & a { 
        width: max-content;
        margin: 0 10px;

        transition: all .6s;

        color: black;
        
        & svg {
          font-size: 14px;
        }

        &:hover {
          color: var(--colorHover);
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
        <img 
          onClick={handleTop}
          src={logo} 
          alt='Silvina Silberman' 
        />
        <h4>
          © 2022 Silvina Silberman / Develop by <a href='https://www.linkedin.com/in/nicokatz/' target="_blank" rel="noopener noreferrer">Nicolas Katz</a>
        </h4>
        <div>
          <a href='https://www.instagram.com/silvisilberarte/' target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
          <a href='https://www.facebook.com/silvina.silber' target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
      </StyledFooter>
    );
};