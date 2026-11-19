// @ts-check
import { pluginFramesTexts } from '@astrojs/starlight/expressive-code';

// Register only these locales: Starlight's default-language fallback would otherwise
// apply Chinese code labels to locales without their own Expressive Code strings.
pluginFramesTexts.overrideTexts("zh-CN", {
  "copyButtonCopied": "已复制",
  "copyButtonTooltip": "复制到剪贴板",
  "terminalWindowFallbackTitle": "终端窗口"
});
pluginFramesTexts.overrideTexts("zh-TW", {
  "copyButtonCopied": "已複製",
  "copyButtonTooltip": "複製到剪貼簿",
  "terminalWindowFallbackTitle": "終端視窗"
});
pluginFramesTexts.overrideTexts("th", {
  "copyButtonCopied": "คัดลอกแล้ว",
  "copyButtonTooltip": "คัดลอกไปยังคลิปบอร์ด",
  "terminalWindowFallbackTitle": "หน้าต่างเทอร์มินัล"
});
pluginFramesTexts.overrideTexts("ru", {
  "copyButtonCopied": "Скопировано",
  "copyButtonTooltip": "Копировать в буфер обмена",
  "terminalWindowFallbackTitle": "Окно терминала"
});

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
	'/pets/pets-list': '/pets/',
	'/en/pets/pets-list': '/en/pets/',
	'/zh-tw/pets/pets-list': '/zh-tw/pets/',
	'/roadmap': '/ai-roadmap',
	'/en/roadmap': '/en/ai-roadmap',
	'/zh-tw/roadmap': '/zh-tw/ai-roadmap',
	'/fr/roadmap': '/fr/ai-roadmap',
	'/ja/roadmap': '/ja/ai-roadmap',
	'/ko/roadmap': '/ko/ai-roadmap',
	'/es/roadmap': '/es/ai-roadmap',
	'/de/roadmap': '/de/ai-roadmap',
	'/pt/roadmap': '/pt/ai-roadmap',
	'/vi/roadmap': '/vi/ai-roadmap',
	'/th/roadmap': '/th/ai-roadmap',
	'/ru/roadmap': '/ru/ai-roadmap',
	...localizedRedirects({
		// 2026-10 dedupe: duplicate pages merged into the page that keeps the topic.
		'/guide/getting-started/choose-your-codex-client': '/guide/choose-your-client',
		'/cases/research-with-sources': '/cases/workflows/research-with-sources',
		'/guide/context-and-files': '/guide/context',
		'/guide/troubleshooting': '/guide/reference/troubleshooting',
		'/guide/verification': '/guide/quality',
	}),
};

/** Expand root-locale redirects to every locale prefix. */
function localizedRedirects(map) {
	const prefixes = ['', '/en', '/zh-tw', '/fr', '/ja', '/ko', '/es', '/de', '/pt', '/vi', '/th', '/ru'];
	return Object.fromEntries(
		prefixes.flatMap((prefix) =>
			Object.entries(map).map(([from, to]) => [`${prefix}${from}`, `${prefix}${to}`]),
		),
	);
}

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
	th: 'th',
	ru: 'ru',
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
				de: 'Codex-Handbuch',
				pt: 'Manual Codex',
				vi: 'Sổ tay Codex',
				th: 'คู่มือ Codex',
				ru: 'Руководство Codex',
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
					content: `
						(function () {
							const hostname = window.location.hostname;
							const isLocalHost =
								hostname === "localhost" ||
								hostname === "127.0.0.1" ||
								hostname === "0.0.0.0" ||
								hostname === "::1" ||
								hostname.endsWith(".local") ||
								hostname.startsWith("192.168.") ||
								hostname.startsWith("10.") ||
								/^172\\.(1[6-9]|2\\d|3[0-1])\\./.test(hostname);

							if (isLocalHost) return;

							const googleAnalyticsScript = document.createElement("script");
							googleAnalyticsScript.async = true;
							googleAnalyticsScript.src =
								"https://www.googletagmanager.com/gtag/js?id=G-KPP4Z7D6SZ";
							document.head.appendChild(googleAnalyticsScript);

							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-KPP4Z7D6SZ');

							(function(c,l,a,r,i,t,y){
								c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
								t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
								y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
							})(window, document, "clarity", "script", "xtawngb7re");
						})();
					`,
				},
				{
					tag: 'script',
					attrs: { type: 'module' },
					// zoomable-diagrams: open text-bearing diagrams full size in a dialog.
					content: `
						const selector = '.sl-markdown-content img[src^="/diagrams/"]';
						const dialog = document.createElement('dialog');
						dialog.className = 'diagram-zoom';
						dialog.addEventListener('click', () => dialog.close());
						const mark = () => document.querySelectorAll(selector).forEach((img) => {
							img.dataset.zoomable = '';
							img.tabIndex = 0;
							img.setAttribute('role', 'button');
						});
						const open = (img) => {
							dialog.replaceChildren(Object.assign(new Image(), { src: img.currentSrc || img.src, alt: img.alt }));
							if (!dialog.isConnected) document.body.append(dialog);
							dialog.showModal();
						};
						document.addEventListener('click', (event) => {
							const img = event.target.closest?.(selector);
							if (img) open(img);
						});
						document.addEventListener('keydown', (event) => {
							const img = event.target.closest?.(selector);
							if (img && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); open(img); }
						});
						mark();
					`,
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				Header: './src/components/Header.astro',
				Hero: './src/components/Hero.astro',
				Sidebar: './src/components/Sidebar.astro',
				PageFrame: './src/components/PageFrame.astro',
				PageSidebar: './src/components/PageSidebar.astro',
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
				th: { label: 'ไทย', lang: 'th' },
				ru: { label: 'Русский', lang: 'ru' },
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
					translations: {
						en: 'Codex Guide',
						'zh-tw': 'Codex 指南',
						fr: 'Guide Codex',
						ja: 'Codex ガイド',
						ko: 'Codex 가이드',
						es: 'Guía Codex',
						de: 'Codex-Leitfaden',
						pt: 'Guia Codex',
						vi: 'Hướng dẫn Codex',
						th: 'คู่มือ Codex',
						ru: 'Руководство Codex',
					},
					items: [{ autogenerate: { directory: 'guide', collapsed: true } }],
				},
				{
					label: '提示词',
					translations: {
						en: 'Prompts',
						'zh-tw': '提示詞',
						fr: 'Prompts',
						ja: 'プロンプト',
						ko: '프롬프트',
						es: 'Prompts',
						de: 'Prompts',
						pt: 'Prompts',
						vi: 'Prompts',
						th: 'พรอมต์',
						ru: 'Промпты',
					},
					items: [{ autogenerate: { directory: 'prompts', collapsed: true } }],
				},
				{
					label: 'Skills',
					translations: {
						en: 'Skills',
						'zh-tw': 'Skills',
						fr: 'Skills',
						ja: 'Skills',
						ko: 'Skills',
						es: 'Skills',
						de: 'Skills',
						pt: 'Skills',
						vi: 'Skills',
						th: 'Skills',
						ru: 'Skills',
					},
					items: [{ autogenerate: { directory: 'skills', collapsed: true } }],
				},
				{
					label: '实战案例',
					translations: {
						en: 'Cases',
						'zh-tw': '實戰案例',
						fr: 'Cas pratiques',
						ja: '実践ケース',
						ko: '실전 사례',
						es: 'Casos prácticos',
						de: 'Praxisbeispiele',
						pt: 'Casos práticos',
						vi: 'Tình huống thực tế',
						th: 'กรณีใช้งาน',
						ru: 'Практические примеры',
					},
					items: [{ autogenerate: { directory: 'cases', collapsed: true } }],
				},
				{
					label: 'AI 应用路线图',
					translations: {
						en: 'AI Roadmap',
						'zh-tw': 'AI 應用路線圖',
						fr: 'Feuille de route des usages de l’IA',
						ja: 'AI ロードマップ',
						ko: 'AI 활용 로드맵',
						es: 'Mapa de ruta de IA',
						de: 'Roadmap für KI-Anwendungen',
						pt: 'Roteiro de aplicações de IA',
						vi: 'Lộ trình ứng dụng AI',
						th: 'แผนงานการประยุกต์ใช้ AI',
						ru: 'Карта развития применения ИИ',
					},
					items: [{ autogenerate: { directory: 'ai-roadmap', collapsed: true } }],
				},
				{
					label: 'Codex 宠物',
					translations: {
						en: 'Codex Pets',
						'zh-tw': 'Codex 寵物',
						fr: 'Mascottes Codex',
						ja: 'Codex ペット',
						ko: 'Codex 펫',
						es: 'Mascotas de Codex',
						de: 'Codex-Haustiere',
						pt: 'Pets do Codex',
						vi: 'Thú cưng Codex',
						th: 'สัตว์เลี้ยง Codex',
						ru: 'Питомцы Codex',
					},
					items: [{ autogenerate: { directory: 'pets', collapsed: true } }],
				},
				{
					label: 'Codex主题皮肤',
					translations: {
						en: 'Codex Theme',
						'zh-tw': 'Codex 主題皮膚',
						fr: 'Thèmes Codex',
						ja: 'Codex テーマスキン',
						ko: 'Codex 테마 스킨',
						es: 'Temas de Codex',
						de: 'Codex-Themes',
						pt: 'Temas do Codex',
						vi: 'Giao diện Codex',
						th: 'ธีม Codex',
						ru: 'Темы Codex',
					},
					items: [{ autogenerate: { directory: 'theme', collapsed: true } }],
				},
			],
		}),
	],
});
