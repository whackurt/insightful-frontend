import { api } from '../../api/axios';

export const User = async (token, id) => {
	try {
		if (id) {
			const res = await api.get(`/user/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return res.data[0];
		}
	} catch (error) {
		console.log(error.message);
	}
};
