import React, { useEffect, useState } from 'react';
import { GiPerspectiveDiceSixFacesFour } from 'react-icons/gi';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import HomePosts from '../../components/posts/HomePosts';
import Container from '../../components/containers/Container';

const Home = ({ setPrev }) => {
	const [email, setEmail] = useState('');
	const handleSubmit = () => {
		alert(email);
		setEmail('');
	};
	useEffect(() => {
		setPrev('/');
	}, []);
	return (
		<>
			{/* Jumbotron */}
			<div className="min-h-screen bg-hero-background bg-cover bg-no-repeat flex justify-center items-center">
				<div className="flex text-gray-100 flex-col items-center py-4 px-auto gap-y-8">
					<RiLightbulbFlashLine color="5300c7" size={100} />
					<h1 className="intro text-center outline-white font-light text-2xl md:text-4xl lg:text-6xl">
						unveiling the wisdom within
					</h1>
				</div>
			</div>
			<Container>
				<HomePosts />

				{/* See more */}
				<div className="flex justify-center">
					<Link
						to={'/posts'}
						className="bg-purple rounded-[50px] w-full p-2 cursor-pointer  text-white text-center border border-mainText hover:shadow-lg"
					>
						See more...
					</Link>
				</div>

				{/* Subscription */}
				<div className="py-16">
					<div className="bg-white shadow-md border border-purple rounded-md p-4 text-purple text-center">
						<h1 className="font-bold lg:text-3xl font-poppins">
							Want to receive emails?
						</h1>
						<p className="lg:text-lg lg:w-3/4 mx-auto text-center text-mainText">
							Sign up to get an email every time a new blog is published. Only
							happens once a month!
						</p>
						<div className="flex lg:w-1/2 gap-x-4 mx-auto justify-center">
							<input
								onChange={(e) => {
									setEmail(e.target.value);
									console.log(email);
								}}
								value={email}
								placeholder="Enter your email..."
								className="py-2 px-2 mt-4 border border-purple text-black rounded w-3/4"
								type="email"
							/>
							<input
								onClick={() => handleSubmit()}
								className="border bg-purple text-secondary py-2 cursor-pointer px-2 mt-4 hover:text-gray-300 text-sm rounded w-1/4"
								type="submit"
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Home;
