import React, { useRef } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import {
    BsInstagram,
    FaFacebookF
} from 'react-icons/all';
import emailjs from '@emailjs/browser';

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
            width: 100%;
            margin-bottom: 32px;

            display: flex;
            flex-direction: column;

            & label {
                color: black;
                font-size: 14px;
                font-weight: 400;
            }

            & input,
            & textarea {
                width: 100%;
                height: 4px;
                margin-top: 10px;

                background-color: white;
                border: none;
                border-bottom: 1px solid gainsboro;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: black;
                font-size: 16px;
                font-weight: 400;

                &:valid {
                    height: 32px;
                }

                &:focus,
                &:active {
                    height: 32px;

                    border-bottom: 1px solid black;
                }
            }

            & textarea {
                height: 80px;

                &:focus,
                &:active,
                &:valid {
                    height: 80px;
                }
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
                    color: gray;
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
                        color: gray;
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

        emailjs.sendForm('service_e6bwg0p', 'template_3z9pvpj', form.current, 'hwH8wj1eN-3bQW7te')
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
                        <a href='/'>+54 9 1168750959</a>
                    </div>
                    <div>
                        <h5>Redes sociales</h5>
                        <span>
                            <a href='/'><BsInstagram /></a>
                            <a href='/'><FaFacebookF /></a>
                        </span>
                    </div>
                </section>
            </StyledContact>
        </div>
    );
};