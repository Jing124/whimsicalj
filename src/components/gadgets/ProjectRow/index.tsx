import './index.scss';

import { ReactNode } from 'react';

const ProjectRow = ({ children }: { children: ReactNode }) => {
	return (
		<div className='gadget ProjectRow grid md:grid-cols-2 gap-10 py-10'>
			{children}
		</div>
	);
};

export default ProjectRow;
