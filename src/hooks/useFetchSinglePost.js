import { useEffect, useState } from 'react';
import { PostById } from '../services/post/post';

const useFetchSinglePost = ({ id, setLoading }) => {
	const [postData, setPostData] = useState(null);
	useEffect(() => {
		const fetchSinglePost = async (postId) => {
			setLoading(true);
			await PostById(postId).then((res) => {
				setPostData(res[0]);
				setLoading(false);
			});
		};
		fetchSinglePost(id);
	}, [id]);

	return { postdata: postData };
};

export default useFetchSinglePost;
