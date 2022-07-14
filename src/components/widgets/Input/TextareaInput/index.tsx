import './index.scss';

const TextareaInput = () => {
	return (
		<textarea
			className={`widget TextareaInput rounded-xl p-2 w-full min-h-[100px]`}
			maxLength={1000}
			minLength={10}
		/>
	);
};

export default TextareaInput;
