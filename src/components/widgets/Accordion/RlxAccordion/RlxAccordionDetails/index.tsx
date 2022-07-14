import './index.scss';

import MuiAccordionDetails from '@mui/material/AccordionDetails';

const RlxAccordionDetails = (props: any) => {
	const { className, children, ...attributes } = props;
	return (
		<MuiAccordionDetails
			className={`widget RlxAccordionDetails ${className || ''}`}
			{...attributes}
		>
			{children}
		</MuiAccordionDetails>
	);
};

export default RlxAccordionDetails;
