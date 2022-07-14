import './index.scss';

import { Menu, MenuProps } from '@mui/material';

import { ReactNode } from 'react';

const NavMenu = (props: MenuProps) => {
	const {
		className,
		open,
		children,
		...attributes
	}: {
		className?: string;
		open: boolean;
		children?: ReactNode;
	} = props;

	return (
		<Menu
			className={`gadget NavMenu ${className || ''}`}
			open={open}
			{...attributes}
		>
			{children}
		</Menu>
	);
};

export default NavMenu;
