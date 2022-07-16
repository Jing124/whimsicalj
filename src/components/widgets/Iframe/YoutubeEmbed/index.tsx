import useMobileLayout from '../../../../models/util_models/ScreenUtilModel/hooks/useMobileLayout';

const YouTubeEmbed = ({ src, title }: { src: string; title: string }) => {
	const mobileLayout = useMobileLayout();

	return (
		<iframe
			width='100%'
			height={mobileLayout ? '280px' : '350px'}
			src={src}
			title={title}
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		></iframe>
	);
};

export default YouTubeEmbed;
