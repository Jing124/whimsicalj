import './index.scss';

import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RlxAccordionSummary = (props: AccordionSummaryProps) => {
	const { className, children, expandIcon, ...attributes } = props;
	return (
		<MuiAccordionSummary
			className={`widget RlxAccordionSummary ${className || ''}`}
			expandIcon={<ExpandMoreIcon />}
			{...attributes}
		>
			{children}
		</MuiAccordionSummary>
	);
};

export default RlxAccordionSummary;
