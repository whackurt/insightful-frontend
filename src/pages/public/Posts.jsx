import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/posts/SearchBar';
import AllPosts from '../../components/posts/AllPosts';
import Container from '../../components/containers/Container';
import { SearchPost } from '../../services/post/post';

const Posts = ({ setPrev }) => {
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
		setPrev('/posts');
	}, []);

	return (
		<>
			<Container>
				<div className="flex flex-col gap-y-8">
					<SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
					<AllPosts searchResults={searchRes} />
				</div>
			</Container>
		</>
	);
};

export default Posts;
