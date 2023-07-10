import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { useReload } from '../../hooks/useReload';
import useFetchPosts from '../../hooks/useFetchPosts';
import SectionLabel from '../label/SectionLabel';

const HomePosts = () => {
	const { posts } = useFetchPosts();

	useReload();
	return (
		<div className="">
			{/* Featured */}
			<SectionLabel section={'Featured'} />
			<div className="flex flex-col gap-x-8 my-4">
				{posts
					?.filter((post) => post?.featured === true)
					?.slice(0, 1)
					.map((feat) => (
						<div
							key={feat?._id}
							className={`flex flex-col bg-white hover:text-purple  gap-y-2 article mb-8 p-2 lg:p-8  shadow-lg rounded-lg`}
						>
							<Link
								to={`/posts/${feat?._id}`}
								className="font-semibold text-2xl md:text-3xl lg:text-4xl my-1"
							>
								{feat?.title}
							</Link>
							<p className="">
								<span className="uppercase date text-gray-500">
									{moment(feat?.createdAt).format('MMM DD YYYY')}
								</span>{' '}
								by{' '}
								<strong>
									{feat?.author.first_name} {feat?.author.last_name}
								</strong>
							</p>
							<p
								className="font-poppins text-lg min-h-40 overflow-hidden"
								dangerouslySetInnerHTML={{ __html: feat?.summary }}
							></p>

							<div className="flex ml-auto mt-3 cursor-pointer hover:text-purple">
								<Link
									to={`/posts/${feat?._id}`}
									className="bg-purple text-white italic border border-mainText hover:border-purple rounded-[50px] w-32 font-montserrat font-semibold text-center "
								>
									Read more...
								</Link>
							</div>
						</div>
					))}
			</div>

			{/* Recent */}
			<SectionLabel section={'Recent'} />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 my-4">
				{posts
					?.filter((post) => post?.featured === false)
					?.slice(0, 5)
					.map((rec) => (
						<div
							key={rec?._id}
							className={`flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 p-8  shadow-lg rounded-lg`}
						>
							<Link
								to={`/posts/${rec?._id}`}
								className="font-semibold text-2xl md:text-3xl lg:text-4xl my-1"
							>
								{rec?.title}
							</Link>
							<p className="">
								<span className="uppercase date text-gray-500">
									{moment(rec?.createdAt).format('MMM DD yyyy')}
								</span>{' '}
								by{' '}
								<strong>
									{rec?.author.first_name} {rec?.author.last_name}
								</strong>
							</p>
							<p
								className="font-poppins text-lg max-h-40 overflow-hidden"
								dangerouslySetInnerHTML={{ __html: rec?.summary }}
							></p>

							<div className="flex ml-auto mt-3 cursor-pointer hover:text-purple">
								<Link
									to={`/posts/${rec?._id}`}
									className="bg-purple text-white italic border border-mainText hover:border-purple rounded-[50px] w-32 font-montserrat font-semibold text-center "
								>
									Read more...
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default HomePosts;
