import { GISCUS_CONFIG } from '$lib/app';
import { defaultLocale, loadTranslations, locales } from '$lib/translations';
import type { LayoutLoad } from './$types';

const giscusLocales = [
	'ar',
	'ca',
	'da',
	'de',
	'en',
	'eo',
	'es',
	'fa',
	'fr',
	'gr',
	'he',
	'hu',
	'id',
	'it',
	'ja',
	'kh',
	'ko',
	'nl',
	'pl',
	'pt',
	'ro',
	'ru',
	'th',
	'tr',
	'vi',
	'uk',
	'uz',
	'zh-CN',
	'zh-Hans',
	'zh-Hant',
	'zh-TW'
];

export const load: LayoutLoad = async ({ url }) => {
	const isServer = typeof window === 'undefined';
	const userLanguages = isServer ? [defaultLocale] : navigator.languages || [navigator.language];

	const userLocales = userLanguages.map((l) => l.toLowerCase());
	const supportedLocales = locales.get().map((l) => l.toLowerCase());

	const matchedLocale = userLocales.find((locale) => supportedLocales.includes(locale));
	const matchedgiscusLocale = userLanguages.find((locale) => giscusLocales.includes(locale));

	const locale = matchedLocale || defaultLocale;
	const giscusLocale = matchedgiscusLocale || GISCUS_CONFIG.defaultLocale;

	await loadTranslations(locale);

	return { url: url.pathname, locale, giscusLocale };
};

export const prerender = true;
