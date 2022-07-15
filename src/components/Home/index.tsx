import './index.scss';

import Content from '../Content';

const Home = () => {
	return (
		<Content id='Home'>
			<div className='grid grid-cols-2 gap-10'>
				<div className='flex justify-center'>
					<video
						controls
						poster={`${process.env.PUBLIC_URL}/videos/intro/poster.png`}
					>
						<source
							src={`${process.env.PUBLIC_URL}/videos/intro/intro.mp4`}
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>
				<div className='flex justify-center'>
					<div>
						<div className='text-8xl font-extrabold hello'>
							Hello
						</div>
						<div className='mt-5 text-4xl font-bold'>
							A Bit About Me
						</div>
						<div className='mt-10 w-80'>
							I'm a motion & 3D modeling designer. As a graduate,
							I am new to the field and hope to learn more
							knowledge through job opportunities.
						</div>
					</div>
				</div>
			</div>
		</Content>
	);
};

export default Home;
