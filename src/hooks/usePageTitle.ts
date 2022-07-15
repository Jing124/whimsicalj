import { useEffect } from 'react';

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = title;

		return () => {
			document.title = 'WhimscalJ';
		};
	}, [title]);
};

export default usePageTitle;
