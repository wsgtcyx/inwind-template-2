
export const domain = 'TODO';
export const baseUrl = "https://" + domain + '/';

const baseSiteConfig = {
	name: 'TODO',
	description: 'TODO',
	url:  baseUrl,
	ogImage: '/logo.png',
	metadataBase: '/',
	keywords: [],
	authors: [
		{
			name: 'TODO',
			url: baseUrl,
		},
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TODO',
		description: 'TODO',
		images: [`${baseUrl}/og.png`],
		creator: 'TODO',
	},
};

export const SiteConfig = {
	en: {
		...baseSiteConfig,
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: baseSiteConfig.url,
			title: 'TODO',
			description: 'TODO',
			siteName: 'TODO',
		},
	},
};
