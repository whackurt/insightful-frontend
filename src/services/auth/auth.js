import { api } from '../../api/axios';

export const UserSignUp = async (creds) => {
	try {
		await api.post('/auth/signup', creds).then((res) => {
			console.log(res.data);
		});
	} catch (error) {
		console.log(error);
	}
};

export const UserLogin = async (creds) => {
	try {
		const res = await api.post('/auth/login', creds);
		return res.data;
	} catch (error) {
		return error.message;
	}
};
