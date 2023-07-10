import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirect, children }) => {
	if (!localStorage.getItem('token') && !localStorage.getItem('user_id')) {
		return <Navigate to={redirect} replace />;
	}
	return children;
};

export default PrivateRoute;
