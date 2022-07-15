import LittleSkeleton from './LittleSkeleton';
import RouteUtilModel from '../../../models/util_models/RouteUtilModel';
import { useParams } from 'react-router-dom';

const Content = ({ project }: { project: string }) => {
	switch (project) {
		case RouteUtilModel.THREE_D_MODELING_PROJECTS.LITTLE_SKELETON:
			return <LittleSkeleton />;
		default:
			break;
	}

	return <></>;
};

const ThreeDModelingProjectDetails = () => {
	const { project } = useParams();

	return <Content project={project ?? ''} />;
};

export default ThreeDModelingProjectDetails;
