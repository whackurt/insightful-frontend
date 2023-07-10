import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useFetchPosts from '../../hooks/useFetchPosts';
import SectionLabel from '../label/SectionLabel';

const AllPosts = ({ searchResults }) => {
	const { posts } = useFetchPosts();
	const [results, setResults] = useState([]);

	useEffect(() => {
		setResults(searchResults);
	}, [searchResults]);

	return (
		<>
			{!results ? (
				<>
					<SectionLabel section={'Featured'} />
					<div className="flex flex-col">
						{posts
							?.filter((post) => post?.featured === true)
							.map((post) => (
								<div
									key={post?._id}
									className={`flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 p-2 lg:p-8 shadow-lg rounded-lg max-h-[315px]`}
								>
									<Link
										to={`/posts/${post?._id}`}
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
											to={`/posts/${post?._id}`}
											className="bg-purple text-white italic border border-mainText hover:border-purple rounded-[50px] w-32 font-montserrat font-semibold text-center"
										>
											Read more...
										</Link>
									</div>
								</div>
							))}
					</div>

					<SectionLabel section={'More Posts'} />
					<div className="flex flex-col gap-x-8 pb-16">
						{posts
							?.filter((post) => post.featured === false)
							.map((post) => (
								<div
									key={post?._id}
									className={`flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 p-8  shadow-lg rounded-lg max-h-[315px]`}
								>
									<Link
										to={`/posts/${post?._id}`}
										className="font-semibold text-2xl md:text-3xl lg:text-4xl my-1"
									>
										{post?.title}
									</Link>
									<p className="">
										<span className="uppercase date text-pale">
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
											to={`/posts/${post?._id}`}
											className="bg-purple text-white italic border border-mainText hover:border-purple rounded-[50px] w-32 font-montserrat font-semibold text-center "
										>
											Read more...
										</Link>
									</div>
								</div>
							))}
					</div>
				</>
			) : (
				<>
					{results?.map((post) => (
						<div
							key={post?._id}
							className={`flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 pt-4 p-2 lg:p-8 shadow-lg rounded-lg`}
						>
							<Link
								to={`/posts/${post?._id}`}
								className="title font-semibold text-2xl md:text-3xl lg:text-4xl my-1"
							>
								{post?.title}
							</Link>
							<p className="">
								<span className="uppercase date text-pale">
									{moment(post?.createdAt).format('MMM DD YYYY')}
								</span>{' '}
								by{' '}
								<strong>
									{post.author?.first_name} {post.author?.last_name}
								</strong>
							</p>
							<p
								className="font-poppins text-lg min-h-40 overflow-hidden"
								dangerouslySetInnerHTML={{ __html: post?.summary }}
							></p>

							<div className="flex ml-auto mt-3 cursor-pointer hover:text-purple">
								<Link
									to={`/posts/${post?._id}`}
									className="bg-purple text-white italic border border-mainText hover:border-purple rounded-[50px] w-32 font-montserrat font-semibold text-center "
								>
									Read more...
								</Link>
							</div>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default AllPosts;
