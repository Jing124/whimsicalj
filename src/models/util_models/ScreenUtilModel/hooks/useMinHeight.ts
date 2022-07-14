import { useEffect, useState } from 'react';

import useWindowSize from './useWindowSize';

const useMinHeight = (offset: number) => {
	const screenSize = useWindowSize();
	const [minHeight, setMinHeight] = useState(0);

	useEffect(() => {
		const height = screenSize.height;
		setMinHeight(height - offset);
	}, [screenSize, offset]);

	return minHeight;
};

export default useMinHeight;
