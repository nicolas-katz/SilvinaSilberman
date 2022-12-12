import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";

export function ProtectedAdmin({ children }) {
    const { user, loading } = useContext(AppContext);
    const navigate = useNavigate();

    if (loading) return <h1>Cargando...</h1>;

    if (!user) return navigate('/login');

    return <div>{children}</div>;
};

export function ProtectedLogin({ children }) {
    const { user, loading } = useContext(AppContext);
    const navigate = useNavigate();

    if (loading) return <h1>Cargando...</h1>;

    if (user) return navigate('/admin');

    return <div>{children}</div>;
};