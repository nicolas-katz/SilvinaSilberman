import React, { useRef } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import {
    BsInstagram,
    FaFacebookF
} from 'react-icons/all';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../constants/emailjs.constant';

const StyledContact = styled.section`
    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: column;

    & form {
        margin-top: 180px;
        padding: 0 20px;

        & h3 {
            margin-bottom: 40px;

            color: black;
            font-size: 36px;
            line-height: 46px;
            font-weight: 400;
        }

        & div {
            position: relative;
            width: 100%;
            margin-bottom: 28px;

            display: flex;
            flex-direction: column;

            & label {
                position: absolute;
                bottom: 10px;

                &.onchange {
                    top: -12px;
                }

                transition: all .6s;

                color: black;
                font-size: 14px;
                font-weight: 400;
            }

            & input,
            & textarea {
                width: 100%;
                height: 32px;
                margin-top: 10px;

                background-color: white;
                border: none;
                border-bottom: 1px solid gainsboro;
                border-radius: 0;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: black;
                font-size: 16px;
                font-weight: 400;

                &:focus,
                &:active {
                    border-bottom: 1px solid black;
                }
            }

            & textarea {
                height: 80px;
            }
        }

        & button {
                width: 100%;
                height: 42px;
                margin-top: 10px;
                padding: 0 20px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: black;
                border: none;
                border-radius: 40px;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: white;
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;
                letter-spacing: 2px;

                &:hover {
                    background-color: var(--colorPrincipal);
                }

                &.send__mail {
                    background-color: rgb(129, 218, 94);
                }
            }
    }

    & section {
        width: 100%;
        height: max-content;
        margin-top: 40px;
        padding: 40px 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        background-color: var(--colorPrincipal);

        text-align: right;

        & h4 {
            color: black;
            font-size: 24px;
            font-weight: 400;
        }

        & div {
            margin-top: 40px;

            display: flex;
            flex-direction: column;

            & a {
                transition: all .6s;

                color: black;
                font-size: 16px;
                font-weight: 400;
                text-decoration: none;

                &:last-child {
                    margin-top: 10px;
                }

                &:hover {
                    opacity: .8;
                    color: black;
                }
            }

            & h5 {
                color: black;
                font-size: 20px;
                font-weight: 400;
            }

            & span {
                margin-top: 28px;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;

                & a {
                    transition: all .6s;

                    &:last-child {
                        margin: 0 0 0 12px !important;
                    }

                    & svg {
                        transition: all .6s;

                        color: black;
                        font-size: 16px;
                    }

                    &:hover svg {
                        opacity: .8;

                        color: black;
                    }
                } 
            }
        }
    }

    @media only screen and (min-width: 768px) {
        flex-direction: row-reverse;

        & form {
            width: 50%;
            margin-top: 0;
            padding-bottom: 20px;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        & section {
            width: 50%;
            height: 100vh;
            margin-top: 0;
        }
    }

    @media only screen and (min-width: 1024px) {
        & form {
            padding: 0 80px 80px 80px;
        }

        & section {
            padding-right: 80px;
            padding-bottom: 80px;
        }
    }
`;

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then(() => {
                document.querySelector("form button").classList.add("send__mail");
                document.querySelector("form button").innerHTML = `Enviado`;

                setTimeout(()=> {
                    location.reload();
                }, 2500)
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        if(e.target.value.length > 0) {
            e.target.parentNode.children[0].classList.add('onchange');
        } else {
            e.target.parentNode.children[0].classList.remove('onchange');
        }
    };

    return (
        <div>
            <Header />
            <StyledContact>
                <form 
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <h3>Enviame un mensaje.</h3>
                    <div>
                        <label 
                            htmlFor='name'>
                            Nombre
                        </label>
                        <input 
                            onChange={handleChange}
                            type='text' 
                            name='name' 
                            id='name' 
                            minLength='3'
                            maxLength='20'
                            required
                        >
                        </input>
                    </div>
                    <div>
                        <label 
                            htmlFor='email'>
                            Email
                        </label>
                        <input 
                            onChange={handleChange}
                            type='email' 
                            name='email' 
                            id='email' 
                            minLength='6'
                            maxLength='40'
                            required
                        >
                        </input>
                    </div>
                    <div>
                        <label 
                            htmlFor='message'>
                            Mensaje
                        </label>
                        <textarea 
                            onChange={handleChange}
                            type='text' 
                            name='message' 
                            id='message' 
                            minLength='4'
                            maxLength='200'
                            required
                        >
                        </textarea>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
                <section>
                    <h4>Hablemos.</h4>
                    <div>
                        <a href='mailto:silvinasilberman@gmail.com'>silvinasilberman@gmail.com</a>
                        <a href='https://api.whatsapp.com/send?phone=+5491168750959&text=¡Hola%20Silvi!%20Quiero%20mi%20retrato!!' target="_blank" rel="noopener noreferrer">+54 9 1168750959</a>
                    </div>
                    <div>
                        <h5>Redes sociales</h5>
                        <span>
                            <a href='https://www.instagram.com/silvisilberarte/' target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                            <a href='https://www.facebook.com/silvina.silber' target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        </span>
                    </div>
                </section>
            </StyledContact>
        </div>
    );
};