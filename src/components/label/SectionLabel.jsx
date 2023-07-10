import React from 'react';

const SectionLabel = ({ section }) => {
	return (
		<h1 className="uppercase text-purple text-2xl border-b border-mainText px-2 font-semibold">
			{section}
		</h1>
	);
};

export default SectionLabel;
