import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

    const auth = cookies.jwt;

    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;