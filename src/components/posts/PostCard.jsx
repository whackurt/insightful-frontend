import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, myPosts, user }) => {
	return (
		<div
			key={post?._id}
			className={`flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 p-4 lg:p-8 shadow-lg rounded-lg max-h-[315px]`}
		>
			<Link
				to={`/${
					myPosts || post?.author._id === user?._id ? 'myposts' : 'posts'
				}/${post?._id}`}
				className="font-semibold text-2xl md:text-3xl lg:text-4xl my-1"
			>
				{post?.title}
			</Link>
			<p className="">
				<span className="uppercase text-mainText">
					{moment(post?.createdAt).format('MMM DD YYYY')}
				</span>{' '}
				by{' '}
				<strong>
					{post.author?.first_name} {post.author?.last_name}
				</strong>
			</p>
			<p
				className="font-poppins min-h-40 overflow-hidden"
				dangerouslySetInnerHTML={{ __html: post?.summary }}
			></p>

			<div className="flex ml-auto mt-3 cursor-pointer hover:text-purple">
				<Link
					to={`/${
						myPosts || post?.author._id === user?._id ? 'myposts' : 'posts'
					}/${post?._id}`}
					className="bg-white text-purple italic border border-purple hover:shadow-md rounded-[50px] w-32 font-montserrat font-semibold text-center"
				>
					Read more...
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
