import './index.scss';

import { MenuItem, MenuItemProps } from '@mui/material';

import { ReactNode } from 'react';

const NavMenuItem = (
	props: MenuItemProps & { icon: string; label: ReactNode }
) => {
	const {
		className,
		icon,
		label,
		...attributes
	}: {
		className?: string;
		icon: string;
		label: ReactNode;
	} = props;

	return (
		<MenuItem
			className={`gadget NavMenuItem ${className || ''}`}
			{...attributes}
		>
			<div className='flex items-center gap-4'>
				<div>
					<img src={icon} height='20' width='20' alt='icon' />
				</div>
				<div className='label'>{label}</div>
			</div>
		</MenuItem>
	);
};

export default NavMenuItem;
