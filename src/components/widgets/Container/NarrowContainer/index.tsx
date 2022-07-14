import React from 'react';

const NarrowContainer = ({
	className,
	children,
	...attributes
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={`widget NarrowContainer container xs-max:px-5 xs-to-sm:px-5 sm-to-md:px-8 md-to-lg:px-8 lg:px-12 lg:mx-auto lg-max:max-w-full ${
				className || ''
			}`}
			{...attributes}
		>
			{children}
		</div>
	);
};

export default NarrowContainer;
