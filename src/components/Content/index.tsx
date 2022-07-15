import './index.scss';

import Container from '../widgets/Container';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

const Content = ({
	className = '',
	title,
	children,
	titleBorderBottom = false,
	...attributes
}: {
	className?: string;
	title?: string;
	titleBorderBottom?: boolean;
	children: ReactNode;
}) => {
	return (
		<Container className={`Content ${className}`} {...attributes}>
			{title && (
				<div
					className={`title pt-16 pb-12 text-5xl font-extrabold ${
						titleBorderBottom ? 'show-border-bottom' : ''
					}`}
				>
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
