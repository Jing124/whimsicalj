import { createTheme } from '@mui/material';

class ScreenUtilModel {
	static XS = 300;
	static SM = 576;
	static MD = 768;
	static LG = 992;
	static XL = 1200;
	static '2XL' = 1400;

	/**
	 * Material UI Theme
	 */
	static muiTheme = createTheme({
		breakpoints: {
			values: {
				xs: ScreenUtilModel.XS,
				sm: ScreenUtilModel.SM,
				md: ScreenUtilModel.MD,
				lg: ScreenUtilModel.LG,
				xl: ScreenUtilModel.XL,
			},
		},
	});

	static getWindowSize() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}
}

export default ScreenUtilModel;
