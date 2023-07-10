import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { PostsByAuthor, SearchUserPost } from '../../services/post/post';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/posts/SearchBar';
import WtContainer from '../../components/containers/WtContainer';

const MyPosts = ({ user }) => {
	const [myposts, setMyPosts] = useState([]);
	const [searchVal, setSearchVal] = useState('');
	const [searchRes, setSearchRes] = useState(null);
	const fetchPosts = async () => {
		const posts = await PostsByAuthor(
			localStorage.getItem('token'),
			localStorage.getItem('user_id')
		);
		setMyPosts(posts);
	};

	const search = async (keyword) => {
		await SearchUserPost(localStorage.getItem('user_id'), keyword).then(
			(res) => {
				setSearchRes(res);
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
					<div className="md:grid-cols-2 lg:grid-cols-3 gap-x-8 my-2">
						{!searchRes
							? myposts?.map((post) => (
									<div
										key={post?._id}
										className="flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 p-2 lg:p-8 shadow-lg rounded-lg max-h-[315px]"
									>
										<Link
											to={`/myposts/${post?._id}`}
											className="font-semibold text-2xl md:text-3xl lg:text-4xl my-1"
										>
											{post?.title}
										</Link>
										<p className="">
											<span className="uppercase text-mainText">
												{moment(post?.createdAt).format('MMM DD yyyy')}
											</span>{' '}
											by{' '}
											<strong>
												{post?.author.first_name} {post?.author.last_name}
											</strong>
										</p>
										<p
											className="font-poppins min-h-40 overflow-hidden"
											dangerouslySetInnerHTML={{ __html: post?.summary }}
										></p>

										<div className="flex ml-auto mt-3 cursor-pointer hover:text-purple">
											<Link
												to={`/myposts/${post?._id}`}
												className="bg-purple text-white italic border border-mainText hover:border-purple rounded-[50px] w-32 font-montserrat font-semibold text-center"
											>
												Read more...
											</Link>
										</div>
									</div>
							  ))
							: searchRes.map((post) => (
									<div
										key={post?._id}
										className="flex flex-col bg-white hover:text-purple gap-y-2 article mb-8 p-2 lg:p-8 shadow-lg rounded-lg max-h-[315px]"
									>
										<Link
											to={`/myposts/${post?._id}`}
											className="font-semibold text-2xl md:text-3xl lg:text-4xl my-1"
										>
											{post?.title}
										</Link>
										<p className="">
											<span className="uppercase text-mainText">
												{moment(post?.createdAt).format('MMM DD yyyy')}
											</span>{' '}
											by{' '}
											<strong>
												{post?.author.first_name} {post?.author.last_name}
											</strong>
										</p>
										<p
											className="font-poppins min-h-40 overflow-hidden"
											dangerouslySetInnerHTML={{ __html: post?.summary }}
										></p>

										<div className="flex ml-auto mt-3 cursor-pointer hover:text-purple">
											<Link
												to={`/myposts/${post?._id}`}
												className="bg-purple text-white italic border border-mainText hover:border-purple rounded-[50px] w-32 font-montserrat font-semibold text-center"
											>
												Read more...
											</Link>
										</div>
									</div>
							  ))}
					</div>
				</div>
			</WtContainer>
		</>
	);
};

export default MyPosts;
