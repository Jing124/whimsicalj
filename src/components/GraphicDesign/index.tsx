import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Content from '../Content';
import ProjectRow from '../gadgets/ProjectRow';
import ProjectRowDescription from '../gadgets/ProjectRow/ProjectRowDescription';
import ProjectRowItem from '../gadgets/ProjectRow/ProjectRowItem';
import ProjectRowTitle from '../gadgets/ProjectRow/ProjectRowTitle';
import graphicDesignProjects from './constants/graphicDesignProjects';

// import Swiper core and required modules

// Import Swiper styles

const GraphicDesign = () => {
	return (
		<Content id='GraphicDesign' title='Graphic Design'>
			{graphicDesignProjects.map((project, index) => {
				return (
					<ProjectRow key={index}>
						<ProjectRowItem>
							<ProjectRowTitle>{project.title}</ProjectRowTitle>
							<ProjectRowDescription>
								{project.description}
							</ProjectRowDescription>
						</ProjectRowItem>
						<ProjectRowItem>
							<Swiper
								// install Swiper modules
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
								onSwiper={(swiper) => console.log(swiper)}
								onSlideChange={() =>
									console.log('slide change')
								}
							>
								<SwiperSlide>
									<img
										src={`${process.env.PUBLIC_URL}/projects/graphic_design/converse/converse_01.webp`}
										alt='converse'
									/>
								</SwiperSlide>
								<SwiperSlide>
									<img
										src={`${process.env.PUBLIC_URL}/projects/graphic_design/converse/converse_02.webp`}
										alt='converse'
									/>
								</SwiperSlide>
							</Swiper>
						</ProjectRowItem>
					</ProjectRow>
				);
			})}
		</Content>
	);
};

export default GraphicDesign;
