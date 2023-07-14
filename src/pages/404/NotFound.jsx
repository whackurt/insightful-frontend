import { Link } from 'react-router-dom';
import Container from '../../components/containers/Container';
import React from 'react';
import WtContainer from '../../components/containers/WtContainer';

const NotFound = ({ loggedIn }) => {
	return (
		<>
			{loggedIn ? (
				<>
					<WtContainer>
						<div className="flex -mt-24 h-screen justify-center items-center">
							<div className="flex flex-col items-center p-8 sm:p-10 md:p-12 lg:p-16 gap-y-8 border-4 border-purple rounded-tr-[50px] rounded-bl-[50px]">
								<h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-purple">
									Oops!
								</h1>
								<p className="text-center font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl">
									404 - Page Not Found
								</p>
								<Link
									to={'/home'}
									className=" bg-purple text-white px-3 py-1 hover:shadow-lg rounded-full"
								>
									Go Back to Homepage
								</Link>
							</div>
						</div>
					</WtContainer>
				</>
			) : (
				<>
					<Container>
						<div className="flex -mt-24 h-screen justify-center items-center">
							<div className="flex bg-white flex-col items-center p-8 sm:p-10 md:p-12 lg:p-16 gap-y-8 border-4 border-purple rounded-tr-[50px] rounded-bl-[50px]">
								<h1 className="text-mainText text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ">
									Oops!
								</h1>
								<p className="text-center font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl">
									404 - Page Not Found
								</p>
								<Link
									to={'/'}
									className=" bg-purple text-white px-3 py-1 hover:shadow-lg rounded-full"
								>
									Go Back to Homepage
								</Link>
							</div>
						</div>
					</Container>
				</>
			)}
		</>
	);
};

export default NotFound;
