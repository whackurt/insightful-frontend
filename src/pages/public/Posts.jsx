import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/posts/SearchBar';
import AllPosts from '../../components/posts/AllPosts';
import Container from '../../components/containers/Container';
import { SearchPost } from '../../services/post/post';
import { useLocation } from 'react-router-dom';

const Posts = ({ setPrev, user }) => {
	const [searchVal, setSearchVal] = useState('');
	const [searchRes, setSearchRes] = useState(null);

	const search = async (keyword) => {
		await SearchPost(keyword).then((res) => {
			setSearchRes(res);
		});
	};

	useEffect(() => {
		search(searchVal);
	}, [searchVal]);

	useEffect(() => {
		localStorage.setItem('prev', '/posts');
	}, []);
	return (
		<>
			<Container>
				<div className="flex flex-col gap-y-8">
					<SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
					<AllPosts user={user} searchResults={searchRes} />
				</div>
			</Container>
		</>
	);
};

export default Posts;
