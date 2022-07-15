import './index.scss';

import Content from '../../../Content';
import skeletonImages from './constants/skeletonImages';

const LittleSkeleton = () => {
	return (
		<Content id='LittleSkeleton' title='Little Skeleton' titleBorderBottom>
			<div className='grid md:grid-cols-2 py-10 gap-10'>
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
			</div>
		</Content>
	);
};

export default LittleSkeleton;
