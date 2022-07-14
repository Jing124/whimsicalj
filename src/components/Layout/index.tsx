import Navbar from '../Navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
