const YouTubeEmbed = ({ src, title }: { src: string; title: string }) => {
	return (
		<iframe
			width='100%'
			height='250px'
			src={src}
			title={title}
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		></iframe>
	);
};

export default YouTubeEmbed;
