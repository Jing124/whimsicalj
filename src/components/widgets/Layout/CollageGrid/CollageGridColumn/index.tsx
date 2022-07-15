import './index.scss';

import { ReactNode } from 'react';

const CollageGridColumn = ({
	className = '',
	children,
	...attributes
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={`widget CollageGridColumn ${className}`}
			{...attributes}
		>
			{children}
		</div>
	);
};

export default CollageGridColumn;
