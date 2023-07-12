import React, { useEffect, useState } from 'react';
import { PostsByAuthor, SearchUserPost } from '../../services/post/post';
import SearchBar from '../../components/posts/SearchBar';
import WtContainer from '../../components/containers/WtContainer';
import PostSpinner from '../../components/spinners/PostSpinner';
import PostCard from '../../components/posts/PostCard';

const MyPosts = ({ user }) => {
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

						{/* {!myposts.length > 0 ? (
							<p className="my-4 text-mainText text-sm text-center">
								No Posts Available
							</p>
						) : null} */}

						{!searchRes
							? myposts?.map((post) => <PostCard myPosts={true} post={post} />)
							: searchRes.map((post) => <PostCard post={post} />)}
					</div>
				</div>
			</WtContainer>
		</>
	);
};

export default MyPosts;
