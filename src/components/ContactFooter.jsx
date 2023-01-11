import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/all';

const StyledContactFooter = styled.div`
    width: 100%;

    h4 {
            margin: 40px 0 20px 0;

            color: black;
            font-size: 18px;
            line-height: 28px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
    }
        
    h5 {
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
            }

            display: flex;
            flex-direction: row;
            align-items: center;

            color: gray;
            font-size: 14px;
            line-height: 24px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;

            a {
                width: max-content;
                margin-left: 10px;
                padding-bottom: 4px;

                border-bottom: 1px solid black;
                
                color: black;
                font-size: 16px;
                line-height: 26px;
                font-weight: 500;
                text-transform: lowercase;
                text-decoration: none;
                letter-spacing: 0;
            }
    }

    a.contact__navlink {
            width: max-content;
            margin-top: 10px;
            padding-bottom: 4px;

            display: flex;
            flex-direction: row;
            align-items: center;

            border-bottom: 1px solid black;
            transition: all .6s;

            color: black;
            font-size: 14px;
            line-height: 24px;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;

            svg {
                margin-left: 10px;

                transition: all .6s;

                color: black;
                font-size: 18px;
            }

            &:hover {
                border-color: gray;

                color: gray;

                svg {
                    color: gray;
                }
            }
    }
    
    @media only screen and (min-width: 1024px) {
        h4 {
            font-size: 20px;
            line-height: 30px;
        }

        h5 {
            font-size: 16px;
            line-height: 26px;

            a {
                font-size: 18px;
                line-height: 28px;
            }
        }

        a.contact__navlink {
            font-size: 16px;
            line-height: 26px;
        }
    }
`;

export default function ContactFooter() {
    return (
        <StyledContactFooter>
            <h4>Contacto</h4>
            <h5>Email: <a href='' target='_blank'>silvinasilberman@gmail.com</a></h5>
            <h5>Instagram: <a href='' target='_blank'>@silvisilberarte</a></h5>
            <NavLink className='contact__navlink' to='/contact'>Empecemos Un Proyecto <BsArrowRight /></NavLink>
        </StyledContactFooter>
    );
};