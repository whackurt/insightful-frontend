import React from 'react';

const Container = ({ children }) => {
	return (
		<>
			<div className="min-h-screen px-3 pt-24 md:px-16 lg:px-80">
				{children}
			</div>
		</>
	);
};

export default Container;
