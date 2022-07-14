import './index.scss';

import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	HTMLAttributes,
	MouseEventHandler,
	ReactNode,
	useMemo,
} from 'react';

import ExternalLink from '../../Link/ExternalLink/ExternalLink';
import FilledButtonSize from './types/OutlinedButtonSize';
import FilledButtonType from './types/OutlinedButtonType';
import IconPosition from './types/IconPosition';
import InternalLink from '../../Link/InternalLink';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

const OutlinedButton = ({
	className,
	children,
	to,
	href,
	btnType,
	size,
	onClick,
	disabled,
	Icon,
	iconPosition = 'left',
	...attributes
}: {
	className?: string;
	children?: ReactNode;
	to?: string;
	href?: string;
	btnType?: FilledButtonType;
	size?: FilledButtonSize;
	onClick?: MouseEventHandler<
		HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement
	>;
	disabled?: boolean;
	iconPosition?: IconPosition;
	Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};
	attributes?:
		| ButtonHTMLAttributes<HTMLButtonElement>
		| AnchorHTMLAttributes<HTMLAnchorElement>
		| HTMLAttributes<HTMLSpanElement>;
}) => {
	const classes = useMemo(() => {
		const classNames = [
			'widget',
			'OutlinedButton',
			size || 'normal',
			className || '',
		];

		return classNames.join(' ');
	}, [size, className]);

	if (!btnType || btnType === 'button') {
		return (
			<button className={classes} onClick={onClick} {...attributes}>
				{Icon ? (
					<div className='flex flex-wrap gap-2 items-center'>
						<div
							className={
								iconPosition === 'left'
									? 'order-none'
									: 'order-1'
							}
						>
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
			<InternalLink className={classes} to={to} {...attributes}>
				{Icon ? (
					<div className='flex flex-wrap gap-2 items-center'>
						<div
							className={
								iconPosition === 'left'
									? 'order-none'
									: 'order-1'
							}
						>
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
				className={classes}
				href={href}
				{...(attributes as AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{Icon ? (
					<div className='flex flex-wrap gap-2 items-center'>
						<div
							className={
								iconPosition === 'left'
									? 'order-none'
									: 'order-1'
							}
						>
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
		<span className={classes} onClick={onClick} {...attributes}>
			{Icon ? (
				<div className='flex flex-wrap gap-2 items-center'>
					<div
						className={
							iconPosition === 'left' ? 'order-none' : 'order-1'
						}
					>
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

export default OutlinedButton;
