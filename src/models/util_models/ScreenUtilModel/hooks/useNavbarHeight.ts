import { useEffect, useState } from 'react';

const useNavbarHeight = () => {
	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		const nav = document.getElementById('Navbar');
		let resizeObserver: ResizeObserver;

		if (nav) {
			resizeObserver = new ResizeObserver(() => {
				setNavbarHeight(nav.offsetHeight);
			});

			resizeObserver.observe(nav);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return navbarHeight;
};

export default useNavbarHeight;
