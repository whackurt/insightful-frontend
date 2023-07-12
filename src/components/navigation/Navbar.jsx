import React, { useState } from 'react';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const location = useLocation();
	const sections = [
		{ name: 'Home', route: '/' },
		{ name: 'Posts', route: '/posts' },
		{ name: 'About', route: '/about' },
		{ name: 'Contact', route: '/contact' },
	];

	return (
		<nav className="fixed border-b border-purple px-8 py-4 bg-white w-full shadow-sm z-20 top-0 left-0">
			{/* main nav */}
			<div className="hidden lg:grid lg:grid-cols-3">
				<Link
					to={'/'}
					className="flex text-purple justify-center items-center gap-x-1"
				>
					<RiLightbulbFlashLine size={35} />
					<h1 className="lg:text-2xl font-poppins font-semibold">insightful</h1>
				</Link>
				<ul className="lg:flex justify-center hidden gap-x-6 items-center ">
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
				<div className="lg:flex gap-x-2 justify-center items-center">
					<Link
						to={'/login'}
						className="bg-white text-purple border-mainText hover:shadow-lg hover:border-purple px-4 py-1 rounded-[50px] border"
					>
						Login
					</Link>
					<Link
						to={'/signup'}
						className=" bg-purple text-white hover:shadow-lg px-4 py-1 rounded-[50px] border"
					>
						Sign Up
					</Link>
				</div>
			</div>

			{/* Hamburger */}
			<div className="lg:hidden flex justify-between items-center">
				<Link to={'/'} onClick={() => setBurgerOpen(false)}>
					<RiLightbulbFlashLine color="5300c7" size={35} />
				</Link>

				<Link
					to={'/'}
					onClick={() => setBurgerOpen(false)}
					className="lg:text-2xl font-poppins font-semibold text-purple"
				>
					insightful
				</Link>
				<div>
					<GiHamburgerMenu
						color="5300c7"
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
								className={`text-sm cursor-pointer ${
									location.pathname === section.route
										? 'text-purple border-b border-purple'
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
							to={'/login'}
							className={`text-sm cursor-pointer border-b hover:text-gray-400 ${
								location.pathname === '/login'
									? 'text-purple border-b border-purple'
									: ' '
							}`}
							onClick={() => setBurgerOpen(false)}
						>
							Login
						</Link>
						<Link
							to={'/signup'}
							className={`text-sm cursor-pointer border-b hover:text-gray-400 ${
								location.pathname === '/signup'
									? 'text-purple border-b border-purple'
									: ' '
							}`}
							onClick={() => setBurgerOpen(false)}
						>
							Sign Up
						</Link>
					</ul>
					<div className="lg:flex gap-x-2 justify-center items-center"></div>
				</div>
			) : null}
		</nav>
	);
};

export default Navbar;
