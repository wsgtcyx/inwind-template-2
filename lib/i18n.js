import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const localeNames = {
	en: 'English',
};

export const defaultLocale = 'en';

export function getLocale(headers) {
	let languages = new Negotiator({ headers }).languages();
	return match(languages, locales, defaultLocale);
}

const dictionaries = {
	en: () => import('@/locales/en.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
	if (!Object.keys(dictionaries).includes(locale)) {
		locale = 'en';
	}

	return dictionaries[locale]();
};
