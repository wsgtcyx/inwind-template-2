import { SiteConfig } from "@/lib/config/site";
import { localeNames } from "@/lib/i18n";
export async function generateStaticParams() {
    return Object.keys(localeNames).map((lang) => ({
        lang: lang
    }));
}

export async function generateMetadata({ params: { lang } }) {
    const metadata = {
        title: SiteConfig[lang].name,
        description: SiteConfig[lang].description,
        alternates: {
            canonical: SiteConfig[lang].url,
            languages: {
                // ...Object.keys(localeNames).reduce((acc, locale) => ({
                //     ...acc,
                //     [locale === 'yue' ? 'zh-HK' : locale]: SiteConfig[locale].url,
                // }), {}),
                'x-default': SiteConfig['en'].url
            },
        },
    };
    return metadata;
}

export default async function Home({ params }) {

	return (
        <main className="max-w-7xl mx-auto">
            <h1>TODO</h1>
		</main>
	);
}
