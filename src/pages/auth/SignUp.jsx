import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserSignUp } from '../../services/auth/auth';
import Container from '../../components/containers/Container';

const SignUp = () => {
	const [userInfo, setuserInfo] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		first: 'First name is required.',
		last: 'Last name is required.',
		email: 'Email is required.',
		password: 'Password is required.',
	});

	const [fnameError, setFNameError] = useState(false);
	const [lnameError, setLNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const navigate = useNavigate();

	const validate = () => {
		setFNameError(false);
		setLNameError(false);
		setEmailError(false);
		setPasswordError(false);
		var valid = false;
		if (userInfo.first_name.length === 0) {
			setFNameError(true);
		}
		if (userInfo.last_name.length === 0) {
			setLNameError(true);
		}
		if (userInfo.email.length === 0) {
			setEmailError(true);
		}
		if (userInfo.password.length === 0) {
			setPasswordError(true);
		} else valid = true;

		return valid;
	};

	const signup = async (creds) => {
		const valid = validate(creds);

		if (valid) {
			await UserSignUp(creds).then(() => {
				navigate('/login');
			});
		}
	};

	return (
		<>
			<div className="min-h-screen bg-hero-background bg-cover bg-no-repeat">
				<Container>
					<div className="flex h-full text-mainText flex-col items-center text-center gap-y-4">
						<h1 className="text-3xl font-light my-6 font-poppins mx-auto text-white">
							Welcome to the{' '}
							<strong className="font-poppins font-semibold text-purple">
								insightful
							</strong>
						</h1>
						{/* {JSON.stringify(userInfo)} */}
						{/* Login form */}
						<div className="border shadow-lg mb-16 w-full lg:w-1/2 py-8 px-4 lg:px-6 rounded-md text-white bg-white min-h-[570px]">
							<h1 className="font-bold text-2xl my-4 text-purple">
								Create your account
							</h1>
							<div className="flex flex-col gap-y-6 mt-8 mb-2">
								<div className="flex flex-col gap-y-1">
									<p className="text-xs text-left text-mainText">First Name</p>
									<input
										value={userInfo.first_name}
										onChange={(e) => {
											setuserInfo({
												...userInfo,
												first_name: e.target.value,
											});
										}}
										className="text-black  border border-mainText text-md py-2 px-2 rounded"
										placeholder="Enter first name..."
										type="text"
										name="fname"
										required
									/>
									<p className="text-left text-xs text-error">
										{fnameError ? errors.first : ''}
									</p>
								</div>
								<div className="flex flex-col gap-y-1">
									<p className="text-xs text-left text-mainText">Last Name</p>
									<input
										value={userInfo.last_name}
										onChange={(e) => {
											setuserInfo({
												...userInfo,
												last_name: e.target.value,
											});
										}}
										className="text-black  border border-mainText text-md py-2 px-2 rounded"
										placeholder="Enter last name..."
										type="text"
										name="lname"
										required
									/>
									<p className="text-left text-xs text-error">
										{lnameError ? errors.last : ''}
									</p>
								</div>
								<div className="flex flex-col gap-y-1">
									<p className="text-xs text-left text-mainText">Email</p>
									<input
										value={userInfo.email}
										onChange={(e) => {
											setuserInfo({
												...userInfo,
												email: e.target.value,
											});
										}}
										className="text-black  border border-mainText text-md py-2 px-2 rounded"
										placeholder="Enter email..."
										type="email"
										name="email"
										required
									/>
									<p className="text-left text-xs text-error">
										{emailError ? errors.email : ''}
									</p>
								</div>

								<div className="flex flex-col gap-y-1">
									<p className="text-xs text-left text-mainText">Password</p>
									<input
										value={userInfo.password}
										onChange={(e) => {
											setuserInfo({
												...userInfo,
												password: e.target.value,
											});
										}}
										className="text-black  border border-mainText text-md py-2 px-2 rounded"
										placeholder="Enter email..."
										type="password"
										name="password"
										required
									/>
									<p className="text-left text-xs text-error">
										{passwordError ? errors.password : ''}
									</p>
								</div>
							</div>
							<button
								onClick={() => signup(userInfo)}
								className="border font-semibold py-1 cursor-pointer rounded w-full mt-16 bg-purple text-white hover:shadow-lg"
							>
								Sign Up
							</button>
							<div className="flex gap-x-1 text-mainText text-sm my-4">
								<p> Already have an account? </p>
								<Link className="font-semibold hover:text-purple" to="/login">
									Login
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default SignUp;
