import './index.scss';

import PropTypes from 'prop-types';

const SidebarOverlay = (props) => {
	const { className, children, open, ...attributes } = props;
	return open ? (
		<div
			className={`widget SidebarOverlay ${className || ''}`}
			{...attributes}
		></div>
	) : (
		<></>
	);
};

SidebarOverlay.propTypes = {
	onClick: PropTypes.func,
	open: PropTypes.bool,
	children: PropTypes.any,
	className: PropTypes.string,
};

export default SidebarOverlay;
