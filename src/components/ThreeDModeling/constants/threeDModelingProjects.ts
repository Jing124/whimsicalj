import RouteUtilModel from '../../../models/util_models/RouteUtilModel';

const motionDesignProjects = [
	{
		title: 'Little Skeleton',
		description:
			'This is my internship project. The purpose is to create a cute little skeleton. I created this model regarding normal scale skeletons and some cute skeletons.',
		linkTo: `${RouteUtilModel.ROUTES['3D_MODELING'].get()}/${
			RouteUtilModel.THREE_D_MODELING_PROJECTS.LITTLE_SKELETON
		}`,
	},
	{
		title: 'The Year Of Tiger',
		description:
			'The design of this project is inspired by the Chinese New Year. Each Chinese New Year represents a different zodiac, so 2022 represents the Year of Tiger. This tiger design wears a traditional lion dance hat and holds a congratulatory Chinese New Year sentence that represents the arrival of the Year of the Tiger.',
		linkTo: `${RouteUtilModel.ROUTES['3D_MODELING'].get()}/${
			RouteUtilModel.THREE_D_MODELING_PROJECTS.YEAR_OF_TIGER
		}`,
	},
	{
		title: 'The Oreo Factory',
		description:
			"Oreo's brand is popular with many people and children who prefer sweets, so I biased the overall design of this animation towards cuteness. The choice of color is biased towards pink, lavender, etc. The result is a small, cute Oreo factory assembly line for this project.",
		linkTo: '/',
	},
	{
		title: 'Astronaut-Bunny',
		description:
			'The design of this project is inspired by the traditional Chinese festival Mid-Autumn Festival. I anthropomorphize the jade rabbit in the traditional festival so that the rabbit can wear a spacesuit that can live in space and on the moon.',
		linkTo: '/',
	},
	{
		title: 'Netflix',
		description:
			'My idea of this Brand Animation is the logo of Netflix broke out of the old TV and broke the TV screen. Because I think this represents Netflix as a new era of TV shows production.',
		linkTo: '/',
	},
];

export default motionDesignProjects;
