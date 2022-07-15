import './index.scss';

import Content from '../../../Content';
import usePageTitle from '../../../../hooks/usePageTitle';

const AstronautBunny = () => {
	usePageTitle('Astronaut Bunny | WhimscalJ');
	return (
		<Content id='AstronautBunny' title='Bunny' titleBorderBottom>
			<div className='my-10 grid md:grid-cols-2 gap-5'>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/astronaut_bunny/draft.webp`}
						alt={'front'}
					/>
				</div>
				<div className='hidden md:block'></div>
				<div className='hidden md:block'></div>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/astronaut_bunny/front.webp`}
						alt={'back'}
					/>
				</div>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/astronaut_bunny/right.webp`}
						alt={'side'}
					/>
				</div>
				<div className='hidden md:block'></div>
				<div className='hidden md:block'></div>
				<div>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/astronaut_bunny/back.webp`}
						alt={'side'}
					/>
				</div>
			</div>
			<div className='mb-10'>
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
		</Content>
	);
};

export default AstronautBunny;
