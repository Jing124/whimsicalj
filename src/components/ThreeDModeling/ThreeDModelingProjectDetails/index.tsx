import AstronautBunny from './AstronautBunny';
import LittleSkeleton from './LittleSkeleton';
import Netflix from './Netflix';
import OreoFactory from './OreoFactory';
import RouteUtilModel from '../../../models/util_models/RouteUtilModel';
import YearOfTiger from './YearOfTiger';
import { useParams } from 'react-router-dom';

const Content = ({ project }: { project: string }) => {
	switch (project) {
		case RouteUtilModel.THREE_D_MODELING_PROJECTS.LITTLE_SKELETON:
			return <LittleSkeleton />;
		case RouteUtilModel.THREE_D_MODELING_PROJECTS.YEAR_OF_TIGER:
			return <YearOfTiger />;
		case RouteUtilModel.THREE_D_MODELING_PROJECTS.OREO_FACTORY:
			return <OreoFactory />;
		case RouteUtilModel.THREE_D_MODELING_PROJECTS.ASTRONAUT_BUNNY:
			return <AstronautBunny />;
		case RouteUtilModel.THREE_D_MODELING_PROJECTS.NETFLIX:
			return <Netflix />;
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
