import { useEffect, useState } from 'react';
import { PostById } from '../services/post/post';

const useFetchSinglePost = (id) => {
	const [postData, setPostData] = useState(null);
	useEffect(() => {
		const fetchSinglePost = async (postId) => {
			await PostById(postId).then((res) => {
				setPostData(res[0]);
			});
		};
		fetchSinglePost(id);
	}, [id]);

	return { postdata: postData };
};

export default useFetchSinglePost;
