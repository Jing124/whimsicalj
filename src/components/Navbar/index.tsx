import './index.scss';

import { useEffect, useState } from 'react';

import AssetUtilModel from '../../models/util_models/AssetUtilModel';
import IconButton from '../widgets/Button/IconButton/IconButton';
import InternalLink from '../widgets/Link/InternalLink';
import MenuIcon from '@mui/icons-material/Menu';
import NarrowContainer from '../widgets/Container/NarrowContainer';
import RouteUtilModel from '../../models/util_models/RouteUtilModel';
import { useLocation } from 'react-router-dom';
import useMobileLayout from '../../models/util_models/ScreenUtilModel/hooks/useMobileLayout';

const Navbar = () => {
	const isMobileLayout = useMobileLayout();

	const [openMobileNavMenu, setOpenMobileNavMenu] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (!isMobileLayout) {
			setOpenMobileNavMenu(false);
		}
	}, [isMobileLayout]);

	useEffect(() => {
		setOpenMobileNavMenu(false);
	}, [location]);

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
					<NavItems />
				</div>
			</NarrowContainer>
			<NarrowContainer
				className={`mobile-nav-menu w-full ${
					!openMobileNavMenu ? 'hide' : 'show'
				}`}
			>
				<div className='mobile-nav-items'>
					<NavItems />
				</div>
			</NarrowContainer>
		</nav>
	);
};

const NavItems = () => {
	const location = useLocation();

	return (
		<>
			<InternalLink
				className={`nav-item ${
					location.pathname === RouteUtilModel.ROUTES.HOME.get()
						? 'active'
						: ''
				}`}
				to={RouteUtilModel.ROUTES.HOME.get()}
			>
				Home
			</InternalLink>
			<InternalLink
				className={`nav-item ${
					location.pathname.startsWith(
						RouteUtilModel.ROUTES.MOTION_DESIGN.get()
					)
						? 'active'
						: ''
				}`}
				to={RouteUtilModel.ROUTES.MOTION_DESIGN.get()}
			>
				Motion Design
			</InternalLink>

			<InternalLink
				className={`nav-item ${
					location.pathname.startsWith(
						RouteUtilModel.ROUTES['3D_MODELING'].get()
					)
						? 'active'
						: ''
				}`}
				to={RouteUtilModel.ROUTES['3D_MODELING'].get()}
			>
				3D Modeling
			</InternalLink>

			<InternalLink
				className={`nav-item ${
					location.pathname.startsWith(
						RouteUtilModel.ROUTES.GRAPHIC_DESIGN.get()
					)
						? 'active'
						: ''
				}`}
				to={RouteUtilModel.ROUTES.GRAPHIC_DESIGN.get()}
			>
				Graphic Design
			</InternalLink>

			<InternalLink
				className={`nav-item ${
					location.pathname.startsWith(
						RouteUtilModel.ROUTES.VIDEO_EDITING.get()
					)
						? 'active'
						: ''
				}`}
				to={RouteUtilModel.ROUTES.VIDEO_EDITING.get()}
			>
				Video Editing
			</InternalLink>

			<InternalLink
				to={RouteUtilModel.ROUTES.UX_UI.get()}
				className={`nav-item ${
					location.pathname.startsWith(
						RouteUtilModel.ROUTES.UX_UI.get()
					)
						? 'active'
						: ''
				}`}
			>
				UX/UI
			</InternalLink>

			<InternalLink
				to={RouteUtilModel.ROUTES.RESUME.get()}
				className={`nav-item ${
					location.pathname.startsWith(
						RouteUtilModel.ROUTES.RESUME.get()
					)
						? 'active'
						: ''
				}`}
			>
				Resume
			</InternalLink>

			<InternalLink
				to={RouteUtilModel.ROUTES.CONTACT.get()}
				className={`nav-item ${
					location.pathname.startsWith(
						RouteUtilModel.ROUTES.CONTACT.get()
					)
						? 'active'
						: ''
				}`}
			>
				Contact
			</InternalLink>
		</>
	);
};

export default Navbar;
