import './index.scss';

import CollageGrid from '../../../widgets/Layout/CollageGrid';
import CollageGridColumn from '../../../widgets/Layout/CollageGrid/CollageGridColumn';
import Content from '../../../Content';
import usePageTitle from '../../../../hooks/usePageTitle';

const LittleSkeleton = () => {
	usePageTitle('Little Skeleton | WhimscalJ');

	return (
		<Content id='LittleSkeleton' title='Little Skeleton' titleBorderBottom>
			<CollageGrid className='my-10'>
				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/front.webp`}
						alt={'front'}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/skeleton_7.webp`}
						alt={'skeleton_7'}
					/>
				</CollageGridColumn>

				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/side.webp`}
						alt={'side'}
					/>
				</CollageGridColumn>

				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/skeleton_4.webp`}
						alt={'skeleton_4'}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/skeleton_6.webp`}
						alt={'skeleton_6'}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/skeleton_8.webp`}
						alt={'skeleton_8'}
					/>
				</CollageGridColumn>

				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/skeleton_5.webp`}
						alt={'skeleton_5'}
					/>
				</CollageGridColumn>
			</CollageGrid>

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

export default LittleSkeleton;
