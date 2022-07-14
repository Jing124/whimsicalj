import './index.scss';

import { MenuItem, MenuItemProps } from '@mui/material';

import PropTypes from 'prop-types';
import { ReactNode } from 'react';

const RlxSelectItem = ({
	children,
	className,
	...attributes
}: {
	children: ReactNode;
	className?: string;
	attributes?: MenuItemProps;
}) => {
	return (
		<MenuItem
			className={`widget RlxSelectItem ${className || ''}`}
			{...attributes}
		>
			{children}
		</MenuItem>
	);
};

RlxSelectItem.propTypes = {
	value: PropTypes.any,
};

export default RlxSelectItem;
