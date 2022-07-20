import './index.scss';

import Content from '../Content';
import ExternalLink from '../widgets/Link/ExternalLink/ExternalLink';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Resume = () => {
	return (
		<Content
			title={
				<div className='flex flex-wrap gap-5 items-center'>
					<div>Resume</div>
					<ExternalLink
						href={`${process.env.PUBLIC_URL}/resume/Resume_Jing_Wang.pdf`}
					>
						<OpenInNewIcon fontSize='large' />
					</ExternalLink>
				</div>
			}
			titleBorderBottom
		>
			<div className='flex flex-col justify-center'>
				<div>
					<img
						className='m-auto'
						src={`${process.env.PUBLIC_URL}/resume/page_01.jpg`}
						alt='resume-page-1'
					/>
				</div>
				<div>
					<img
						className='m-auto'
						src={`${process.env.PUBLIC_URL}/resume/page_02.jpg`}
						alt='resume-page-2'
					/>
				</div>
			</div>
		</Content>
	);
};

export default Resume;
