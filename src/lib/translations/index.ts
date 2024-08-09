import i18n, { type Config } from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en-US';

export const config: Config = {
	log: {
		level: dev ? 'warn' : 'error'
	},
	translations: {
		'en-US': { lang },
		'zh-TW': { lang }
	},
	loaders: [
		{
			locale: 'en-US',
			key: 'page',
			loader: async () => (await import('./en-US/page.json')).default
		},
		{
			locale: 'zh-TW',
			key: 'page',
			loader: async () => (await import('./zh-TW/page.json')).default
		}
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute
} = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
