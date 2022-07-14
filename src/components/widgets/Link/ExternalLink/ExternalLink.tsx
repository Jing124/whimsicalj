import { AnchorHTMLAttributes, ReactNode } from 'react';

const ExternalLink = ({
	href,
	className,
	children,
	...attributes
}: {
	href: string;
	className?: string;
	children?: ReactNode;
	attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
}) => {
	return (
		<a
			href={href}
			className={`widget ExternalLink ${className || ''}`}
			target='_blank'
			rel='noopener noreferrer'
			{...attributes}
		>
			{children}
		</a>
	);
};

export default ExternalLink;
