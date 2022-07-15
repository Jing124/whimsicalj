import { ReactNode } from 'react';

const ProjectRowItem = ({
	className = '',
	children,
	...attributes
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div className={`gadget ProjectRowItem ${className}`} {...attributes}>
			{children}
		</div>
	);
};

export default ProjectRowItem;
