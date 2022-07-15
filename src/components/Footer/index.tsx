import './index.scss';

import Container from '../widgets/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<footer className='pt-10 pb-20'>
			<Container>
				<div className='grid grid-cols-2'>
					<div className='flex justify-center'>
						<div>
							<div className='font-bold'>Email</div>
							<div className='mt-2'>wjing.design97@gmail.com</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<div>
							<div>Follow Me</div>
							<div className='mt-2'>
								<div className='flex flex-wrap items-center gap-1'>
									<LinkedInIcon />
									<InstagramIcon />
									<img
										src={`${process.env.PUBLIC_URL}/icons/flickr.webp`}
										alt='flickr'
									/>
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
