import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const StyledAdmin = styled.div`
    width: 100%;
    height: max-content;
    min-height: 300px;
    margin-top: 60px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    & h1 {
        color: black;
        font-size: 28px;
        line-height: 38px;
        font-weight: 400;
    }

    & button.logout {
        width: max-content;
        height: 54px;
        margin-top: 20px;
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
`;

export default function Admin() {
    const { logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logout();
        console.log('Se ha cerrado sesión correctamente.')
        navigate('/');
      } catch (error) {
        console.error(error.message);
      }
    };

    return (
        <div>
            <Header />
            <StyledAdmin>
                <h1>Cuenta de administrador</h1>
                <button className='logout' onClick={handleLogout}>Cerrar sesión</button>
            </StyledAdmin>
            <Footer />
        </div>
    );
};