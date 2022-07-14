import './index.scss';

import ExternalLink from '../../Link/ExternalLink/ExternalLink';
import InternalLink from '../../Link/InternalLink';
import { ReactNode } from 'react';

const LinkText = ({
	className = '',
	to,
	href,
	children,
	...attribute
}: {
	className?: string;
	to?: string;
	href?: string;
	children: ReactNode;
}) => {
	return to ? (
		<InternalLink
			to={to}
			className={`${className} widget LinkText`}
			{...attribute}
		>
			{children}
		</InternalLink>
	) : href ? (
		<ExternalLink
			href={href}
			className={`${className} widget LinkText`}
			{...attribute}
		>
			{children}
		</ExternalLink>
	) : (
		<>{children}</>
	);
};

export default LinkText;
