import { ReactNode } from 'react';

const ProjectRowDescription = ({ children }: { children: ReactNode }) => {
	return (
		<div className='text-secondary text-sm mt-10 leading-8'>{children}</div>
	);
};

export default ProjectRowDescription;
