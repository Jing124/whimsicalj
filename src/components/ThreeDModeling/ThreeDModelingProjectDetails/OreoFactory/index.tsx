import './index.scss';

import CollageGrid from '../../../widgets/Layout/CollageGrid';
import CollageGridColumn from '../../../widgets/Layout/CollageGrid/CollageGridColumn';
import Content from '../../../Content';
import usePageTitle from '../../../../hooks/usePageTitle';

const OreoFactory = () => {
	usePageTitle('The Oreo Factory | WhimscalJ');
	return (
		<Content id='OreoFactory' title='The Oreo Factory' titleBorderBottom>
			<div className='my-10 grid md:grid-cols-2 gap-5'>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/oreo_factory/draft.webp`}
						alt={'front'}
					/>
				</div>
				<div className='hidden md:block'></div>
				<div className='hidden md:block'></div>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/oreo_factory/oreo_cookies.webp`}
						alt={'back'}
					/>
				</div>
				<div className='text-center'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/oreo_factory/oreo_machine_front.webp`}
						alt={'side'}
					/>
				</div>
				<div className='hidden md:block'></div>
				<div className='hidden md:block'></div>
				<div>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/oreo_factory/oreo_machine.webp`}
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

export default OreoFactory;
