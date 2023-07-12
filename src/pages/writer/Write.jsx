import React, { useState } from 'react';
import WtContainer from '../../components/containers/WtContainer';
import ReactQuill from 'react-quill';
import { NewPost } from '../../services/post/post';
import Modal from '../../components/modal/Modal';
import SectionLabel from '../../components/label/SectionLabel';
import { useNavigate } from 'react-router-dom';

const Write = ({ user }) => {
	const [loading, setLoading] = useState(false);
	const [post, setPostData] = useState({
		title: '',
		featured: false,
	});
	const [summary, setSummary] = useState('');
	const [body, setBody] = useState('');

	const [titleError, setTitleError] = useState(false);
	const [summaryError, setSummaryError] = useState(false);
	const [bodyError, setBodyError] = useState(false);
	const [errorMsg, setErrorMsg] = useState({
		title: 'Title is required.',
		summary: 'Summary is required.',
		body: 'Body is required.',
	});

	const [openModal, setOpenModal] = useState(false);
	const [success, setSuccessMsg] = useState('');

	const validatePost = () => {
		var validPost = false;
		setTitleError(false);
		setSummaryError(false);
		setBodyError(false);

		if (post.title.length === 0) {
			setTitleError(true);
		}
		if (
			summary.length === 0 ||
			summary === '<p><br></p>' ||
			summary === '<p><br></p>' ||
			summary === '<h1><br></h1>' ||
			summary === '<h2><br></h2>' ||
			summary === '<h3><br></h3>'
		) {
			setSummaryError(true);
		}
		if (
			body.length === 0 ||
			body === '<p><br></p>' ||
			body === '<h1><br></h1>' ||
			body === '<h2><br></h2>' ||
			body === '<h3><br></h3>'
		) {
			setBodyError(true);
		} else {
			validPost = true;
		}

		return validPost;
	};

	const submitPost = async () => {
		setLoading(true);
		await NewPost(localStorage.getItem('token'), {
			title: post.title,
			summary: summary,
			content: body,
			featured: post.featured,
			author: localStorage.getItem('user_id'),
		}).then((res) => {
			setSuccessMsg('Post published successfully');
			setLoading(false);
			setTimeout(() => {
				setPostData({
					title: '',
					featured: false,
				});
				setSummary('');
				setBody('');
			}, 3000);
		});
	};

	return (
		<>
			<WtContainer user={user}>
				{openModal ? (
					<Modal
						loading={loading}
						openModal={setOpenModal}
						message={'Are you sure you want to publish this post?'}
						successMsg={success}
						iconColor={'success'}
						action={submitPost}
						actionBtnLabel={'Publish'}
						afterActionNavigateTo={`/myposts`}
					/>
				) : null}
				<div className="flex flex-col py-8 ">
					{/* <h1 className="text-2xl font-semibold">Write a Post</h1> */}
					<div>
						<SectionLabel section={'Write a Post'} />
					</div>

					<div className="w-full border border-mainText rounded my-8  px-2 lg:px-8 py-4 lg:py-16">
						<div className="flex flex-col gap-y-6">
							<div>
								{/* Title */}
								<label htmlFor="title">Title</label>
								<input
									value={post.title}
									onChange={(e) =>
										setPostData({ ...post, title: e.target.value })
									}
									className="border-mainText w-full px-2 py-1 "
									name="title"
									type="text"
								/>
								<p className="text-sm text-error py-2">
									{titleError ? errorMsg.title : ''}
								</p>
							</div>
							<label htmlFor="summary">Summary</label>
							<div className="write-form -mt-6">
								{!openModal ? (
									<ReactQuill
										theme="snow"
										value={summary}
										onChange={setSummary}
									/>
								) : null}
								{/* {JSON.stringify(summary)} */}
								<div className="py-2">
									<p className="text-sm text-error">
										{summaryError ? errorMsg.summary : ''}
									</p>
								</div>
							</div>

							<label htmlFor="summary">Body</label>
							<div className="write-form -mt-6">
								{!openModal ? (
									<ReactQuill theme="snow" value={body} onChange={setBody} />
								) : null}
								{/* {JSON.stringify(body)} */}
								<div className="py-2">
									<p className="text-sm text-error">
										{bodyError ? errorMsg.body : ''}
									</p>
								</div>
							</div>

							<div className="flex items-center mb-4">
								<input
									checked={post.featured}
									onChange={() =>
										setPostData({ ...post, featured: !post.featured })
									}
									id="featured-checkbox"
									type="checkbox"
									className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									htmlFor="featured-checkbox"
									className="ml-2 text-sm font-medium text-gray-900 "
								>
									Feature Post
								</label>
							</div>

							<button
								onClick={() => {
									const validated = validatePost();
									if (validated) {
										setOpenModal(true);
									}
								}}
								className="bg-purple text-white rounded-[50px] cursor-pointer py-2 hover:shadow-lg"
							>
								Publish Post
							</button>
						</div>
					</div>
				</div>
			</WtContainer>
		</>
	);
};

export default Write;
