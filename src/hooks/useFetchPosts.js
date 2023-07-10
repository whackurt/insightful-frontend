import { useEffect, useState } from 'react';
import { Posts } from '../services/post/post';

const useFetchPosts = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const getAllPosts = async () => {
			await Posts().then((res) => {
				setPosts(res);
			});
		};
		getAllPosts();
	}, []);

	return { posts: posts };
};

export default useFetchPosts;
