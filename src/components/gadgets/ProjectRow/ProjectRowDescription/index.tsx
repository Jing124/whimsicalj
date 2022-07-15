import { ReactNode } from 'react';

const ProjectRowDescription = ({
	className = '',
	children,
	...attributes
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={`gadget ProjectRowDescription text-secondary text-sm mt-10 leading-8 ${className}`}
			{...attributes}
		>
			{children}
		</div>
	);
};

export default ProjectRowDescription;
