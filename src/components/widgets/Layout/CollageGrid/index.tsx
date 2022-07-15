import './index.scss';

import { ReactNode } from 'react';

const CollageGrid = ({
	className = '',
	children,
	...attributes
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={`widget CollageGrid flex flex-wrap px-1 ${className}`}
			{...attributes}
		>
			{children}
		</div>
	);
};

export default CollageGrid;
