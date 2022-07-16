import './index.scss';

import { AnchorHTMLAttributes, useMemo } from 'react';

import ExternalLink from '../../Link/ExternalLink/ExternalLink';
import { FilledButtonProps } from './types';
import InternalLink from '../../Link/InternalLink';

const FilledButton = ({
	className,
	children,
	color = 'primary',
	to,
	href,
	btnType,
	size,
	Icon,
	type,
	disabled,
	...attributes
}: FilledButtonProps) => {
	const classes = useMemo(() => {
		const classNames = [
			'widget',
			'FilledButton',
			color || 'primary',
			size || 'medium',
			className || '',
		];

		return classNames.join(' ');
	}, [color, size, className]);

	if (!btnType || btnType === 'button') {
		return (
			<button
				disabled={disabled}
				type={type}
				className={classes}
				{...attributes}
			>
				{Icon ? (
					<div className='flex flex-wrap gap-2 items-center'>
						<div>
							<Icon />
						</div>
						<div>{children}</div>
					</div>
				) : (
					children
				)}
			</button>
		);
	}

	if (to && btnType === 'link') {
		return (
			<InternalLink to={to} className={classes} {...attributes}>
				{Icon ? (
					<div className='flex flex-wrap gap-2 items-center'>
						<div>
							<Icon />
						</div>
						<div>{children}</div>
					</div>
				) : (
					children
				)}
			</InternalLink>
		);
	}

	if (href && btnType === 'link') {
		return (
			<ExternalLink
				href={href}
				className={classes}
				{...(attributes as AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{Icon ? (
					<div className='flex flex-wrap gap-2 items-center'>
						<div>
							<Icon />
						</div>
						<div>{children}</div>
					</div>
				) : (
					children
				)}
			</ExternalLink>
		);
	}

	return (
		<span className={classes} {...attributes}>
			{Icon ? (
				<div className='flex flex-wrap gap-2 items-center'>
					<div>
						<Icon />
					</div>
					<div>{children}</div>
				</div>
			) : (
				children
			)}
		</span>
	);
};

export default FilledButton;
