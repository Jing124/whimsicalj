const XS = '300px';
const SM = '576px';
const MD = '768px';
const LG = '992px';
const XL = '1200px';
const XLL = '1400px';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: XS,
			sm: SM,
			md: MD,
			lg: LG,
			xl: XL,
			'2xl': XLL,
			'xs-max': { max: XS },
			'sm-max': { max: SM },
			'md-max': { max: MD },
			'lg-max': { max: LG },
			'xs-to-sm': {
				raw: `(min-width: ${XS}) and (max-width: ${SM})`,
			},
			'sm-to-md': {
				raw: `(min-width: ${SM}) and (max-width: ${MD})`,
			},
			'md-to-lg': {
				raw: `(min-width: ${MD}) and (max-width: ${LG})`,
			},
		},
		extend: {
			gridTemplateColumns: {
				16: 'repeat(16, minmax(0, 1fr))',
			},
			spacing: {},
		},
	},
	plugins: [],
};
