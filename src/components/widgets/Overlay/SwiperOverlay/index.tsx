import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	useLockBodyScroll,
	useUnlockBodyScroll,
} from '../../../../states/lockBodyScroll/hooks';

import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '../../Button/IconButton/IconButton';
import { useEffect } from 'react';

const SwiperOverlay = ({
	open,
	onClose,
}: {
	open: boolean;
	onClose?: () => void;
}) => {
	const lockBodyScroll = useLockBodyScroll();
	const unlockBodyScroll = useUnlockBodyScroll();

	useEffect(() => {
		if (open) {
			lockBodyScroll();
		} else {
			unlockBodyScroll();
		}
	}, [open]);

	return open ? (
		<div className='widget SwiperOverlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-30 '>
			<div className='absolute top-1 right-1 z-40'>
				<IconButton onClick={onClose}>
					<ClearIcon />
				</IconButton>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				className='w-full h-full'
			>
				<SwiperSlide className='flex justify-center'>
					<img
						className='m-auto'
						src={`${process.env.PUBLIC_URL}/projects/graphic_design/converse/converse_01.webp`}
						alt='converse'
					/>
				</SwiperSlide>
				<SwiperSlide className='flex justify-center'>
					<img
						className='m-auto'
						src={`${process.env.PUBLIC_URL}/projects/graphic_design/converse/converse_02.webp`}
						alt='converse'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	) : (
		<></>
	);
};

export default SwiperOverlay;
