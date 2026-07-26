// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { rehypeLocaleInternalLinks } from './src/utils/rehypeLocaleInternalLinks.mjs';

/** Legacy numbered section roots → four-module structure */
const legacyRedirects = {
	'/00-start-here': '/guide/start-here',
	'/01-foundations': '/guide/foundations',
	'/02-getting-started': '/guide/getting-started',
	'/03-learning-paths': '/guide/learning-paths',
	'/04-product-guides': '/guide',
	'/05-core-capabilities': '/guide',
	'/05-core-capabilities/prompting': '/prompts',
	'/06-customization': '/guide/customization',
	'/07-extensions-automation': '/skills',
	'/08-developer-platform': '/guide/developer-platform',
	'/09-workflows': '/cases/workflows',
	'/10-use-cases': '/cases/use-cases',
	'/11-team-enterprise': '/guide/team-enterprise',
	'/12-reference': '/guide/reference',
	'/13-contributing': '/guide/contributing',
	'/guide/what-is-codex': '/guide/start-here/what-is-codex',
};

const siteUrl = 'https://codexhandbook.com';
const legacyRedirectPaths = new Set(Object.keys(legacyRedirects));
const sitemapLocales = {
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

function mergeRel(value) {
	const tokens = Array.isArray(value)
		? value
		: String(value || '')
				.split(/\s+/)
				.filter(Boolean);
	return Array.from(new Set(tokens.concat('noopener', 'noreferrer'))).join(' ');
}

function isExternalUrl(value) {
	if (typeof value !== 'string') return false;

	try {
		const url = new URL(value, siteUrl);
		return (url.protocol === 'http:' || url.protocol === 'https:') && url.origin !== siteUrl;
	} catch {
		return false;
	}
}

function rehypeExternalLinks() {
	return function transform(tree) {
		const visit = (node) => {
			if (!node || typeof node !== 'object') return;

			if (node.type === 'element' && node.tagName === 'a' && isExternalUrl(node.properties?.href)) {
				node.properties = {
					...node.properties,
					target: '_blank',
					rel: mergeRel(node.properties?.rel),
				};
			}

			if (Array.isArray(node.children)) {
				for (const child of node.children) visit(child);
			}
		};

		visit(tree);
	};
}

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	redirects: legacyRedirects,
	markdown: {
		processor: unified({
			rehypePlugins: [rehypeLocaleInternalLinks, rehypeExternalLinks],
		}),
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'root',
				locales: sitemapLocales,
			},
			filter(page) {
				const pathname = new URL(page).pathname;
				const normalizedPathname = pathname === '/' ? pathname : pathname.replace(/\/$/, '');
				return !legacyRedirectPaths.has(normalizedPathname);
			},
		}),
		starlight({
			title: {
				'zh-CN': 'Codex 指南手册',
				en: 'Codex Handbook',
				'zh-TW': 'Codex 指南手冊',
				fr: 'Manuel Codex',
				ja: 'Codex ハンドブック',
				ko: 'Codex 핸드북',
				es: 'Manual de Codex',
				de: 'Codex Handbuch',
				pt: 'Manual Codex',
				vi: 'Sổ tay Codex',
			},
			logo: {
				src: './src/assets/brand/logo.png',
				alt: 'Codex 指南手册',
			},
			favicon: '/favicon.png',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/apple-touch-icon.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: '/favicon-32x32.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: '/favicon-16x16.png',
					},
				},
				{
					tag: 'script',
					attrs: {
						async: true,
						src: 'https://www.googletagmanager.com/gtag/js?id=G-KPP4Z7D6SZ',
					},
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-KPP4Z7D6SZ');
					`,
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				Header: './src/components/Header.astro',
				Hero: './src/components/Hero.astro',
				Sidebar: './src/components/Sidebar.astro',
				PageFrame: './src/components/PageFrame.astro',
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/Footer.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				LanguageSelect: './src/components/LanguageSelect.astro',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: { label: 'English', lang: 'en' },
				'zh-tw': { label: '繁體中文', lang: 'zh-TW' },
				fr: { label: 'Français', lang: 'fr' },
				ja: { label: '日本語', lang: 'ja' },
				ko: { label: '한국어', lang: 'ko' },
				es: { label: 'Español', lang: 'es' },
				de: { label: 'Deutsch', lang: 'de' },
				pt: { label: 'Português', lang: 'pt' },
				vi: { label: 'Tiếng Việt', lang: 'vi' },
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/hopecyb/CodexHandbook',
				},
			],
			sidebar: [
				{
					label: 'Codex 指南',
					translations: { en: 'Codex Guide' },
					items: [{ autogenerate: { directory: 'guide' } }],
				},
				{
					label: '提示词',
					translations: { en: 'Prompts' },
					items: [{ autogenerate: { directory: 'prompts' } }],
				},
				{
					label: 'Skills',
					translations: { en: 'Skills' },
					items: [{ autogenerate: { directory: 'skills' } }],
				},
				{
					label: '实战案例',
					translations: { en: 'Cases' },
					items: [{ autogenerate: { directory: 'cases' } }],
				},
			],
		}),
	],
});
