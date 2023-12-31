import React from 'react';
import { RiLightbulbFlashLine } from 'react-icons/ri';

const Footer = ({ blogName }) => {
	return (
		<div className="bg-white border-t text-center py-4">
			<div className="flex text-purple font-semibold font-poppins justify-center items-center text-center gap-x-1">
				<RiLightbulbFlashLine size={30} />
				<h1 className="text-2xl ">{blogName}</h1>
			</div>
			<p className="text-sm mt-2">
				Developed by <strong>Kurt Timajo</strong>
			</p>
		</div>
	);
};

export default Footer;
