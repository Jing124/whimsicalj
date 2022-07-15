import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useState } from 'react';

import Content from '../Content';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OutlinedButton from '../widgets/Button/OutlinedButton';
import ProjectRow from '../gadgets/ProjectRow';
import ProjectRowDescription from '../gadgets/ProjectRow/ProjectRowDescription';
import ProjectRowItem from '../gadgets/ProjectRow/ProjectRowItem';
import ProjectRowTitle from '../gadgets/ProjectRow/ProjectRowTitle';
import SwiperOverlay from '../widgets/Overlay/SwiperOverlay';
import threeDModelingProjects from './constants/threeDModelingProjects';

const ThreeDModeling = () => {
	const [overlayOpen, setOpenLayOpen] = useState(false);
	const [images, setImages] = useState<Array<string>>([]);

	const handleSwiperOnClick = useCallback((_images: Array<string>) => {
		setImages(_images);
		setOpenLayOpen(true);
	}, []);

	const handleSwiperOnClose = useCallback(() => {
		setOpenLayOpen(false);
	}, []);

	return (
		<>
			<Content id='ThreeDModeling' title='3D Modeling'>
				{threeDModelingProjects.map((project, index) => {
					return (
						<ProjectRow key={index}>
							<ProjectRowItem className='flex flex-col'>
								<ProjectRowTitle>
									{project.title}
								</ProjectRowTitle>
								<ProjectRowDescription className='flex-grow'>
									{project.description}
								</ProjectRowDescription>
								{project.linkTo && (
									<div>
										<OutlinedButton
											Icon={KeyboardArrowRightIcon}
											iconPosition='right'
											btnType='link'
											to={project.linkTo}
										>
											Detail
										</OutlinedButton>
									</div>
								)}
							</ProjectRowItem>
							<ProjectRowItem>
								{project.images ? (
									<Swiper
										modules={[
											Navigation,
											Pagination,
											Scrollbar,
											A11y,
										]}
										spaceBetween={50}
										slidesPerView={1}
										navigation
										pagination={{ clickable: true }}
										scrollbar={{ draggable: true }}
										className='cursor-pointer'
									>
										{project.images.map((img, index) => {
											return (
												<SwiperSlide
													key={index}
													onClick={() => {
														handleSwiperOnClick(
															project.images
														);
													}}
												>
													<img
														src={img}
														alt={project.title}
													/>
												</SwiperSlide>
											);
										})}
									</Swiper>
								) : (
									<video controls poster={project.poster}>
										<source
											src={project.src}
											type='video/mp4'
										/>
										Your browser does not support the video
										tag.
									</video>
								)}
							</ProjectRowItem>
						</ProjectRow>
					);
				})}
			</Content>
			<SwiperOverlay
				open={overlayOpen}
				onClose={handleSwiperOnClose}
				images={images}
			/>
		</>
	);
};

export default ThreeDModeling;
