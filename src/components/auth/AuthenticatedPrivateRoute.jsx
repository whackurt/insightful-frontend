import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthenticatedPrivateRoute = ({ children }) => {
	// const navigate = useNavigate()
	if (localStorage.getItem('token') && localStorage.getItem('user_id')) {
		return <Navigate to={'/home'} replace />;
	}
	return children;
};

export default AuthenticatedPrivateRoute;
