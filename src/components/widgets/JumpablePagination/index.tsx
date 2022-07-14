import './index.scss';

import { useEffect, useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Loading from '../Loading';

const JumpablePagination = ({
	currentPage,
	pages,
	onChange,
}: {
	currentPage: number;
	pages: number;
	onChange: (x: number) => void;
}) => {
	const [tempPage, setTempPage] = useState(currentPage);

	const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		onChange(tempPage);
	};

	useEffect(() => {
		setTempPage(currentPage);
	}, [currentPage]);

	return (
		<div className='widget JumpablePagination'>
			<div className='left'>
				<button
					className='navigation'
					onClick={() => {
						onChange(currentPage - 1);
					}}
				>
					<ArrowBackIcon fontSize='small' />
				</button>
			</div>
			<div className='middle flex items-center gap-2'>
				<div className='page-label'>Page</div>
				<form onSubmit={handleOnSubmit}>
					<div className='page-input'>
						<input
							className='page'
							type='search'
							pattern='\d*'
							value={tempPage}
							onChange={(evt) => {
								setTempPage(+evt.currentTarget.value);
							}}
						/>
					</div>
				</form>
				<div className='page-total'>of</div>
			</div>
			<div className='right'>
				<button
					className='navigation'
					onClick={() => {
						onChange(currentPage + 1);
					}}
				>
					<ArrowForwardIcon fontSize='small' />
				</button>
			</div>
		</div>
	);
};

export default JumpablePagination;
