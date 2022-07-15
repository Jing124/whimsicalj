import './index.scss';

import CollageGrid from '../../../widgets/Layout/CollageGrid';
import CollageGridColumn from '../../../widgets/Layout/CollageGrid/CollageGridColumn';
import Content from '../../../Content';

const LittleSkeleton = () => {
	return (
		<Content id='LittleSkeleton' title='Little Skeleton' titleBorderBottom>
			<CollageGrid className='my-10'>
				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/front.webp`}
						alt={'front'}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_4.webp`}
						alt={'front'}
					/>
				</CollageGridColumn>

				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/side.webp`}
						alt={'side'}
					/>
				</CollageGridColumn>

				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_5.webp`}
						alt={'side'}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_6.webp`}
						alt={'front'}
					/>
				</CollageGridColumn>

				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_8.webp`}
						alt={'front'}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_7.webp`}
						alt={'side'}
					/>
				</CollageGridColumn>
			</CollageGrid>
		</Content>
	);
};

export default LittleSkeleton;
