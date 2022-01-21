import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { userinfo } = useSelector((state) => state.userLogin);
  return userinfo && userinfo.isAdmin ? children : <Navigate to="/signin" />;
};
export default AdminRoute