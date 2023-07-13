import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomePosts from '../../components/posts/HomePosts';
import { useReload } from '../../hooks/useReload';
import WtContainer from '../../components/containers/WtContainer';
import { RiLightbulbFlashLine } from 'react-icons/ri';

const WtHome = ({ user, prev, setPrev }) => {
	const location = useLocation();

	useReload();
	useEffect(() => {
		setPrev(location.pathname);
	}, []);
	return (
		<>
			<div className="min-h-screen bg-hero-background bg-cover bg-no-repeat flex justify-center items-center">
				<div className="flex text-gray-100 flex-col items-center py-4 px-auto gap-y-8">
					<RiLightbulbFlashLine color="5300c7" size={100} />
					<h1 className="intro text-center text-xl md:text-2xl lg:text-4xl">
						Welcome to{' '}
						<span className=" font-poppins text-purple">insightful</span>
						{', '}
						{user ? user?.first_name : ''}!
					</h1>
					<h1 className="intro text-center outline-white font-light text-xl md:text-2xl lg:text-5xl">
						unveiling the wisdom within
					</h1>
				</div>
			</div>
			<WtContainer user={user}>
				<HomePosts prev={prev} user={user} />
				{/* See more */}
				<div className="flex justify-center py-8">
					<Link
						to={'/posts'}
						className="w-full p-2 bg-purple text-white rounded-[50px] cursor-pointer border-2 text-center border-gray-500 hover:shadow-lg"
					>
						See more...
					</Link>
				</div>
			</WtContainer>
		</>
	);
};

export default WtHome;
