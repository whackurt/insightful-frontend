import React, { useState } from 'react';
import Container from '../containers/Container';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import useFetchSinglePost from '../../hooks/useFetchSinglePost';
import PostSpinner from '../spinners/PostSpinner';

const SinglePost = () => {
	const [loading, setLoading] = useState(false);
	let { postId } = useParams();
	const { postdata } = useFetchSinglePost({
		id: postId,
		setLoading: setLoading,
	});

	return (
		<>
			<Container>
				<Link
					className="text-mainText hover:text-purple"
					to={`${localStorage.getItem('prev')}`}
				>
					<IoMdArrowRoundBack size={30} />
				</Link>
				<div className="flex flex-col items-center justify-center gap-y-4 py-8">
					<RiLightbulbFlashLine color="#5300c7" size={120} />
					{loading ? (
						<PostSpinner text={'Fetching post...'} />
					) : (
						<>
							<h1 className="text-center font-poppins lg:text-4xl font-bold">
								{postdata?.title}
							</h1>
							<p className="flex text-pale gap-x-2">
								by{' '}
								<strong className="uppercase font-semibold">
									{postdata?.author.first_name} {postdata?.author.last_name}
								</strong>
								<span>&#12539;</span>
								<span className="uppercase font-bold">
									{moment(postdata?.createdAt).format('MMM DD YYYY')}
								</span>
							</p>
							<p
								className="p-3 lg:p-8 font-poppins bg-white shadow-lg lg:text-lg rounded-bl-[30px] rounded-tr-[30px]"
								dangerouslySetInnerHTML={{ __html: postdata?.summary }}
							></p>
						</>
					)}
				</div>
				<div
					className="pb-8 lg:py-6 lg:text-lg px-2 lg:px-10"
					dangerouslySetInnerHTML={{ __html: postdata?.content }}
				></div>
			</Container>
		</>
	);
};

export default SinglePost;
