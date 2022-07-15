import './index.scss';

import Content from '../../../Content';
import skeletonImages from './constants/skeletonImages';

const LittleSkeleton = () => {
	return (
		<Content id='LittleSkeleton' title='Little Skeleton' titleBorderBottom>
			<div className='rlx-row my-10'>
				<div className='rlx-column'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/front.webp`}
						alt={'front'}
						style={{ width: '100%' }}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_4.webp`}
						alt={'front'}
						style={{ width: '100%' }}
					/>
				</div>

				<div className='rlx-column'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/side.webp`}
						alt={'side'}
						style={{ width: '100%' }}
					/>
				</div>

				<div className='rlx-column'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_5.webp`}
						alt={'side'}
						style={{ width: '100%' }}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_6.webp`}
						alt={'front'}
						style={{ width: '100%' }}
					/>
				</div>

				<div className='rlx-column'>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_8.webp`}
						alt={'front'}
						style={{ width: '100%' }}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/littleskeleton/skeleton_7.webp`}
						alt={'side'}
						style={{ width: '100%' }}
					/>
				</div>
			</div>
			{/* <div className='grid md:grid-cols-2 py-10 gap-10 grid-flow-col'>
				{skeletonImages.map((img, index) => {
					return (
						<div key={index} className='grid-item'>
							<img
								className='inline-block'
								src={img.src}
								alt={img.alt}
							/>
						</div>
					);
				})}
			</div> */}
		</Content>
	);
};

export default LittleSkeleton;
