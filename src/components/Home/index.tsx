import './index.scss';

import Content from '../Content';

const Home = () => {
	return (
		<Content id='Home'>
			<div className='grid md:grid-cols-2 gap-10'>
				<div className='flex justify-center order-1'>
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
				<div className='flex justify-center md:order-1'>
					<div>
						<div className='text-5xl md:text-8xl font-extrabold hello'>
							Hello
						</div>
						<div className='text-2xl md:text-4xl mt-3 md:mt-5 font-bold'>
							A Bit About Me
						</div>
						<div className='mt-5 md:mt-10 w-full md:w-80'>
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
