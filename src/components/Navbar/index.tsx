import './index.scss';

import { useEffect, useRef, useState } from 'react';

import AssetUtilModel from '../../models/util_models/AssetUtilModel';
import Container from '../widgets/Container';
import IconButton from '../widgets/Button/IconButton/IconButton';
import InternalLink from '../widgets/Link/InternalLink';
import MenuIcon from '@mui/icons-material/Menu';
import NarrowContainer from '../widgets/Container/NarrowContainer';
import NavMenuAccordion from './NavMenu/NavMenuAccordion';
import NavMenuItemList from './NavMenu/NavMenuList';
import RouteUtilModel from '../../models/util_models/RouteUtilModel';
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
		<nav id='Navbar' className={`py-6 z-10`}>
			<NarrowContainer className='flex justify-between lg-to-xl:justify-center flex-wrap items-center z-10'>
				<div className='flex gap-5 items-center z-10'>
					<div className='logo'>
						<InternalLink
							to='/'
							className='flex gap-5 items-center'
						>
							<img
								style={{ width: '60px', height: '47px' }}
								src={AssetUtilModel.LOGO_PATH({
									size: isMobileLayout ? 'mobile' : 'desktop',
								})}
								alt='logo'
							/>
							<span className='text-xl font-extrabold'>
								Jing Wang
							</span>
						</InternalLink>
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

				<div className='hidden lg:flex items-center gap-5 lg:visible nav-items'>
					<div className='nav-item'>
						<InternalLink to={RouteUtilModel.ROUTES.HOME.get()}>
							Home
						</InternalLink>
					</div>
					<div className='nav-item'>
						<InternalLink
							to={RouteUtilModel.ROUTES.MOTION_DESIGN.get()}
						>
							Motion Design
						</InternalLink>
					</div>
					<div className='nav-item'>
						<InternalLink
							to={RouteUtilModel.ROUTES['3D_MODELING'].get()}
						>
							3D Modeling
						</InternalLink>
					</div>
					<div className='nav-item'>
						<InternalLink
							to={RouteUtilModel.ROUTES.GRAPHIC_DESIGN.get()}
						>
							Graphic Design
						</InternalLink>
					</div>
					<div className='nav-item'>
						<InternalLink
							to={RouteUtilModel.ROUTES.VIDEO_EDITING.get()}
						>
							Video Editing
						</InternalLink>
					</div>
					<div className='nav-item'>
						<InternalLink to={RouteUtilModel.ROUTES.UX_UI.get()}>
							UX/UI
						</InternalLink>
					</div>
					<div className='nav-item'>
						<InternalLink to={RouteUtilModel.ROUTES.RESUME.get()}>
							Resume
						</InternalLink>
					</div>
					<div className='nav-item'>
						<InternalLink to={RouteUtilModel.ROUTES.CONTACT.get()}>
							Contact
						</InternalLink>
					</div>
				</div>

				<NavMenuItemList
					anchorEl={anchorEl}
					open={open}
					handleOpen={handleOpen}
					handleClose={handleClose}
				/>
			</NarrowContainer>
			<NarrowContainer
				className={`mobile-nav-menu ${
					!openMobileNavMenu ? 'hidden' : 'visible'
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
			</NarrowContainer>
		</nav>
	);
};

export default Navbar;
