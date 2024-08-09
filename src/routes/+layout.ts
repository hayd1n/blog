import type { LayoutLoad } from './$types';
import { defaultLocale, loadTranslations, locales } from '$lib/translations';

export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
	const isServer = typeof window === 'undefined';
	const userLanguages = isServer ? [defaultLocale] : navigator.languages || [navigator.language];

	const userLocales = userLanguages.map((l) => l.toLowerCase());
	const supportedLocales = locales.get().map((l) => l.toLowerCase());

	const matchedLocale = userLocales.find((locale) => supportedLocales.includes(locale));

	const locale = matchedLocale || defaultLocale;

	await loadTranslations(locale);

	return { url: url.pathname };
};
