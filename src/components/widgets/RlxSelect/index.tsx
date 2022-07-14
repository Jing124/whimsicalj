import './index.scss';

import { Select, SelectProps } from '@mui/material';

import PropTypes from 'prop-types';
import { ReactNode } from 'react';

const RlxSelect = ({
	children,
	className,
	...attributes
}: {
	children: ReactNode;
	className?: string;
	attributes?: SelectProps;
}) => {
	return (
		<Select
			className={`widget RlxSelect ${className || ''}`}
			{...attributes}
		>
			{children}
		</Select>
	);
};

RlxSelect.propTypes = {
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func,
	style: PropTypes.object,
	id: PropTypes.string,
	labelId: PropTypes.string,
};

export default RlxSelect;
