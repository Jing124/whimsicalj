import { useEffect } from 'react';

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = title;

		return () => {
			document.title = 'WhimsicalJ';
		};
	}, [title]);
};

export default usePageTitle;
