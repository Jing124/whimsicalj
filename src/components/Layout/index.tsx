import Footer from '../Footer';
import Navbar from '../Navbar';
import { ReactNode } from 'react';
import useMinHeight from '../../models/util_models/ScreenUtilModel/hooks/useMinHeight';
import useNavbarHeight from '../../models/util_models/ScreenUtilModel/hooks/useNavbarHeight';

const Layout = ({ children }: { children: ReactNode }) => {
	const navbarHeight = useNavbarHeight();
	const minHeight = useMinHeight(navbarHeight);

	return (
		<>
			<Navbar />
			<div style={{ minHeight: `${minHeight}px` }}>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
