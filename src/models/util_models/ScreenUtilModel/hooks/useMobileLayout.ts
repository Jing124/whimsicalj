import { useEffect, useState } from 'react';

import ScreenUtilModel from '..';
import useWindowSize from './useWindowSize';

const useMobileLayout = () => {
	const windowSize = useWindowSize();
	const [isMobileLayout, setIsMobileLayout] = useState(false);

	useEffect(() => {
		if (windowSize.width >= ScreenUtilModel.LG) {
			setIsMobileLayout(false);
		} else {
			setIsMobileLayout(true);
		}
	}, [windowSize]);

	return isMobileLayout;
};

export default useMobileLayout;
