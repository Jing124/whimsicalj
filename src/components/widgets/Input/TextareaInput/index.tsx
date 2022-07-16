import './index.scss';

const TextareaInput = ({
	className = '',
	...attributes
}: {
	className?: string;
}) => {
	return (
		<textarea
			className={`widget TextareaInput rounded-xl p-2 w-full min-h-[100px] ${className}`}
			{...attributes}
			maxLength={1000}
			minLength={10}
		/>
	);
};

export default TextareaInput;
