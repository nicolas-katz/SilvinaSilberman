import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import { 
    CgDanger
} from 'react-icons/all';

const StyledLogin = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & div.error__message {
        width: 100%;
        max-width: 600px;
        height: max-content;
        margin-top: 36px;
        padding: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: #c0212173;

        & p {
            color: #e53e3e;
            font-size: 16px;
            line-height: 26px;
            font-weight: 400;
        }

        & svg {
            min-width: max-content;
            margin-left: 10px;

            color: #e53e3e;
            font-size: 20px;
        }
    }

    & h6 {
        margin-bottom: 20px;

        color: black;
        font-size: 16px;
        font-weight: 300;

        & a {
            width: max-content;
            padding-bottom: 2px;

            border-bottom: 1px solid gainsboro;
            
            color: gray;
            text-decoration: none;
        }
    }

    & h1 {
        margin-bottom: 36px;

        color: black;
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
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
    const { loginAdminUser, resetPassword } = useContext(AppContext);
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
            console.log('Login autorizado.')
            navigate('/admin');
        } catch (err) {
            console.log(err.message)
            switch (err.message) {
                case 'Firebase: Error (auth/user-not-found).':
                    setError('Correo inexistente. Por favor revisa los campos.');
                    break;
                case 'Firebase: Error (auth/email-invalid).':
                    setError('Correo invalido. Por favor revisa los campos.');
                    break;
                case 'Firebase: Error (auth/wrong-password).':
                    setError('Contraseña erronea. Por favor revisa los campos.');
                    break;
                default:
                    setError('Ocurrio un error. Por favor vuelve a intentarlo.')
                    break;
            }
        }
    };

    const handleResetPassword = async () => {
        if (!admin.email) return setError("Escribe tu correo en la casilla para resetear tu contraseña.");
        try {
          await resetPassword(admin.email);
          setError('Te enviamos un email a tu correo para que puedas resetear tu contraseña.')
        } catch (err) {
            setError('Ocurrio un error. No pudimos resetear tu contraseña. Vuelve a intentarlo.');
        }
    };    

    return (
        <StyledLogin>
            <h6>Regresar al home <NavLink to='/'>aquí</NavLink>.</h6>
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
    );
};