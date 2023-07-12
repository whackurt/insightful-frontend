import React, { useEffect, useState } from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import SectionLabel from '../label/SectionLabel';
import PostSpinner from '../spinners/PostSpinner';
import PostCard from './PostCard';

const AllPosts = ({ searchResults, user, setPrev, prev }) => {
	const [loading, setLoading] = useState(false);
	const { posts } = useFetchPosts(setLoading);
	const [results, setResults] = useState([]);

	useEffect(() => {
		setResults(searchResults);
	}, [searchResults]);

	return (
		<>
			{!results ? (
				<>
					<SectionLabel section={'Featured'} />
					{loading ? <PostSpinner text={'Fetching posts...'} /> : null}
					{!posts && !loading ? (
						<p className="my-2 text-sm text-center">Unable to fetch posts.</p>
					) : null}
					<div className="flex flex-col">
						{posts
							?.filter((post) => post?.featured === true)
							.map((post) => (
								<PostCard prev={prev} user={user} post={post} />
							))}
					</div>

					<SectionLabel section={'More Posts'} />
					{loading ? <PostSpinner text={'Fetching posts...'} /> : null}
					{!posts && !loading ? (
						<p className="my-2 text-sm text-center">Unable to fetch posts.</p>
					) : null}
					<div className="flex flex-col pb-16">
						{posts
							?.filter((post) => post.featured === false)
							.map((post) => (
								<PostCard user={user} post={post} />
							))}
					</div>
				</>
			) : (
				<>
					{results?.map((post) => (
						<PostCard post={post} />
					))}
				</>
			)}
		</>
	);
};

export default AllPosts;
