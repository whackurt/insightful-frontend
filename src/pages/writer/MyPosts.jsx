import React, { useEffect, useState } from 'react';
import { PostsByAuthor, SearchUserPost } from '../../services/post/post';
import SearchBar from '../../components/posts/SearchBar';
import WtContainer from '../../components/containers/WtContainer';
import PostSpinner from '../../components/spinners/PostSpinner';
import PostCard from '../../components/posts/PostCard';
import { useLocation } from 'react-router-dom';

const MyPosts = ({ user, prev, setPrev }) => {
	const location = useLocation();
	const [loading, setLoading] = useState(false);
	const [myposts, setMyPosts] = useState([]);
	const [searchVal, setSearchVal] = useState('');
	const [searchRes, setSearchRes] = useState(null);
	const fetchPosts = async () => {
		setLoading(true);
		await PostsByAuthor(
			localStorage.getItem('token'),
			localStorage.getItem('user_id')
		).then((res) => {
			setMyPosts(res);
			setLoading(false);
		});
	};

	const search = async (keyword) => {
		setLoading(true);
		await SearchUserPost(localStorage.getItem('user_id'), keyword).then(
			(res) => {
				setSearchRes(res);
				setLoading(false);
			}
		);
	};

	useEffect(() => {
		fetchPosts();
		setPrev(location.pathname);
	}, []);

	useEffect(() => {
		search(searchVal);
	}, [searchVal]);

	return (
		<>
			<WtContainer user={user}>
				<div className="flex flex-col gap-y-4 ">
					<div className="flex flex-col gap-y-2 ">
						<SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
					</div>

					<div className="gap-x-8 my-2">
						{loading ? <PostSpinner text={'Fetching posts...'} /> : null}

						{!searchRes
							? myposts?.map((post) => (
									<PostCard prev={prev} myPosts={true} post={post} />
							  ))
							: searchRes.map((post) => <PostCard prev={prev} post={post} />)}
					</div>
				</div>
			</WtContainer>
		</>
	);
};

export default MyPosts;
