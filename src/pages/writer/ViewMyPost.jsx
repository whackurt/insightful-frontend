import React from 'react';
import WtContainer from '../../components/containers/WtContainer';
import WtSinglePost from '../../components/posts/WtSinglePost';

const ViewMyPost = ({ setPrev }) => {
	return (
		<WtContainer>
			<WtSinglePost setPrev={setPrev} />
		</WtContainer>
	);
};

export default ViewMyPost;
