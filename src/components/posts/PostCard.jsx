import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const PostCard = ({ post, myPosts, user }) => {
	return (
		<div
			key={post?._id}
			className={`flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 p-4 lg:p-6 shadow-lg rounded-lg `}
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
				<span className="uppercase text-purple">
					{moment(post?.createdAt).format('MMM DD YYYY')}
				</span>{' '}
				by{' '}
				<strong className="text-purple">
					{post.author?.first_name} {post.author?.last_name}
				</strong>
			</p>
			<p
				className="font-poppins"
				dangerouslySetInnerHTML={{
					__html: post?.summary,
				}}
			></p>

			<div className="flex ml-auto mt-3 cursor-pointer hover:text-purple">
				<Link
					to={`/${
						myPosts || post?.author._id === user?._id ? 'myposts' : 'posts'
					}/${post?._id}`}
					className="flex items-center gap-x-1 bg-white pl-3  text-purple italic border border-purple hover:shadow-md rounded-[50px] text-sm font-montserrat text-center"
				>
					Read more{' '}
					<span className="bg-purple text-white rounded-[50px] p-1 border">
						<AiOutlineArrowRight />
					</span>
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
