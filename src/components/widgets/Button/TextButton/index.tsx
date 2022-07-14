import './index.scss';

import { ReactNode } from 'react';

const TextButton = ({
	className = '',
	children,
	...attribute
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<button className={`${className} widget TextButton`} {...attribute}>
			{children}
		</button>
	);
};

export default TextButton;
