import React from 'react';

const NarrowContainer = ({
	className = '',
	children,
	...attributes
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={`widget NarrowContainer flex justify-between px-10 ${className}`}
			{...attributes}
		>
			{children}
		</div>
	);
};

export default NarrowContainer;
