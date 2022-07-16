import './index.scss';

import Content from '../Content';
import LinkText from '../widgets/Text/LinkText';
import uxuiProjects from './constants/uxuiProjects';

const UxUi = () => {
	return (
		<Content id='UxUi' title='UX/UI Infinity'>
			<div>
				<p>
					The Infinity is an application about fitness which is a
					project from my UX/UI class.
				</p>
				<p>
					In the user experience part, my group member and I obtained
					sufficient user information through the UX research process.
				</p>
				<p>
					In the user interface part, each team member completed the
					interface design according to the collected data. Below is
					the link, and pictures of my interface design.
				</p>
			</div>
			<div className='mt-8'>
				<LinkText
					className='adobe_xd_link !font-extrabold'
					href='https://xd.adobe.com/view/83c9f7a3-a4f2-479c-bd13-5af537a75861-d69a/'
				>
					Adobe XD File Link &gt;
				</LinkText>
			</div>
			<div className='my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
				{uxuiProjects.map((project, index) => {
					return <img src={project} key={index} />;
				})}
			</div>
		</Content>
	);
};

export default UxUi;
