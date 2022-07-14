class AssetUtilModel {
	static ICON_PATH = `${process.env.PUBLIC_URL}`;

	static LOGO_PATH({ size }: { size: 'desktop' | 'mobile' }) {
		if (size === 'desktop') {
			return `${AssetUtilModel.ICON_PATH}/logo.webp`;
		}
		if (size === 'mobile') {
			return `${AssetUtilModel.ICON_PATH}/logo.webp`;
		}
		return `${AssetUtilModel.ICON_PATH}/logo.webp`;
	}
}

export default AssetUtilModel;
