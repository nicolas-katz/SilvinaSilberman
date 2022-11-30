import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_EMAIL } from '../constants/adminAuth.constant';
import { AppContext } from '../context/AppContext';

export default function Login() {
    const { loginAdminUser, setIsLogged } = useContext(AppContext);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if(user.email === ADMIN_EMAIL) {
                await loginAdminUser(user.email, user.password);
                setIsLogged(true);
                navigate('/admin');
            } else {
                setError('El correo ingresado no es del administrador.');
            }
        } catch (err) {
            switch (err.message) {
                case 'email-invalid':
                    setError('Correo invalido. Por favor revisa los campos.');
                    break;
                case 'user-not-found':
                    setError('Correo inexistente. Por favor revisa los campos.');
                    break;
                case 'wrong-password':
                    setError('Contraseña erronea. Por favor revisa los campos.');
                    break;
                default:
                    setError('Ocurrio un error. Por favor vuelve a intentarlo.')
                    break;
            }
        }
    };

    return (
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
            <button 
                type='submit'>
                Iniciar sesión
            </button>
            {
                error && <h1>{error}</h1>
            }
        </form>
    );
};