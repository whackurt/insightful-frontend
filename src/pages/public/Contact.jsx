import React from 'react';
import Container from '../../components/containers/Container';
import SectionLabel from '../../components/label/SectionLabel';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
	return (
		<>
			<Container>
				<div className="flex flex-col py-8">
					<div>
						<SectionLabel section={'Contact Us'} />
						<div className="flex flex-col gap-y-6 py-8 px-1 lg:text-lg sm:px-2 md:px-4 lg:px-6">
							<p className="">
								We value your feedback and welcome any inquiries or suggestions
								you may have.
							</p>
							<p className="">
								Please feel free to reach out to us using the contact
								information provided below. We will do our best to respond to
								your message in a timely manner.
							</p>
							<div className="flex justify-center">
								<div className="flex flex-col gap-y-4">
									<p className="flex lg:text-lg items-center gap-x-2 hover:text-purple">
										<span>
											<AiOutlineMail />
										</span>
										<strong className="underline hover:text-purple">
											info@insightfulblog.com
										</strong>
									</p>
									<p className="flex text-lg hover:text-purple items-center gap-x-2">
										<span>
											<AiOutlinePhone />
										</span>
										<strong className="">+63 0998 456 321</strong>
									</p>
								</div>
							</div>
							<p className="">
								For media inquiries, partnership opportunities, or collaboration
								requests, please contact:
							</p>
							<div className="flex justify-center">
								<div>
									<p className="flex text-lg hover:text-purple items-center gap-x-2">
										<span>
											<AiOutlineMail />
										</span>
										<strong className="underline">
											partnerships@insightfulblog.com
										</strong>
									</p>
								</div>
							</div>
							<p className="text-center lg:text-2xl">
								We look forward to hearing from you and appreciate your support
								for{' '}
								<span className="text-purple font-semibold font-poppins">
									insightful{' '}
								</span>
								!
							</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Contact;
