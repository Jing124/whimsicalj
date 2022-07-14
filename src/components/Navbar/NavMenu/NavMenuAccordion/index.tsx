import './index.scss';

import { ReactNode, SyntheticEvent } from 'react';

import InternalLink from '../../../widgets/Link/InternalLink';
import MenuItem from '../types/MenuItem';
import RlxAccordion from '../../../widgets/Accordion/RlxAccordion';
import RlxAccordionDetails from '../../../widgets/Accordion/RlxAccordion/RlxAccordionDetails';
import RlxAccordionSummary from '../../../widgets/Accordion/RlxAccordion/RlxAccordionSummary';

const NavMenuAccordion = ({
	open,
	onChange,
	label,
	menuItems,
	linkTo,
	overrideLabelStyle = false,
}: {
	open?: boolean;
	onChange?: (event: SyntheticEvent, expanded: boolean) => void;
	label: ReactNode;
	menuItems?: Array<MenuItem>;
	linkTo?: string;
	overrideLabelStyle?: boolean;
}) => {
	return linkTo ? (
		<RlxAccordion
			expanded={false}
			className={`NavMenuAccordion NavLink`}
			disabled
		>
			<InternalLink to={linkTo}>
				<RlxAccordionSummary>
					<div
						className={`title ${
							overrideLabelStyle ? 'override' : ''
						}`}
					>
						{label}
					</div>
				</RlxAccordionSummary>
			</InternalLink>
		</RlxAccordion>
	) : (
		<RlxAccordion
			expanded={open}
			onChange={onChange}
			className={`NavMenuAccordion`}
		>
			<RlxAccordionSummary>
				<div
					className={`title ${overrideLabelStyle ? 'override' : ''}`}
				>
					{label}
				</div>
			</RlxAccordionSummary>
			<RlxAccordionDetails>
				{menuItems?.map((item, index) => {
					return (
						<InternalLink
							to=''
							key={index}
							className='pt-8 first:pt-0 block nav-menu-accordion-item'
						>
							<div className='flex items-center gap-5 ml-6'>
								<div>
									<img
										src={item.icon}
										height='20'
										width='20'
										alt={item.label}
									/>
								</div>
								<div className='label'>{item.label}</div>
							</div>
						</InternalLink>
					);
				})}
			</RlxAccordionDetails>
		</RlxAccordion>
	);
};

export default NavMenuAccordion;
