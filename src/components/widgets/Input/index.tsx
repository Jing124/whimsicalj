import './index.scss';

import { HTMLProps } from 'react';

const Input = (props: HTMLProps<HTMLInputElement>) => {
	const { className, ...attributes } = props;

	return (
		<input
			className={`widget Input rounded-md py-2 px-3 text-sm ${
				className || ''
			} `}
			{...attributes}
		/>
	);
};

export default Input;
