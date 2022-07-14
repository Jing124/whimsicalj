import './index.scss';

import { HTMLProps } from 'react';
import IconButton from '../../Button/IconButton/IconButton';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

const IconInput = (
	props: HTMLProps<HTMLInputElement> & {
		Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
			muiName: string;
		};
	}
) => {
	const { className, Icon, ...attributes } = props;
	return (
		<div
			className={`widget IconInput flex items-center justify-between ${
				className || ''
			}`}
		>
			<input {...attributes} />
			<div>
				<IconButton>
					<Icon />
				</IconButton>
			</div>
		</div>
	);
};

export default IconInput;
