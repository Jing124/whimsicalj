import './index.scss';

import Content from '../../../Content';
import usePageTitle from '../../../../hooks/usePageTitle';

const Netflix = () => {
	usePageTitle('Netflix | WhimscalJ');
	return (
		<Content id='Netflix' title='Bunny' titleBorderBottom>
			<div className='my-10 grid md:grid-cols-2 gap-5'>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/netflix/draft_01.webp`}
						alt={'draft_01'}
					/>
				</div>
				<div className='hidden md:block'></div>
				<div className='hidden md:block'></div>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/netflix/draft_02.webp`}
						alt={'draft_02'}
					/>
				</div>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/netflix/design_01.webp`}
						alt={'design_01'}
					/>
				</div>
				<div className='hidden md:block'></div>
				<div className='hidden md:block'></div>
				<div>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/netflix/design_02.webp`}
						alt={'design_02'}
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

export default Netflix;
