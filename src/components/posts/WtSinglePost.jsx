import React, { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import useFetchSinglePost from '../../hooks/useFetchSinglePost';
import moment from 'moment';
import { DeletePost } from '../../services/post/post';
import Modal from '../modal/Modal';
import PostSpinner from '../spinners/PostSpinner';

const WtSinglePost = ({ prev }) => {
	const [loading, setLoading] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);
	const { postId } = useParams();
	const { postdata } = useFetchSinglePost({
		id: postId,
		setLoading: setLoading,
	});
	const [deleteMsg, setDeleteMsg] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const deletePost = async () => {
		setDeleteLoading(true);
		await DeletePost(localStorage.getItem('token'), postId).then((res) => {
			if (res.data.deleted.deletedCount === 1) {
				setDeleteMsg('Post deleted successfully.');
				setDeleteLoading(false);
			}
		});
	};

	return (
		<>
			{openModal ? (
				<Modal
					loading={deleteLoading}
					openModal={setOpenModal}
					message={
						'Are you sure you want to delete this post? This action cannot be undone.'
					}
					successMsg={deleteMsg}
					iconColor={'error'}
					action={deletePost}
					actionBtnLabel={'Delete Post'}
					afterActionNavigateTo={`/myposts`}
				/>
			) : null}
			<div className="flex justify-between">
				<Link className="text-mainText hover:text-purple" to={prev}>
					<IoMdArrowRoundBack size={30} />
				</Link>
				<div className="flex gap-x-2">
					<Link
						to={`/myposts/edit/${postId}`}
						className="flex cursor-pointer hover:shadow-lg items-center text-white bg-purple gap-x-1 border border-purple px-2 py-1 rounded"
					>
						<AiOutlineEdit size={20} />
						<p className="text-md">Edit</p>
					</Link>
					<button
						onClick={() => setOpenModal(true)}
						className="flex cursor-pointer hover:shadow-lg items-center text-white bg-purple gap-x-1 border border-purple px-2 py-1 rounded"
					>
						<AiOutlineDelete size={20} />
						<p className="text-md">Delete</p>
					</button>
				</div>
			</div>
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
							className="p-3 lg:p-8 font-poppins rounded-xl bg-white shadow-lg lg:text-lg"
							dangerouslySetInnerHTML={{ __html: postdata?.summary }}
						></p>
					</>
				)}
			</div>
			<div
				className="pb-8 lg:py-6 lg:text-lg px-10"
				dangerouslySetInnerHTML={{ __html: postdata?.content }}
			></div>
		</>
	);
};

export default WtSinglePost;
