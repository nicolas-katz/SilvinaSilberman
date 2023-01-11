import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../constants/emailjs.constant';
import foto__contacto from '../assets/contact.jpeg';

const StyledContact = styled.section`
    width: 100%;
    height: max-content;
    margin-top: 40px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;

    & div {
        & div.form__information {
            width: 100%;
            height: max-content;
            margin-bottom: 40px;

            display: flex;
            flex-direction: column;

            & h1 {
                margin-bottom: 20px;

                color: black;
                font-size: 28px;
                line-height: 38px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            & p {
                margin-bottom: 10px;

                color: gray;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;

                &:last-child {
                    margin-bottom: 0;
                }

                & a {
                    padding-bottom: 2px;

                    border-bottom: 1px solid black;
                    transition: all .6s;

                    color: black;
                    font-weight: 400;
                    text-decoration: none;

                    &:hover {
                        color: black;
                    }
                }
            }
        }
        
        & form {
            & div {
                position: relative;
                width: 100%;
                margin-bottom: 20px;

                display: flex;
                flex-direction: column;

                & label {
                    margin-bottom: 10px;

                    color: black;
                    font-size: 14px;
                    font-weight: 300;
                }

                & input,
                & textarea {
                    width: 100%;
                    height: 48px;
                    padding: 0 20px;

                    background-color: ghostwhite;
                    border: 1px solid gainsboro;
                    border-radius: 1px;
                    outline: none;
                    cursor: pointer;
                    transition: all .6s;

                    color: black;
                    font-size: 16px;
                    font-weight: 400;
                }

                & textarea {
                    height: 120px;
                    padding-top: 20px;
                }
            }

            & button {
                width: max-content;
                height: 48px;
                margin-top: 10px;
                padding: 0 28px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: grey;
                border: none;
                border-radius: 1px;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: white;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 4px;

                &:hover {
                    background-color: var(--colorPrincipal);
                }

                &.send__mail {
                    background-color: rgb(129, 218, 94);
                }
            }
        }
    }

    & div:last-child {
        width: 100%;
        height: max-content;
        margin-top: 40px;

        & img {
            width: 100%;
            height: 460px;
            margin-bottom: 20px;

            object-fit: cover;
            image-rendering: optimizeQuality;

            border: none;
            border-radius: 2px;
        }

        & h4 {
            color: gray;
            font-size: 18px;
            line-height: 28px;
            font-weight: 300;
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 40px 20px;

        flex-direction: row;
        justify-content: space-between;

        & div {
            width: 45%;

            & div.form__information {
                & h1 {
                    font-size: 28px;
                    line-height: 38px;
                }
            }

            & form {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;

                & div {
                    width: 100%;

                    &.row {
                        width: 49%;
                    }
                }
            }
        }

        & div:last-child {
            width: 45%;
            margin-top: 0;

            img {
                height: 420px;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 80px;

        & div:last-child {
            img {
                height: 520px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 80px 160px;

        & div:last-child {
            width: 40%;
        }
    }
`;

export default function Contact() {
    useEffect(() => {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then(() => {
                document.querySelector("form button").classList.add("send__mail");
                document.querySelector("form button").innerHTML = `ENVIADO`;

                setTimeout(()=> {
                    location.reload();
                }, 2500)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Header />
            <StyledContact>
                <div>
                    <div className='form__information'>
                        <h1>Empezar proyecto</h1>
                        <p>Contactame en el formulario de aquí abajo para más información o vía email en <a href='mailto:silvinasilberman@gmail.com'>silvinasilberman@gmail.com</a>.</p>
                        <p>Tenes un proyecto? Directamente rellena este <a href=''>formulario rapido</a> y pronto estaré en contacto con vos.</p>
                        <p>También podes conocer como trabajo <a href='/about'>aquí</a>.</p>
                    </div>
                    <form 
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className='row'>
                            <label 
                                htmlFor='name'>
                                Nombre
                            </label>
                            <input 
                                type='text' 
                                name='name' 
                                id='name' 
                                minLength='3'
                                maxLength='20'
                                required
                            >
                            </input>
                        </div>
                        <div className='row'>
                            <label 
                                htmlFor='email'>
                                Email
                            </label>
                            <input 
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
                                htmlFor='issue'>
                                Asunto
                            </label>
                            <input 
                                type='text' 
                                name='issue' 
                                id='issue' 
                                minLength='4'
                                maxLength='28'
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
                </div>
                <div>
                    <img src={foto__contacto} alt='Silvina Silberman' />
                    <h4>Actualmente, me encuentro trabajando en CABA pero realizo encargo a todo el país.</h4>
                </div>
            </StyledContact>
            <Footer />
        </div>
    );
};