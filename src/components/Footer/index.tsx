import './index.scss';

import Container from '../widgets/Container';
import ExternalLink from '../widgets/Link/ExternalLink/ExternalLink';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<footer className='pt-10 pb-20'>
			<Container>
				<div className='grid sm:grid-cols-2 gap-5'>
					<div className='flex justify-center'>
						<div className='text-center sm:text-start'>
							<div className='font-bold'>Email</div>
							<div className='mt-2'>wjing.design97@gmail.com</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='text-center sm:text-start'>
							<div className='font-bold'>Follow Me</div>
							<div className='mt-2'>
								<div className='flex flex-wrap items-center gap-1'>
									<ExternalLink href='https://www.linkedin.com/in/jing-wang-80101920a/'>
										<LinkedInIcon />
									</ExternalLink>
									<ExternalLink href='https://www.instagram.com/no_idddddea/'>
										<InstagramIcon />
									</ExternalLink>
									<ExternalLink href='https://www.flickr.com/photos/189946022@N05/albums'>
										<img
											src={`${process.env.PUBLIC_URL}/icons/flickr.webp`}
											alt='flickr'
										/>
									</ExternalLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
