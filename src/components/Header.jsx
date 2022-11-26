import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
    TfiClose
} from 'react-icons/all';
import logo from '../assets/logo.png';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 20px;

    @media only screen and (min-width: 1200px) {
        padding: 20px 120px;
    }

    background-color: white;
    border-bottom: 1px solid gainsboro;
    transition: all .6s;

    & nav {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & img {
            width: 100px;

            object-fit: contain;
        }

        & ul {
            position: fixed;
            right: -400px;

            transition: all .2s;
        }

        & div.menu {
            width: max-content;
            height: max-content;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;

            cursor: pointer;
            transition: all .6s;

            & span {
                width: 42px;
                height: 1px;
                margin: 6px 0;

                background-color: black;
            }
        }
    }

    &.active {
        & nav {
            & ul {
                top: 0;
                left: 0;

                width: 100%;
                height: 100vh;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                background-color: white;
                transition: all .8s;

                & a {
                    width: max-content;
                    margin: 6px 0;

                    transition: all .6s;

                    color: black;
                    font-size: 24px;
                    font-weight: 300;
                    text-align: center;
                    text-decoration: none;

                    &:hover {
                        color: var(--colorHover);
                    }

                    @media only screen and (min-width: 768px) {
                        margin: 8px 0;

                        font-size: 30px;
                    }

                    & li {
                        list-style: none;
                    }
                }

                & div {
                    width: 100%;
                    margin-top: 30px;
                    padding-top: 30px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    @media only screen and (min-width: 768px) {
                        margin-top: 42px;
                        padding-top: 42px;

                        flex-direction: row;   

                        & h4 {
                            margin: 0 40px !important;

                            font-size: 14px !important;

                            & a {
                                margin-top: 20px !important;

                                font-size: 18px !important;
                            }
                        }
                    }

                    border-top: 1px solid gainsboro;

                    & h4 {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        color: gray;
                        font-size: 12px;
                        font-weight: 500;
                        letter-spacing: 2px;

                        &:last-child {
                            margin-top: 20px;
                        }

                        & a {
                            margin-top: 8px;

                            transition: all .6s;
                            
                            color: black;
                            font-size: 16px;
                            font-weight: 400;
                            text-decoration: none;
                            letter-spacing: 0;

                            &:hover {
                                color: var(--colorHover);
                            }
                        }
                    }
                }

                & svg {
                    position: absolute;
                    top: 20px;
                    right: 20px;

                    @media only screen and (min-width: 1200px) {
                        top: 80px;
                        right: 120px;
                    }

                    cursor: pointer;

                    color: black;
                    font-size: 24px;
                }
            }

            & div.menu {
                display: none;
            }
        }
    }
`;

export default function Header() {
    const handleOpenMenu = () => {
        document.querySelector('header').classList.add('active');
    };

    const handleCloseMenu = () => {
        document.querySelector('header').classList.remove('active');
    };

    return (
        <StyledHeader>
            <nav>
                <img 
                    src={logo} 
                    alt='Silvina Silberman' 
                />
                <ul>
                    <NavLink onClick={handleCloseMenu} to="/"><li>Home</li></NavLink>
                    <NavLink onClick={handleCloseMenu} to="/sobre-mi"><li>Sobre mi</li></NavLink>
                    <NavLink onClick={handleCloseMenu} to="/premios"><li>Premios</li></NavLink>
                    <NavLink onClick={handleCloseMenu} to="/contacto"><li>Contacto</li></NavLink>

                    <div>
                        <h4>
                            EMAIL
                            <a href='mailto:silvinasilberman@gmail.com'>silvinasilberman@gmail.com</a>
                        </h4>
                        <h4>
                            EMPEZA UN PROYECTO
                            <NavLink to="/contacto">Contactame</NavLink>
                        </h4>
                    </div>

                    <TfiClose onClick={handleCloseMenu} />
                </ul>
                <div className='menu' onClick={handleOpenMenu}>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </StyledHeader>
    );
};