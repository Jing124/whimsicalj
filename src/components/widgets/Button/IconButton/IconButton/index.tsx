import './index.scss';

import {
	ButtonHTMLAttributes,
	HTMLAttributes,
	MouseEventHandler,
	ReactNode,
} from 'react';
import { IconButtonProps, IconButton as MuiIconButton } from '@mui/material';

const IconButton = ({
	id,
	className,
	children,
	onClick,
	noPadding,
	...attributes
}: {
	id?: string;
	className?: string;
	children: ReactNode;
	noPadding?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	attributes?: IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
	return (
		<MuiIconButton
			id={id}
			className={`widget IconButton ${className || ''} ${
				noPadding ? 'no-padding' : ''
			}`}
			onClick={onClick}
			{...attributes}
		>
			{children}
		</MuiIconButton>
	);
};

export default IconButton;
