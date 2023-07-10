import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchSinglePost from '../../hooks/useFetchSinglePost';
import SectionLabel from '../../components/label/SectionLabel';
import ReactQuill from 'react-quill';
import { UpdatePost } from '../../services/post/post';
import Modal from '../../components/modal/Modal';
import WtContainer from '../../components/containers/WtContainer';
import { IoMdArrowRoundBack } from 'react-icons/io';

const EditPost = ({ prev }) => {
	const { postId } = useParams();
	const { postdata } = useFetchSinglePost(postId);
	const [updates, setUpdates] = useState({});
	const [summary, setSummary] = useState('');
	const [body, setBody] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const [updateSuccess, setUpdateSuccess] = useState('');

	const saveChanges = async () => {
		const updatedContent = {
			title: updates?.title,
			summary: summary,
			content: body,
			featured: updates.featured,
		};
		await UpdatePost(
			localStorage.getItem('token'),
			postId,
			updatedContent
		).then(() => {
			setUpdateSuccess('Changes saved successfully.');
			localStorage.removeItem('changesmade');
		});
	};

	useEffect(() => {
		localStorage.removeItem('changesmade');
		setUpdates({
			...updates,
			title: postdata?.title,
			featured: postdata?.featured,
		});
		setSummary(postdata?.summary);
		setBody(postdata?.content);
	}, [postdata]);

	return (
		<WtContainer>
			{openModal ? (
				<Modal
					openModal={setOpenModal}
					message={'Are you sure you want to save changes for this post?'}
					successMsg={updateSuccess}
					action={saveChanges}
					actionBtnLabel={'Save Changes'}
					iconColor={'mainText'}
					afterActionNavigateTo={`/myposts/${postId}`}
				/>
			) : null}
			<div className="flex flex-col">
				<Link className="text-mainText hover:text-purple" to={prev}>
					<IoMdArrowRoundBack size={30} />
				</Link>
				<div className="pt-12">
					<SectionLabel section={'Edit Post'} />
				</div>
				<div className="w-full border border-mainText rounded my-8  px-2 lg:px-8 py-4 lg:py-16">
					<div className="flex flex-col gap-y-8" action="">
						<div>
							{/* Title */}
							<label htmlFor="title">Title</label>
							<input
								value={updates.title}
								onChange={(e) =>
									setUpdates({ ...updates, title: e.target.value })
								}
								className="w-full px-2 py-1"
								name="title"
								type="text"
							/>
						</div>
						<label htmlFor="summary">Summary</label>
						{!openModal ? (
							<div className="write-form -mt-6">
								<ReactQuill
									theme="snow"
									value={summary}
									onChange={setSummary}
								/>
							</div>
						) : null}

						<label htmlFor="summary">Body</label>
						{!openModal ? (
							<div className="write-form -mt-6">
								<ReactQuill theme="snow" value={body} onChange={setBody} />
							</div>
						) : null}

						<div className="flex items-center mb-4">
							<input
								checked={updates.featured}
								onChange={() =>
									setUpdates({ ...updates, featured: !updates.featured })
								}
								id="featured-checkbox"
								type="checkbox"
								className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="featured-checkbox"
								className="ml-2 text-sm font-medium"
							>
								Feature Post
							</label>
						</div>

						<button
							onClick={() => setOpenModal(true)}
							className="border text-white bg-purple border-purple hover:shadow-lg px-2 py-1 rounded"
						>
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</WtContainer>
	);
};

export default EditPost;
