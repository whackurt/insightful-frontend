import React from 'react';
import { GrSearch } from 'react-icons/gr';

const SearchBar = ({ searchVal, setSearchVal }) => {
	return (
		<div>
			<p className="text-sm">Search Post</p>
			<div className="flex items-center gap-x-2 ">
				<input
					value={searchVal}
					onChange={(e) => setSearchVal(e.target.value)}
					className="w-full border-purple px-10 py-2 shadow-md rounded-[50px]"
					placeholder="Search"
					type="text"
				/>
				<div className="absolute px-2 cursor-pointer">
					<GrSearch color="#5300c7" size={25} />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
