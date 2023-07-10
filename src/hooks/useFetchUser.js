import { useEffect, useState } from 'react';
import { User } from '../services/user/user';

const useFetchUser = (access_token, id) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUser = async (token, user_id) => {
			await User(token, user_id).then((res) => {
				setData(res);
				setIsPending(false);
				setError(null);
			});
		};
		fetchUser(access_token, id);
	}, [access_token, id]);

	return { user: data, isPending: isPending, error: error };
};

export default useFetchUser;
