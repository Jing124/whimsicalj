import './index.scss';

import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

const InternalLink = ({
	to,
	className = '',
	children,
	...attributes
}: {
	to: string;
	className?: string;
	children: ReactNode;
}) => {
	return (
		<Link
			to={to}
			className={`widget InternalLink ${className}`}
			{...attributes}
		>
			{children}
		</Link>
	);
};

export default InternalLink;
