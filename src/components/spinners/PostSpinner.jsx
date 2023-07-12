import React from 'react';
import { HashLoader } from 'react-spinners';

const PostSpinner = ({ text }) => {
	return (
		<div className="flex flex-col py-4 gap-y-3 justify-center items-center">
			<HashLoader size={75} aria-label={text} color={'#5300c7'} />
			<p className="text-mainText">{text}</p>
		</div>
	);
};

export default PostSpinner;
