import React from 'react';

const Container = ({
	className,
	children,
	...attributes
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={`widget Container container xs-max:px-5 xs-to-sm:px-5 sm-to-md:px-8 md-to-lg:px-8 lg:px-10 lg:mx-auto lg-max:max-w-full ${
				className || ''
			}`}
			{...attributes}
		>
			{children}
		</div>
	);
};

export default Container;
