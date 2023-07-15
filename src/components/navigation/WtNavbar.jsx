import React, { useEffect, useRef, useState } from 'react';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
	AiFillCaretDown,
	AiFillCaretUp,
	AiOutlineProfile,
} from 'react-icons/ai';
import { FiLogOut, FiSettings, FiMoon } from 'react-icons/fi';

const WtNavbar = ({ user, setLoggedIn, blogName }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const ref = useRef();

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

	const sections = [
		{ name: 'Home', route: '/home' },
		{ name: 'All Posts', route: '/posts' },
		{ name: 'My Posts', route: '/myposts' },
		{ name: 'Write', route: '/write' },
	];

	const dropdownItems = [
		{
			name: 'View Profile',
			route: '/profile',
			icon: <AiOutlineProfile size={20} />,
		},
		{
			name: 'Settings',
			route: '/settings',
			icon: <FiSettings size={20} />,
		},
		{
			name: 'Display & Accessibility',
			route: '/display',
			icon: <FiMoon size={20} />,
		},
	];

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (dropdownOpen && ref.current && !ref.current.contains(e.target)) {
				setDropdownOpen(false);
			}
		};

		document.body.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.body.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [dropdownOpen]);

	return (
		<nav className="fixed border-b border-purple px-8 py-4 bg-white w-full shadow-sm z-20 top-0 left-0">
			{/* main nav */}
			<div className="hidden lg:grid lg:grid-cols-3">
				<Link
					to={'/home'}
					className="flex text-purple justify-center items-center gap-x-1"
				>
					<RiLightbulbFlashLine color="#5300c7" size={35} />
					<h1 className="lg:text-2xl font-poppins font-semibold">{blogName}</h1>
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
				<div className="relative lg:flex gap-x-4 justify-center items-right">
					<div className="flex items-center gap-x-2 text-purple ">
						<div className="flex flex-col text-right">
							<h1 className="font-semibold font-poppins">{`${user?.first_name} ${user?.last_name}`}</h1>
							<p className="text-mainText text-xs">Blogger</p>
						</div>
						<img
							style={{ width: 40, height: 40 }}
							src="https://www.svgrepo.com/show/382107/male-avatar-boy-face-man-user-6.svg"
							alt=""
						/>
						<div ref={ref}>
							<button className="cursor-pointer hover:shadow-lg">
								<span>
									{dropdownOpen ? (
										<AiFillCaretUp onClick={() => setDropdownOpen(false)} />
									) : (
										<AiFillCaretDown onClick={() => setDropdownOpen(true)} />
									)}
								</span>
							</button>
							{dropdownOpen ? (
								<div className="absolute mt-8 -ml-[200px] min-w-[220px]">
									<div className="flex flex-col text-mainText gap-y-2 text-sm rounded-md shadow-lg text-left bg-white p-2">
										{dropdownItems.map((item) => (
											<Link
												onClick={() => setDropdownOpen(false)}
												to={item.route}
												className="hover:text-purple cursor-pointer"
											>
												<span className="flex items-center gap-x-2">
													<span> {item.icon}</span>
													<span> {item.name}</span>
												</span>
											</Link>
										))}
										<hr />
										<Link
											onClick={() => logout()}
											className="flex items-center gap-x-2 hover:text-purple cursor-pointer font-semibold"
										>
											<span>
												<FiLogOut size={20} />
											</span>{' '}
											Logout
										</Link>
									</div>
								</div>
							) : null}
						</div>
					</div>
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
							className="text-sm bg-white text-purple border border-mainText rounded-[50px] px-2 cursor-pointer hover:text-gray-400"
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
