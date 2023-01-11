import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
    CgDanger
} from 'react-icons/all';

const StyledLogin = styled.div`
    width: 100%;
    min-height: max-content;
    padding: 120px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & div.error__message {
        width: 100%;
        max-width: 600px;
        height: max-content;
        margin-top: 30px;
        padding: 20px;

        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;

        background-color: #c0212173;

        & p {
            color: #e53e3e;
            font-size: 12px;
            line-height: 22px;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        & svg {
            margin-bottom: 20px;

            color: #e53e3e;
            font-size: 24px;
        }
    }

    & h1 {
        margin-bottom: 40px;

        color: black;
        font-size: 24px;
        line-height: 34px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    & form {
        width: 100%;
        max-width: 600px;
        height: max-content;
        padding: 20px;

        display: flex;
        flex-direction: column;

        background-color: ghostwhite;

        & input {
            width: 100%;
            height: 54px;
            margin-bottom: 20px;
            padding: 0 20px;

            background-color: white;
            border: 1px solid gainsboro;
            border-radius: 1px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 16px;
            font-weight: 400;
        }

        & div {
            display: flex;
            flex-direction: column;

            & button {
                width: 100%;
                height: 54px;
                margin-bottom: 20px;
                padding: 0 24px;

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
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            & h4 {
                width: max-content;
                padding-bottom: 4px;

                border-bottom: 1px solid gainsboro;
                cursor: pointer;

                color: grey;
                font-size: 16px;
                font-weight: 300;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & h1 {
            font-size: 28px;
            line-height: 38px;
        }   

        & div.error__message {
            padding: 40px;

            flex-direction: row;
            justify-content: space-between;

            & p {
                max-width: 80%;

                font-size: 14px;
                line-height: 24px;
                text-align: left;
            }

            & svg {
                margin-bottom: 0;

                font-size: 28px;
            }
        }

        & form {
            padding: 48px;

            & div {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                & button {
                    width: max-content;
                    margin-bottom: 0;
                    padding: 0 36px;
                }
            }            
        }
    }
`;

export default function Login() {
    useEffect(() => {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
    }, []);

    const { loginAdminUser, resetPassword, user } = useContext(AppContext);
    const navigate = useNavigate();

    const [admin, setAdmin] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = ({ target: { name, value }} ) => {
        setAdmin({ ...admin, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await loginAdminUser(admin.email, admin.password);
            user && navigate('/admin');
        } catch( err ) {
            console.error(err);
            setError('Ocurrio un error. Revisa si has escrito bien tanto tu correo como tu contraseña o vuelve a intentarlo más tarde.');
        }
    };

    const handleResetPassword = async () => {
        if (!admin.email) return setError("Escribe tu correo en la casilla para resetear tu contraseña.");
        try {
          await resetPassword(admin.email);
          setError('Te enviamos un email a tu correo para que puedas resetear tu contraseña.')
        } catch (err) {
            setError('Ocurrio un error. No pudimos resetear tu contraseña. Revisa si has escrito bien tu correo o vuelve a intentarnos más tarde.');
        }
    };    

    return (
        <div>
            <Header />
            <StyledLogin>
                <h1>Acceso de administrador</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        type='email' 
                        name='email'
                        id='email'
                        minLength='6'
                        maxLength='40'
                        placeholder='Ingresa tu correo electronico.'
                        required />
                    <input 
                        onChange={handleChange}
                        type='password' 
                        name='password'
                        id='password'
                        minLength='6'
                        maxLength='40'
                        placeholder='Ingresa tu contraseña.'
                        required />
                    <div>
                        <button 
                            type='submit'>
                            Iniciar sesión
                        </button>
                        <h4 onClick={handleResetPassword}>¿Olvidaste tu contraseña?</h4>
                    </div>
                </form>
                {
                    error && <div className='error__message'><p>{error}</p><CgDanger /></div>
                }
            </StyledLogin>
            <Footer />
        </div>
    );
};