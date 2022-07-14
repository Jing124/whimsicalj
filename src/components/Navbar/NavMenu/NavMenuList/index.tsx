import { useEffect, useState } from 'react';

import NavMenu from '../../../gadgets/NavMenu';
import NavMenuItem from '../../../gadgets/NavMenu/NavMenuItem';
import NavbarUtilModel from '../../../../models/util_models/NavbarUtilModel';
import bundleMenuItems from '../constants/bundleMenuItems';
import dappMenuItems from '../constants/dappMenuItems';
import freebiesMenuItems from '../constants/freebiesMenuItems';

const NavMenuItemList = ({
	anchorEl,
	open,
	handleClose,
	handleOpen,
}: {
	anchorEl: HTMLElement | null;
	open: boolean;
	handleClose: () => void;
	handleOpen: () => void;
}) => {
	const [key, setKey] = useState('');
	const [menuItems, setMenuItems] = useState<
		Array<{
			icon: string;
			label: string;
		}>
	>([]);

	useEffect(() => {
		setKey(anchorEl?.getAttribute('data-key') || '');
	}, [anchorEl]);

	useEffect(() => {
		switch (key) {
			case NavbarUtilModel.NAVITEM_KEYS.DAPPS:
				setMenuItems(dappMenuItems);
				break;
			case NavbarUtilModel.NAVITEM_KEYS.BUNDLES:
				setMenuItems(bundleMenuItems);
				break;
			case NavbarUtilModel.NAVITEM_KEYS.FREEBIES:
				setMenuItems(freebiesMenuItems);
				break;
			default:
				setMenuItems([]);
		}
	}, [key]);

	return (
		<NavMenu
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			onMouseEnter={handleOpen}
			MenuListProps={{ onMouseLeave: handleClose }}
		>
			{menuItems.map((item, index) => {
				return (
					<NavMenuItem
						key={`${index}-${item.label}`}
						onClick={handleClose}
						className={index === 0 ? 'pt-10' : ''}
						icon={item.icon}
						label={item.label}
					/>
				);
			})}
		</NavMenu>
	);
};

export default NavMenuItemList;
