import './index.scss';

import Content from '../Content';
import ProjectRow from '../gadgets/ProjectRow';
import ProjectRowDescription from '../gadgets/ProjectRow/ProjectRowDescription';
import ProjectRowItem from '../gadgets/ProjectRow/ProjectRowItem';
import ProjectRowTitle from '../gadgets/ProjectRow/ProjectRowTitle';
import usePageTitle from '../../hooks/usePageTitle';
import videoEditingProjects from './constants/videoEditingProjects';

const VideoEditing = () => {
	usePageTitle('Video Editing | WhimsicalJ');

	return (
		<Content id='VideoEditing' title='3D Modeling'>
			{videoEditingProjects.map((project, index) => {
				return (
					<ProjectRow key={index}>
						<ProjectRowItem className='flex flex-col'>
							<ProjectRowTitle>{project.title}</ProjectRowTitle>
							<ProjectRowDescription className='flex-grow'>
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

export default VideoEditing;
