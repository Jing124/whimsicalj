import './index.scss';

import { ReactNode } from 'react';

const ProjectRow = ({ children }: { children: ReactNode }) => {
	return (
		<div className='grid md:grid-cols-2 gap-10 py-10 project-row'>
			{children}
		</div>
	);
};

export default ProjectRow;
