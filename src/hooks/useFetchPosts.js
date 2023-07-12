import { useEffect, useState } from 'react';
import { Posts } from '../services/post/post';

const useFetchPosts = (setLoading) => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const getAllPosts = async () => {
			setLoading(true);
			await Posts().then((res) => {
				setPosts(res);
				setLoading(false);
			});
		};
		getAllPosts();
	}, []);

	return { posts: posts };
};

export default useFetchPosts;
