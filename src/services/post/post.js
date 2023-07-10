import { api } from '../../api/axios';

// Fetch all posts
export const Posts = async () => {
	try {
		const res = await api.get('/posts');
		return res.data;
	} catch (error) {}
};

// Fetch single post by id
export const PostById = async (postId) => {
	try {
		const res = await api.get(`/posts/${postId}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// Fetch post based on author
export const PostsByAuthor = async (token, authorId) => {
	try {
		const res = await api.get(`/posts/author/${authorId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

//Search posts
export const SearchPost = async (keyword) => {
	try {
		const res = await api.get(`/posts/search/${keyword}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

//Search posts
export const SearchUserPost = async (userId, keyword) => {
	try {
		const res = await api.get(`/posts/${userId}/search/${keyword}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// Create a new post
export const NewPost = async (token, postData) => {
	try {
		const res = await api.post('/posts', postData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return res.data[0];
	} catch (error) {
		console.log(error);
	}
};

// Delete a post
export const DeletePost = async (token, postId) => {
	try {
		const res = await api.delete(`/posts/${postId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res;
	} catch (error) {
		console.log(error);
	}
};

// Update a post
export const UpdatePost = async (token, postId, updatedContent) => {
	try {
		const res = await api.put(
			`/posts/${postId}`,
			{ updates: updatedContent },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
