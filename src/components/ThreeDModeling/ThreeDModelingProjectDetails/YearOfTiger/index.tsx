import './index.scss';

import CollageGrid from '../../../widgets/Layout/CollageGrid';
import CollageGridColumn from '../../../widgets/Layout/CollageGrid/CollageGridColumn';
import Content from '../../../Content';
import usePageTitle from '../../../../hooks/usePageTitle';

const YearOfTiger = () => {
	usePageTitle('The Year of Tiger | WhimscalJ');
	return (
		<Content id='YearOfTiger' title='The Year of Tiger' titleBorderBottom>
			<CollageGrid className='my-10'>
				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/year_of_tiger/front.webp`}
						alt={'front'}
					/>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/year_of_tiger/back.webp`}
						alt={'back'}
					/>
				</CollageGridColumn>

				<CollageGridColumn>
					<img
						className='inline-block'
						src={`${process.env.PUBLIC_URL}/projects/year_of_tiger/side.webp`}
						alt={'side'}
					/>
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
				</CollageGridColumn>
			</CollageGrid>
		</Content>
	);
};

export default YearOfTiger;
