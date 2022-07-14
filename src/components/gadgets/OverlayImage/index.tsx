import './index.scss';

import {
	FilledButtonColor,
	FilledButtonProps,
} from '../../widgets/Button/FilledButton/types';

import FilledButton from '../../widgets/Button/FilledButton';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

const OverlayImage = ({
	className,
	imageURI,
	btnLabel,
	color = 'secondary',
	...attributes
}: {
	className?: string;
	imageURI: string;
	btnLabel: ReactNode;
	color?: FilledButtonColor;
	attributes?: FilledButtonProps;
}) => {
	return (
		<div className={`gadget OverlayImage ${className || ''}`}>
			<img src={imageURI} alt='image' />
			<div className='overlay'></div>
			<FilledButton color={color} {...attributes}>
				{btnLabel}
			</FilledButton>
		</div>
	);
};

OverlayImage.propTypes = {
	Icon: PropTypes.elementType,
};

export default OverlayImage;
