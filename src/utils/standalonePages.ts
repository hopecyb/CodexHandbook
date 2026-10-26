import standaloneRoutes from '../data/standaloneRoutes.json';
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
		slug: standaloneRoutes['chatgpt-pricing'].slug,
		defaultLang: 'zh-CN',
		supportedLocales: standaloneRoutes['chatgpt-pricing'].supportedLocales as StandaloneLocaleCode[],
		label: {
			'zh-CN': 'ChatGPT 套餐与价格',
			'en': 'ChatGPT Plans & Prices',
			'zh-TW': 'ChatGPT 套餐與價格',
			'fr': 'Offres et prix ChatGPT',
			'ja': 'ChatGPT プランと料金',
			'ko': 'ChatGPT 요금제 및 가격',
			'es': 'Planes y precios de ChatGPT',
			'de': 'ChatGPT-Pläne und Preise',
			'pt': 'Planos e preços do ChatGPT',
			'vi': 'Gói và giá ChatGPT',
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
