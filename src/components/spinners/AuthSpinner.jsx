import React from 'react';
import { SyncLoader } from 'react-spinners';

const AuthSpinner = ({ color }) => {
	return <SyncLoader size={8} color={`${!color ? '#FFFFFF' : color}`} />;
};

export default AuthSpinner;
