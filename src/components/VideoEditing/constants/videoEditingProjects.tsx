import { ReactNode } from 'react';
import YouTubeEmbed from '../../widgets/Iframe/YoutubeEmbed';

const videoEditingProjects: Array<{
	title: string;
	description: string;
	embed: ReactNode;
	src?: string;
	poster?: string;
}> = [
	{
		title: 'Public Service Announcement',
		description:
			'This project is about Public Service Announcement for Environmental Issues Caused by Plastics. The first half of the video was shot by me, the animation in the middle was hand-drew by me, and the last part was edited from other videos.',
		embed: (
			<YouTubeEmbed
				src='https://www.youtube.com/embed/Awc4bLtqTnI'
				title='PSA'
			/>
		),
	},
	{
		title: 'Personal Props',
		description:
			'This project mainly shows my hobbies through my props. Through the rhythmic music, to achieve the feeling of the combination of music and things.',
		embed: (
			<YouTubeEmbed
				src='https://www.youtube.com/embed/NX95y-N7jIk'
				title='Personal POP'
			/>
		),
	},
];

export default videoEditingProjects;
