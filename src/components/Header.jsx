import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 10px 20px;

    background-color: white;
    transition: all .6s;

    & nav {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & a img {
            width: 100px;

            object-fit: contain;
        }

        & ul {
            position: fixed;
            top: 0;
            right: -2000px;

            width: 100%;
            height: 100vh;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: white;

            text-align: center;

            & .data__header__mobile {
                width: 100%;
                margin-top: 40px;
                padding-top: 40px;

                border-top: 1px solid gainsboro;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;

                & div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    & h5 {
                        margin-bottom: 10px;
                        
                        color: grey;
                        font-size: 12px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }

                    & a {
                        width: max-content;

                        transition: all .6s;

                        color: black;
                        font-size: 16px;
                        font-weight: 500;
                        text-decoration: none;

                        &:hover {
                            color: var(--colorHover);
                        }
                    }
                }
            }

            & li {
                margin: 14px 0;
                
                list-style: none;

                & a {
                    width: max-content;

                    transition: all .6s;
                    cursor: pointer;

                    color: black;
                    font-size: 18px;
                    font-weight: 500;
                    text-decoration: none;

                    &.active {
                        color: var(--colorHover) !important;
                    }
                }
                
                &:hover a { 
                    color: var(--colorHover);
                }
            }
        }

        & .burger__menu {            
            display: flex;
            flex-direction: row;
            align-items: center;

            cursor: pointer;

            & h4 {
                margin-right: 10px;

                color: black;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            & div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                & span {
                    width: 24px;
                    height: 1px;
                    margin: 4px 0;

                    background-color: black;
                }
            }

            @media only screen and (min-width: 1024px) {
                display: none;
            }
        }
    }

    &.open__menu {
        & nav {
            & ul {
                right: 0;
            }

            & .burger__menu {
                position: fixed;
                top: 40px;
                right: 20px;
                z-index: 10;

                & h4 {
                    display: none;
                }

                & span {
                    width: 24px;
                    margin: 0;

                    background-color: black;

                    transform: rotate(120deg);

                    &:last-child {
                        transform: rotate(-120deg);
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & nav {
            & a img {
                width: 120px;
            }
            
            & ul {
                position: unset;

                width: 100%;
                height: max-content;

                flex-direction: row;
                align-items: center;
                justify-content: flex-end;

                background-color: transparent;

                text-align: left;

                & .data__header__mobile {
                    display: none;
                }

                & li {
                    margin: 0;
                    margin-left: 64px;
                    
                    & a {
                        color: black;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 20px 100px;
    }
`;

export default function Header() {
    const handleOpenMenu = () => {
        document.querySelector('header').classList.toggle('open__menu');
    }

    const handleOpenMenuByLinks = () => {
        document.querySelectorAll('ul li').forEach(() => {
            document.querySelector('header').classList.remove('open__menu');
        });
    }

    return (
        <StyledHeader>
            <nav>
                <NavLink to='/'>
                    <img 
                        src={logo} 
                        alt="Silvina Silberman" 
                    />
                </NavLink>
                <ul>                    
                    <li onClick={handleOpenMenuByLinks}>
                        <NavLink to='/'>Inicio</NavLink>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <NavLink to='/about'>Sobre Mi</NavLink>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <NavLink to='/personal-designs'>Diseños Personalizados</NavLink>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <NavLink to='/awards'>Premios</NavLink>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <NavLink to='/contact'>Contacto</NavLink>    
                    </li>
                    <div className='data__header__mobile'>
                        <div>
                            <h5>Email</h5>
                            <a href='mailto:silvinasilberman@gmail.com' target='_blank' rel="noopener noreferrer">silvinasilberman@gmail.com</a>
                        </div>
                        <div>
                            <h5>Instagram</h5>
                            <a href='https://www.instagram.com/silvisilberarte/?hl=es-la' target='_blank' rel="noopener noreferrer">@silvisilberarte</a>
                        </div>
                    </div>
                </ul>
                <div 
                    className="burger__menu"
                    onClick={handleOpenMenu}>
                    <h4>Menu</h4>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </StyledHeader>
    );
};