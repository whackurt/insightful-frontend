import React from 'react';

const WtContainer = ({ children }) => {
	return (
		<>
			<div className="min-h-screen pt-24 px-3 md:px-16 lg:px-80">
				{children}
			</div>
		</>
	);
};

export default WtContainer;
