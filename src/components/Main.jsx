import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
    BsArrowDownRight,
    BsTelephone
} from 'react-icons/all';

const StyledMain = styled.main`
    width: 100%;
    height: max-content;
    padding: 140px 20px 40px 20px;

    display: flex;
    flex-direction: column;

    background-color: var(--colorPrincipal);

    & h1 {
        color: black;
        font-size: 32px;
        line-height: 42px;
        font-weight: 400;
    }

    & h5 {
        margin: 12px 0;
        color: black;
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
    }

    & h6 {
        color: black;
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
    }

    & div {
        margin-top: 24px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & a {
            width: 100%;
            height: 42px;
            padding: 0 20px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: var(--colorSecundario);
            border: 2px solid var(--colorSecundario);
            border-radius: 40px;
            cursor: pointer;
            outline: none;
            transition: all .6s;

            color: black;
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;

            & svg {
                margin-left: 8px;

                color: black;
                font-size: 16px;
            }

            &:hover {
                background-color: transparent;
            }

            &:last-child {
                margin-top: 12px;

                background-color: transparent;

                &:hover {
                    background-color: var(--colorSecundario);
                }
            }
        }
    }
`;

export default function Main() {
    return (
        <StyledMain>
            <h1>Hola! Soy Silvina Silberman, retratista y dibujante profesional.</h1>
            <h5>Conecto momentos y fotografías <strong>a través del hiperrealismo</strong>.</h5>
            <h6>Resido en Argentina pero <strong>trabajo para todo el mundo</strong>.</h6>
            <div>
                <NavLink to='/'>Portfolio <BsArrowDownRight /></NavLink>
                <NavLink to='/admin'>Hablemos <BsTelephone /></NavLink>
            </div>
        </StyledMain>
    );
};