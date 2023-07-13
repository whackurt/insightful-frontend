import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import MyPosts from './pages/writer/MyPosts';
import Write from './pages/writer/Write';
import PrivateRoute from './components/auth/PrivateRoute';
import AuthenticatedPrivateRoute from './components/auth/AuthenticatedPrivateRoute';
import WtHome from './pages/writer/WtHome';
import { useState } from 'react';
import WtNavbar from './components/navigation/WtNavbar';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Posts from './pages/public/Posts';
import SinglePost from './components/posts/SinglePost';
import ViewMyPost from './pages/writer/ViewMyPost';
import EditPost from './pages/writer/EditPost';
import useFetchUser from './hooks/useFetchUser';

function App() {
	const { user } = useFetchUser(
		localStorage.getItem('token'),
		localStorage.getItem('user_id')
	);
	const [prevPage, setPrevPage] = useState(null);
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('user_id') ? true : false
	);
	return (
		<div className="bg-[#f1f0f2] text-maintext">
			{loggedIn || localStorage.getItem('user_id') ? (
				<WtNavbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
			) : (
				<Navbar />
			)}
			<Routes>
				<Route
					exact
					path="/"
					element={
						<AuthenticatedPrivateRoute>
							<Home prev={prevPage} setPrev={setPrevPage} />
						</AuthenticatedPrivateRoute>
					}
				/>
				<Route
					exact
					path="/posts"
					element={<Posts user={user} prev={prevPage} setPrev={setPrevPage} />}
				/>
				<Route
					exact
					path="/posts/:postId"
					element={<SinglePost prev={prevPage} setPrev={setPrevPage} />}
				/>
				<Route exact path="/about" element={<About />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route
					exact
					path="/login"
					element={
						<AuthenticatedPrivateRoute>
							<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
						</AuthenticatedPrivateRoute>
					}
				/>
				<Route
					exact
					path="/signup"
					element={
						<AuthenticatedPrivateRoute>
							<SignUp />
						</AuthenticatedPrivateRoute>
					}
				/>
				<Route
					exact
					path="/home"
					element={
						<PrivateRoute redirect={'/login'}>
							<WtHome prev={prevPage} setPrev={setPrevPage} user={user} />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/myposts"
					element={
						<PrivateRoute redirect={'/login'}>
							<MyPosts prev={prevPage} setPrev={setPrevPage} user={user} />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/myposts/:postId"
					element={
						<PrivateRoute redirect={'/login'}>
							<ViewMyPost prev={prevPage} user={user} />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/myposts/edit/:postId"
					element={
						<PrivateRoute redirect={'/login'}>
							<EditPost prev={prevPage} user={user} />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/write"
					element={
						<PrivateRoute redirect={'/login'}>
							<Write user={user} />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
