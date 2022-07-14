class RouteUtilModel {
	static ACCOUNT_TYPES = {
		BUYER: 'buyer',
		SELLER: 'seller',
	};

	static BUYER_SECTIONS = {
		DASHBOARD: 'dashboard',
		ORDERS: 'orders',
		APPS: 'apps',
	};

	static ROUTES = {
		ACCOUNT: {
			BUYER: {
				DASHBOARD: {
					get: () => {
						return `/account/${RouteUtilModel.ACCOUNT_TYPES.BUYER}/${RouteUtilModel.BUYER_SECTIONS.DASHBOARD}`;
					},
				},
				ORDERS: {
					get: () => {
						return `/account/${RouteUtilModel.ACCOUNT_TYPES.BUYER}/${RouteUtilModel.BUYER_SECTIONS.ORDERS}`;
					},
				},
				APPS: {
					get: () => {
						return `/account/${RouteUtilModel.ACCOUNT_TYPES.BUYER}/${RouteUtilModel.BUYER_SECTIONS.APPS}`;
					},
				},
				get: () => {
					return `/account/${RouteUtilModel.ACCOUNT_TYPES.BUYER}`;
				},
			},
			SELLER: {
				get: () => {
					return `/account/${RouteUtilModel.ACCOUNT_TYPES.SELLER}`;
				},
			},
			get: () => {
				return '/account';
			},
		},
		CART: {
			get: () => {
				return '/cart';
			},
		},
		BLOG: {
			get: () => {
				return '/blog';
			},
		},
		OFFERS: {
			get: () => {
				return '/offers';
			},
		},
		LOGIN: {
			get: () => {
				return '/login';
			},
		},
		SIGNUP: {
			get: () => {
				return '/signup';
			},
		},
		FORGOT_PASSWORD: {
			get: () => {
				return '/forgot-password';
			},
		},
		RECEIPT: {
			get: () => {
				return '/receipt';
			},
		},
		INVOICE: {
			get: () => {
				return '/invoice';
			},
		},
		// TODO: Remove the rest
		MARKETPLACE: {
			get: () => {
				return '/marketplace';
			},
			PROFILE: {
				get: () => {
					return '/marketplace/profile';
				},
				FAVORITES: {
					get: () => {
						return '/marketplace/profile/favorites';
					},
					PETS: {
						get: () => {
							return '/marketplace/profile/favorites/pets';
						},
					},
					GHOSTS: {
						/**
						 * @returns /marketplace/profile/favorites/ghosts
						 */
						get: () => {
							return '/marketplace/profile/favorites/ghosts';
						},
					},
				},
				INVENTORY: {
					get: () => {
						'/marketplace/profile/inventory';
					},
					PETS: {
						get: () => {
							return '/marketplace/profile/inventory/pets';
						},
					},
					GHOSTS: {
						get: () => {
							return '/marketplace/profile/inventory/ghosts';
						},
					},
				},
			},
		},
	};
}

export default RouteUtilModel;
