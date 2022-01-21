import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { userinfo } = useSelector((state) => state.userLogin);
    return userinfo && userinfo.isAdmin ? children : <Navigate to="/signin" />;

};

export default PrivateRoute;
