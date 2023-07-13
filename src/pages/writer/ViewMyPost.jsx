import React from 'react';
import WtContainer from '../../components/containers/WtContainer';
import WtSinglePost from '../../components/posts/WtSinglePost';

const ViewMyPost = ({ prev }) => {
	return (
		<WtContainer>
			<WtSinglePost prev={prev} />
		</WtContainer>
	);
};

export default ViewMyPost;
