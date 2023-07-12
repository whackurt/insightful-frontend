import React, { useState } from 'react';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const WtNavbar = ({ user, setLoggedIn }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const navigate = useNavigate();
	const sections = [
		{ name: 'Home', route: '/home' },
		{ name: 'All Posts', route: '/posts' },
		{ name: 'My Posts', route: '/myposts' },
		{ name: 'Write', route: '/write' },
	];
	const location = useLocation();

	const logout = async () => {
		try {
			await localStorage.clear();
			setLoggedIn(false);
			sessionStorage.clear();
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav className="fixed px-8 py-4 bg-white w-full shadow-sm z-20 top-0 left-0">
			{/* main nav */}
			<div className="hidden lg:grid lg:grid-cols-3">
				<Link
					to={'/home'}
					className="flex text-purple justify-center items-center gap-x-1"
				>
					<RiLightbulbFlashLine color="#5300c7" size={35} />
					<h1 className="lg:text-2xl font-poppins font-semibold">insightful</h1>
				</Link>
				<ul className="lg:flex justify-center hidden gap-x-6 items-center">
					{sections.map((section) => (
						<Link
							className={`cursor-pointer text-sm hover:text-purple ${
								location.pathname === section.route
									? 'text-purple border-b border-purple'
									: ' '
							}`}
							key={sections.indexOf(section)}
							to={`${section.route}`}
						>
							{section.name}
						</Link>
					))}
				</ul>
				<div className="lg:flex gap-x-4 justify-center items-center">
					<h1 className="text-purple font-semibold font-poppins">{`${user?.first_name} ${user?.last_name}`}</h1>
					<Link
						onClick={() => logout()}
						className="bg-white text-purple border border-purple hover:shadow-lg px-3 py-1 rounded-[50px] border"
					>
						Logout
					</Link>
				</div>
			</div>

			{/* Hamburger */}
			<div className="lg:hidden flex justify-between items-center">
				<Link to={'/home'} onClick={() => setBurgerOpen(false)}>
					<RiLightbulbFlashLine color="#5300c7" size={35} />
				</Link>

				<Link
					to={'/home'}
					onClick={() => setBurgerOpen(false)}
					className="font-poppins text-purple font-semibold"
				>
					insightful
				</Link>
				<div>
					<GiHamburgerMenu
						color="#5300c7"
						onClick={() => setBurgerOpen(!burgerOpen)}
						size={25}
					/>
				</div>
			</div>
			{burgerOpen ? (
				<div
					className={`${
						burgerOpen
							? 'border-t border-purple transition duration-150 translate-y-1'
							: null
					} ' pt-4'`}
				>
					<ul className="flex flex-col gap-y-2 justify-center items-center">
						{sections.map((section) => (
							<Link
								className={`text-sm cursor-pointer hover:text-gray-400 ${
									location.pathname === section.route
										? 'border-b border-purple text-purple'
										: ' '
								}`}
								key={sections.indexOf(section)}
								to={`${section.route}`}
								onClick={() => setBurgerOpen(false)}
							>
								{section.name}
							</Link>
						))}
						<Link
							onClick={() => {
								logout();
								setBurgerOpen(false);
							}}
							className="text-sm bg-white text-purple border border-purple rounded-[50px] px-2 cursor-pointer hover:text-gray-400"
						>
							Logout
						</Link>
					</ul>
					<div className="lg:flex gap-x-2 justify-center items-center"></div>
				</div>
			) : null}
		</nav>
	);
};

export default WtNavbar;
