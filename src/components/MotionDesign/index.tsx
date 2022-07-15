import './index.scss';

import Content from '../Content';
import ProjectRow from '../gadgets/ProjectRow';
import ProjectRowDescription from '../gadgets/ProjectRow/ProjectRowDescription';
import ProjectRowItem from '../gadgets/ProjectRow/ProjectRowItem';
import ProjectRowTitle from '../gadgets/ProjectRow/ProjectRowTitle';
import motionDesignProjects from './constants/motionDesignProjects';

const MotionDesign = () => {
	return (
		<Content id='MotionDesign' title='Motion Design'>
			{motionDesignProjects.map((project, index) => {
				return (
					<ProjectRow key={index}>
						<ProjectRowItem>
							<ProjectRowTitle>{project.title}</ProjectRowTitle>
							<ProjectRowDescription>
								{project.description}
							</ProjectRowDescription>
						</ProjectRowItem>
						<ProjectRowItem>
							<video controls poster={project.poster}>
								<source src={project.src} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</ProjectRowItem>
					</ProjectRow>
				);
			})}
		</Content>
	);
};

export default MotionDesign;
