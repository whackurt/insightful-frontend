import React from 'react';
import Container from '../../components/containers/Container';
import { RiLightbulbFlashLine } from 'react-icons/ri';
const About = () => {
	return (
		<>
			<div className="min-h-screen bg-hero-background bg-cover bg-no-repeat">
				<Container>
					<div className="flex flex-col ">
						<div className="flex flex-col bg-white border border-mainText my-8 rounded-lg justify-center gap-y-6 py-8 px-2 sm:px-4 md:px-8 lg:px-16">
							<div className="flex justify-center">
								<RiLightbulbFlashLine color="#5300c7" size={80} />
							</div>

							<p className="text-xl">
								Welcome to{' '}
								<strong className="text-purple font-semibold font-poppins">
									insightful{' '}
								</strong>{' '}
								Blog!
							</p>
							<p>
								At <span>insightful</span> Blog, we believe in the power of
								sharing knowledge and diverse perspectives. We've created a
								platform where anyone can join, login, and register to become a
								valued member of our writing community.
							</p>
							<p>
								Our mission is to provide a space for individuals like you to
								express your thoughts, insights, and experiences through the art
								of writing. Whether you have a personal story to share, a unique
								perspective on a particular topic, or helpful advice to offer,
								Insightful Blog is your platform to make your voice heard.
							</p>
							<p>
								We understand that everyone has something valuable to
								contribute, and we embrace the idea that collective wisdom and
								diverse perspectives lead to personal growth and a deeper
								understanding of the world. By fostering an inclusive and
								supportive community, we aim to encourage meaningful discussions
								and connections among our members.
							</p>
							<p>
								As a registered user of Insightful Blog, you will have the
								opportunity to publish your own posts, engage with other writers
								through comments and discussions, and connect with like-minded
								individuals who share your interests. We believe in the power of
								collaboration and encourage our members to learn from each
								other, inspire one another, and expand their horizons.
							</p>
							<p>
								To get started, simply create an account and log in to access
								your personal dashboard. From there, you can begin crafting your
								posts, exploring other members' contributions, and participating
								in the vibrant community we've built.
							</p>
							<p>
								We value your privacy and the security of your personal
								information. Rest assured that we have implemented measures to
								protect your data and ensure a safe and enjoyable experience on
								our platform.
							</p>
							<p>
								Thank you for choosing insightful Blog as your creative outlet
								and community. We can't wait to see the incredible insights and
								stories you'll share with us.
							</p>
							<p>Join us today and let your voice be heard!</p>
							<p>
								{' '}
								-The{' '}
								<strong className="text-purple font-semibold font-poppins">
									insightful{' '}
								</strong>{' '}
								Blog Team
							</p>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default About;
