import './index.scss';

import { HTMLProps, ReactNode } from 'react';

import Input from '..';

const LabelInput = (
	props: HTMLProps<HTMLInputElement> & { labelElement: ReactNode }
) => {
	const { labelElement, className = '', ...attributes } = props;
	return (
		<div className={`widget LabelInput`}>
			<div className='label'>{labelElement}</div>
			<Input className={`${className}`} {...attributes} />
		</div>
	);
};

export default LabelInput;
