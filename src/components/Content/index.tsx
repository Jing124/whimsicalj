import './index.scss';

import Container from '../widgets/Container';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

const Content = ({
	className = '',
	title,
	children,
	...attributes
}: {
	className?: string;
	title?: string;
	children: ReactNode;
}) => {
	return (
		<Container className={`Content ${className}`} {...attributes}>
			{title && (
				<div className={`title py-24 text-5xl font-extrabold`}>
					{title ?? ''}
				</div>
			)}
			<div className={`${title ? '' : 'py-5 md:py-40'}`}>{children}</div>
		</Container>
	);
};

Content.propTypes = {
	id: PropTypes.string,
};

export default Content;
