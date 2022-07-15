import './index.scss';

import Content from '../Content';
import ProjectRow from '../gadgets/ProjectRow';
import ProjectRowDescription from '../gadgets/ProjectRow/ProjectRowDescription';
import ProjectRowItem from '../gadgets/ProjectRow/ProjectRowItem';
import ProjectRowTitle from '../gadgets/ProjectRow/ProjectRowTitle';
import threeDModelingProjects from './constants/threeDModelingProjects';

const ThreeDModeling = () => {
	return (
		<Content id='ThreeDModeling' title='Motion Design'>
			{threeDModelingProjects.map((project, index) => {
				return (
					<ProjectRow key={index}>
						<ProjectRowItem>
							<ProjectRowTitle>{project.title}</ProjectRowTitle>
							<ProjectRowDescription>
								{project.description}
							</ProjectRowDescription>
						</ProjectRowItem>
						<ProjectRowItem>
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
						</ProjectRowItem>
					</ProjectRow>
				);
			})}
		</Content>
	);
};

export default ThreeDModeling;