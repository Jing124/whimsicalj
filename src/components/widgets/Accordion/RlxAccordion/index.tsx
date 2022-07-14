import './index.scss';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

const RlxAccordion = (props: AccordionProps) => {
	const { className, children, ...attributes } = props;
	return (
		<MuiAccordion
			className={`widget RlxAccordion ${className || ''}`}
			{...attributes}
		>
			{children}
		</MuiAccordion>
	);
};

export default RlxAccordion;
