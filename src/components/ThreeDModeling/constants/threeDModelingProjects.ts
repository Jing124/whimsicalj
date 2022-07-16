import RouteUtilModel from '../../../models/util_models/RouteUtilModel';

const motionDesignProjects = [
	{
		title: 'Collision Across The Ages',
		description:
			'An ancient Chinese clay figurine artist uses advanced technology to create 3D models..',
		images: [
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/01.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/02.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/03.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/04.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/05.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/06.webp`,
		],
		banners: [
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/banners/01.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/banners/02.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/banners/03.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/banners/04.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/banners/05.webp`,
			`${process.env.PUBLIC_URL}/projects/3d_modeling/collision_across_the_ages/banners/06.webp`,
		],
	},
	{
		title: 'Little Skeleton',
		description:
			'This is my internship project. The purpose is to create a cute little skeleton. I created this model regarding normal scale skeletons and some cute skeletons.',
		linkTo: `${RouteUtilModel.ROUTES['3D_MODELING'].get()}/${
			RouteUtilModel.THREE_D_MODELING_PROJECTS.LITTLE_SKELETON
		}`,
		src: `${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/skeleton.mp4`,
		poster: `${process.env.PUBLIC_URL}/projects/3d_modeling/littleskeleton/poster.png`,
	},
	{
		title: 'The Year Of Tiger',
		description:
			'The design of this project is inspired by the Chinese New Year. Each Chinese New Year represents a different zodiac, so 2022 represents the Year of Tiger. This tiger design wears a traditional lion dance hat and holds a congratulatory Chinese New Year sentence that represents the arrival of the Year of the Tiger.',
		linkTo: `${RouteUtilModel.ROUTES['3D_MODELING'].get()}/${
			RouteUtilModel.THREE_D_MODELING_PROJECTS.YEAR_OF_TIGER
		}`,
		src: `${process.env.PUBLIC_URL}/projects/3d_modeling/year_of_tiger/tiger.mp4`,
		poster: `${process.env.PUBLIC_URL}/projects/3d_modeling/year_of_tiger/poster.png`,
	},
	{
		title: 'The Oreo Factory',
		description:
			"Oreo's brand is popular with many people and children who prefer sweets, so I biased the overall design of this animation towards cuteness. The choice of color is biased towards pink, lavender, etc. The result is a small, cute Oreo factory assembly line for this project.",
		linkTo: `${RouteUtilModel.ROUTES['3D_MODELING'].get()}/${
			RouteUtilModel.THREE_D_MODELING_PROJECTS.OREO_FACTORY
		}`,
		src: `${process.env.PUBLIC_URL}/projects/3d_modeling/oreo_factory/oero.mp4`,
		poster: `${process.env.PUBLIC_URL}/projects/3d_modeling/oreo_factory/poster.png`,
	},
	{
		title: 'Astronaut-Bunny',
		description:
			'The design of this project is inspired by the traditional Chinese festival Mid-Autumn Festival. I anthropomorphize the jade rabbit in the traditional festival so that the rabbit can wear a spacesuit that can live in space and on the moon.',
		linkTo: `${RouteUtilModel.ROUTES['3D_MODELING'].get()}/${
			RouteUtilModel.THREE_D_MODELING_PROJECTS.ASTRONAUT_BUNNY
		}`,
		src: `${process.env.PUBLIC_URL}/projects/3d_modeling/astronaut_bunny/bunny.mp4`,
		poster: `${process.env.PUBLIC_URL}/projects/3d_modeling/astronaut_bunny/poster.png`,
	},
	{
		title: 'Netflix',
		description:
			'My idea of this Brand Animation is the logo of Netflix broke out of the old TV and broke the TV screen. Because I think this represents Netflix as a new era of TV shows production.',
		linkTo: `${RouteUtilModel.ROUTES['3D_MODELING'].get()}/${
			RouteUtilModel.THREE_D_MODELING_PROJECTS.NETFLIX
		}`,
		src: `${process.env.PUBLIC_URL}/projects/3d_modeling/netflix/netflix.mp4`,
		poster: `${process.env.PUBLIC_URL}/projects/3d_modeling/netflix/poster.png`,
	},
];

export default motionDesignProjects;
