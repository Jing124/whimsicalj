import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useState } from 'react';

import Content from '../Content';
import ProjectRow from '../gadgets/ProjectRow';
import ProjectRowDescription from '../gadgets/ProjectRow/ProjectRowDescription';
import ProjectRowItem from '../gadgets/ProjectRow/ProjectRowItem';
import ProjectRowTitle from '../gadgets/ProjectRow/ProjectRowTitle';
import SwiperOverlay from '../widgets/Overlay/SwiperOverlay';
import graphicDesignProjects from './constants/graphicDesignProjects';

const GraphicDesign = () => {
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
			<Content id='GraphicDesign' title='Graphic Design'>
				{graphicDesignProjects.map((project, index) => {
					return (
						<ProjectRow key={index}>
							<ProjectRowItem>
								<ProjectRowTitle>
									{project.title}
								</ProjectRowTitle>
								<ProjectRowDescription>
									{project.description}
								</ProjectRowDescription>
							</ProjectRowItem>
							<ProjectRowItem>
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
									{(project.banners ?? project.images).map(
										(img, index) => {
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
										}
									)}
								</Swiper>
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

export default GraphicDesign;
