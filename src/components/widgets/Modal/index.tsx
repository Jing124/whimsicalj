import './index.scss';

import { Box, Modal as MuiModal } from '@mui/material';

const Modal = ({
	open,
	onClose,
	className,
	children,
	...attributes
}: {
	open: boolean;
	children: React.ReactNode;
	onClose: () => void;
	className?: string;
}) => {
	return (
		<MuiModal open={open} onClose={onClose} {...attributes}>
			<Box
				component='div'
				className={`widget Modal scrollbar ${className || ''}`}
			>
				{children}
			</Box>
		</MuiModal>
	);
};

export default Modal;
