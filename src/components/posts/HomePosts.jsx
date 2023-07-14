import React, { useState } from 'react';
import { useReload } from '../../hooks/useReload';
import useFetchPosts from '../../hooks/useFetchPosts';
import SectionLabel from '../label/SectionLabel';
import PostSpinner from '../spinners/PostSpinner';
import PostCard from './PostCard';

const HomePosts = ({ user, prev }) => {
	const [loading, setLoading] = useState(false);
	const { posts } = useFetchPosts(setLoading);

	useReload();
	return (
		<div className="">
			{/* Featured */}
			<SectionLabel section={'Featured'} />
			{loading ? <PostSpinner text={'Fetching posts...'} /> : null}
			{!posts && !loading ? (
				<p className="my-2 text-sm text-center">Unable to fetch posts.</p>
			) : null}
			<div className="flex flex-col gap-x-8 my-4">
				{posts
					?.filter((post) => post?.featured === true)
					?.slice(0, 1)
					.map((feat) => (
						<PostCard key={feat?._id} prev={prev} user={user} post={feat} />
					))}
			</div>

			{/* Recent */}
			<SectionLabel section={'Recent'} />
			{loading ? <PostSpinner text={'Fetching posts...'} /> : null}
			{!posts && !loading ? (
				<p className="my-2 text-sm text-center">Unable to fetch posts.</p>
			) : null}
			<div className="flex flex-col my-4">
				{posts
					?.filter((post) => post?.featured === false)
					?.slice(0, 4)
					.map((rec) => (
						<PostCard key={rec?._id} prev={prev} user={user} post={rec} />
					))}
			</div>
		</div>
	);
};

export default HomePosts;
