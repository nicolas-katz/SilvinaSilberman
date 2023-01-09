import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./context/AppContext";

const StyledLoading = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ghostwhite;

    h1 {
        color: black;
        font-size: 16px;
        line-height: 26px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;

export function ProtectedAdmin({ children }) {
    const { user, loadingUser } = useContext(AppContext);

    if (loadingUser) return <StyledLoading><h1>Ingresando a la cuenta de administrador...</h1></StyledLoading>;

    if (!user) return <Navigate to="/login" />;
    
    return <div>{children}</div>;
};

export function ProtectedLogin({ children }) {
    const { user } = useContext(AppContext);

    if (user) return <Navigate to="/admin" />;
    
    return <div>{children}</div>;
};