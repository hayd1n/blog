import type {
	AvailableLanguage,
	BooleanString,
	InputPosition,
	Loading,
	Mapping
} from '@giscus/svelte';

export const APP_NAME = "Hayden's Blog";
export const AUTHOR_NAME = 'Hayden Chang';
export const AUTHOR_EMAIL = 'm831718@gmail.com';
export const AUTHOR_GITHUB = 'https://github.com/hayd1n';
export const LICENSE = 'CC BY-NC-SA 4.0';
export const LICENSE_URL = 'https://creativecommons.org/licenses/by-nc-sa/4.0/';

export const GISCUS_CONFIG: GiscusConfig = {
	repo: 'hayd1n/blog',
	repoId: 'R_kgDOMhGbgg',
	category: 'Announcements',
	categoryId: 'DIC_kwDOMhGbgs4ChhLk',
	mapping: 'pathname',
	term: `Welcome to ${APP_NAME}`,
	reactionsEnabled: '1',
	emitMetadata: '0',
	inputPosition: 'bottom',
	loading: 'lazy',
	defaultLocale: 'en'
};

interface GiscusConfig {
	repo: `${string}/${string}`;
	repoId: string;
	category: string;
	categoryId: string;
	mapping: Mapping;
	term: string;
	reactionsEnabled: BooleanString;
	emitMetadata: BooleanString;
	inputPosition: InputPosition;
	loading: Loading;
	defaultLocale: AvailableLanguage;
}
