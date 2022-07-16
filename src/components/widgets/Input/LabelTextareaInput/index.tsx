import './index.scss';

import { HTMLProps, ReactNode } from 'react';

import TextareaInput from '../TextareaInput';

const LabelTextareaInput = (
	props: HTMLProps<HTMLInputElement> & { labelElement: ReactNode }
) => {
	const { labelElement, className = '', ...attributes } = props;
	return (
		<div className={`widget LabelTextareaInput`}>
			<div className='label'>{labelElement}</div>
			<TextareaInput className={`${className}`} {...attributes} />
		</div>
	);
};

export default LabelTextareaInput;
