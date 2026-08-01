import type { LocalizedLabel, SiteLang } from './siteNav';

export type StandalonePageId = 'chatgpt-pricing';
export type StandaloneLocaleCode = 'root' | 'en' | 'zh-tw' | 'fr' | 'ja' | 'ko' | 'es' | 'de' | 'pt' | 'vi';

export type StandalonePage = {
	id: StandalonePageId;
	slug: string;
	label: LocalizedLabel;
	defaultLang: SiteLang;
	supportedLocales: StandaloneLocaleCode[];
};

export const standaloneLocaleToLang: Record<StandaloneLocaleCode, SiteLang> = {
	root: 'zh-CN',
	en: 'en',
	'zh-tw': 'zh-TW',
	fr: 'fr',
	ja: 'ja',
	ko: 'ko',
	es: 'es',
	de: 'de',
	pt: 'pt',
	vi: 'vi',
};

export const standaloneLangToLocale: Record<SiteLang, StandaloneLocaleCode> = {
	'zh-CN': 'root',
	en: 'en',
	'zh-TW': 'zh-tw',
	fr: 'fr',
	ja: 'ja',
	ko: 'ko',
	es: 'es',
	de: 'de',
	pt: 'pt',
	vi: 'vi',
};

export const standalonePages: Record<StandalonePageId, StandalonePage> = {
	'chatgpt-pricing': {
		id: 'chatgpt-pricing',
		slug: 'chatgpt-pricing',
		defaultLang: 'zh-CN',
		supportedLocales: ['root', 'en', 'zh-tw', 'fr', 'ja', 'ko', 'es', 'de', 'pt', 'vi'],
		label: {
			'zh-CN': 'ChatGPT全球价格',
			en: 'ChatGPT Global Prices',
			'zh-TW': 'ChatGPT全球價格',
			fr: 'Prix mondiaux ChatGPT',
			ja: 'ChatGPT 世界価格',
			ko: 'ChatGPT 글로벌 가격',
			es: 'Precios globales ChatGPT',
			de: 'ChatGPT Weltpreise',
			pt: 'Preços globais ChatGPT',
			vi: 'Giá ChatGPT toàn cầu',
		},
	},
};

export function normalizeStandaloneLocale(locale: string | undefined): StandaloneLocaleCode {
	if (!locale || locale === 'root') return 'root';
	return locale in standaloneLocaleToLang ? (locale as StandaloneLocaleCode) : 'root';
}

export function standaloneHref(pageId: StandalonePageId, locale: string | undefined): string {
	const page = standalonePages[pageId];
	const normalizedLocale = normalizeStandaloneLocale(locale);
	const targetLocale = page.supportedLocales.includes(normalizedLocale) ? normalizedLocale : 'root';
	const prefix = targetLocale === 'root' ? '' : `/${targetLocale}`;
	return `${prefix}/${page.slug}/`;
}

export function standaloneHrefForLang(pageId: StandalonePageId, lang: SiteLang): string {
	return standaloneHref(pageId, standaloneLangToLocale[lang]);
}

export function standaloneLangFromLocale(locale: string | undefined): SiteLang {
	return standaloneLocaleToLang[normalizeStandaloneLocale(locale)];
}

export function standaloneLocaleFromLang(lang: SiteLang): StandaloneLocaleCode {
	return standaloneLangToLocale[lang];
}
