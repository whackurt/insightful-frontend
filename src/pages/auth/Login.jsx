import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserLogin } from '../../services/auth/auth';
import { useReload } from '../../hooks/useReload';
import Container from '../../components/containers/Container';
import AuthSpinner from '../../components/spinners/AuthSpinner';

const Login = ({ setLoggedIn }) => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [errMsg, setErrMsg] = useState({
		email: 'Email is required.',
		password: 'Password is required.',
	});

	const checkIfEmpty = (data) => {
		setEmailError(false);
		setPasswordError(false);
		var empty = true;
		if (data.email.length === 0) {
			setEmailError(true);
		}
		if (data.password.length === 0) {
			setPasswordError(true);
		} else {
			console.log('not empty');
			empty = false;
		}

		return empty;
	};

	const navigate = useNavigate();
	const login = async (creds) => {
		const emptyFields = checkIfEmpty(creds);

		if (!emptyFields) {
			setLoading(true);
			await UserLogin(creds).then((res) => {
				if (res.hasOwnProperty('accessToken')) {
					localStorage.setItem('token', res.accessToken);
					localStorage.setItem('user_id', res.id);
					setLoggedIn(true);
					sessionStorage.clear();
					setLoading(false);
					navigate('/home');
				} else {
					setLoading(false);
					setError(true);
					setTimeout(() => {
						setError(false);
					}, 5000);
				}
			});
		}
	};

	useReload();

	return (
		<>
			<div className="min-h-screen bg-hero-background bg-cover bg-no-repeat">
				<Container>
					<div className="flex flex-col items-center text-center gap-y-4">
						<h1 className="text-3xl font-light my-6 font-poppins mx-auto text-white">
							Welcome to the{' '}
							<strong className="font-poppins font-semibold text-purple">
								insightful
							</strong>
						</h1>
						{/* Login form */}
						<div className="w-full border shadow-lg bg-white lg:w-1/2 py-8 px-4 lg:px-6 rounded-md min-h-[470px] mb-4">
							<h1 className="font-bold text-2xl my-4 text-purple">
								Login to your account
							</h1>
							<div className="flex flex-col gap-y-12 mt-8 mb-2">
								<div className="flex flex-col gap-y-1">
									<p className="text-xs text-left">Email</p>
									<input
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="text-gray-900 text-md py-2 px-2 rounded border border-mainText"
										placeholder="Enter email..."
										type="email"
										name="email"
									/>
									<p className="text-error text-left text-xs">
										{emailError ? errMsg.email : ''}
									</p>
								</div>

								<div className="flex flex-col gap-y-1">
									<p className="text-xs text-left">Password</p>
									<input
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="text-md py-2 px-2 rounded border border-mainText"
										placeholder="Enter password..."
										type="password"
										name="password"
									/>
									<p className="text-error text-left text-xs">
										{passwordError ? errMsg.password : ''}
									</p>
								</div>
							</div>
							<p className="text-sm cursor-pointer font-semibold text-right">
								Forgot password?
							</p>
							<div className="text-center">
								<p className=" text-error font-semibold">
									{error ? 'Invalid Credentials' : null}
								</p>
							</div>

							<button
								onClick={() => login({ email: email, password: password })}
								className="border font-semibold py-1 cursor-pointer rounded w-full mt-16 bg-purple text-white  hover:shadow-lg"
							>
								{!loading ? 'Login' : <AuthSpinner />}
							</button>

							<div className="flex text-sm my-4 gap-x-1">
								<p> Don't have an account yet? </p>
								<Link className="font-semibold hover:text-purple" to="/signup">
									Sign Up
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Login;
