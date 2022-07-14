import './index.scss';

import { useEffect, useRef, useState } from 'react';

import AssetUtilModel from '../../models/util_models/AssetUtilModel';
import Container from '../widgets/Container';
import IconButton from '../widgets/Button/IconButton/IconButton';
import InternalLink from '../widgets/Link/InternalLink';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenuAccordion from './NavMenu/NavMenuAccordion';
import NavMenuItemList from './NavMenu/NavMenuList';
import dappMenuItems from './NavMenu/constants/dappMenuItems';
import freebiesMenuItems from './NavMenu/constants/freebiesMenuItems';
import useMobileLayout from '../../models/util_models/ScreenUtilModel/hooks/useMobileLayout';

const Navbar = () => {
	const isMobileLayout = useMobileLayout();

	const [openMobileNavMenu, setOpenMobileNavMenu] = useState(false);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [open, setOpen] = useState(false);

	const [templateAccordionOpened, setTemplateAccordionOpened] =
		useState(false);
	const [bundleAccordionOpened, setBundleAccordionOpened] = useState(false);
	const [freebiesAccordionOpened, setFreebiesAccordionOpened] =
		useState(false);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (!isMobileLayout) {
			setOpenMobileNavMenu(false);
		}
	}, [isMobileLayout]);

	return (
		<nav id='Navbar' className={`py-2 z-10`}>
			<Container className='flex justify-between flex-wrap items-center z-10'>
				<div className='flex gap-5 items-center z-10'>
					<div className='logo'>
						<InternalLink to='/'>
							<img
								src={AssetUtilModel.LOGO_PATH({
									size: isMobileLayout ? 'mobile' : 'desktop',
								})}
								alt='logo'
							/>
						</InternalLink>
					</div>
					<div className='nav-items flex items-center lg-max:hidden'>
						<div
							className='nav-item'
							onMouseEnter={handleClick}
							onMouseOut={handleClose}
						>
							Dapps
						</div>
					</div>
				</div>

				<div className='flex items-center gap-8 lg:hidden h-'>
					<IconButton
						className='menu-icon'
						onClick={() => {
							setOpenMobileNavMenu(!openMobileNavMenu);
						}}
					>
						<MenuIcon />
					</IconButton>
				</div>

				<NavMenuItemList
					anchorEl={anchorEl}
					open={open}
					handleOpen={handleOpen}
					handleClose={handleClose}
				/>
			</Container>
			<Container
				className={`mobile-nav-menu ${
					!openMobileNavMenu ? 'hide' : 'show'
				}`}
			>
				<NavMenuAccordion
					label={'Dapps'}
					open={templateAccordionOpened}
					onChange={(evt, expanded) => {
						setTemplateAccordionOpened(expanded);
					}}
					menuItems={dappMenuItems}
				/>

				<NavMenuAccordion
					label={'Freebies'}
					open={freebiesAccordionOpened}
					onChange={(evt, expanded) => {
						setFreebiesAccordionOpened(expanded);
					}}
					menuItems={freebiesMenuItems}
				/>
			</Container>
		</nav>
	);
};

export default Navbar;
