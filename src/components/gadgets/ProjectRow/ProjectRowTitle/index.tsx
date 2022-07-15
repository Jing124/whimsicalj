import { ReactNode } from 'react';

const ProjectRowTitle = ({ children }: { children: ReactNode }) => {
	return <div className='text-3xl font-extrabold'>{children}</div>;
};

export default ProjectRowTitle;
