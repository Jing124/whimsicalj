class RouteUtilModel {
	static THREE_D_MODELING_PROJECTS = {
		LITTLE_SKELETON: 'little-skeleton',
		YEAR_OF_TIGER: 'year-of-tiger',
	};

	static ROUTES = {
		HOME: {
			get: () => {
				return '/';
			},
		},
		MOTION_DESIGN: {
			get: () => {
				return '/motion-design';
			},
		},
		['3D_MODELING']: {
			get: () => {
				return '/3d-modeling';
			},
		},
		GRAPHIC_DESIGN: {
			get: () => {
				return '/graphic-design';
			},
		},
		VIDEO_EDITING: {
			get: () => {
				return '/video-editing';
			},
		},
		UX_UI: {
			get: () => {
				return '/ux_ui';
			},
		},
		RESUME: {
			get: () => {
				return '/resume';
			},
		},
		CONTACT: {
			get: () => {
				return '/contact';
			},
		},
	};
}

export default RouteUtilModel;
