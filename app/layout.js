import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { SiteConfig } from '@/lib/config/site';
import CustomHead from '@/components/common/head';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import { headers } from "next/headers"
import { defaultLocale } from "@/lib/i18n"

const jakarta = Plus_Jakarta_Sans({
	weight: ['500', '800'],
	subsets: ['latin'],
});

//@doc https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata() {
	//@see issue https://github.com/vercel/next.js/discussions/50189
	const headersList = headers()
	const lang = headersList.get('x-language-directory') ? headersList.get('x-language-directory') : defaultLocale

	return {
		title: SiteConfig[lang].name,
		description: SiteConfig[lang].description,
		keywords: SiteConfig[lang].keywords,
		authors: SiteConfig[lang].authors,
		creator: SiteConfig[lang].creator,
		icons: SiteConfig[lang].icons,
		metadataBase: SiteConfig[lang].metadataBase,
		openGraph: SiteConfig[lang].openGraph,
		twitter: SiteConfig[lang].twitter,
	}
}

export default async function RootLayout({ children }) {
	return (
		<html
			lang={defaultLocale}
			className={jakarta.className}
		>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
				{process.env.NODE_ENV === 'production' && (
					<>
						<CustomHead />
					</>
				)}
			</head>
			<body>
				<div className='w-full min-h-svh text-base-content bg-base-100'>
					<Navbar />
					<div className='px-5'>{children}</div>
					<Footer />
				</div>	
			</body>
		</html>
	);
}
