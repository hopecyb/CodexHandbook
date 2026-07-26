export type SiteLang = 'zh-CN' | 'en';

export type LocalizedLabel = {
	'zh-CN': string;
	en: string;
};

export type NavItem = {
	href: string;
	label: LocalizedLabel;
	prefix: string;
};

export type FooterLink = {
	href: string;
	label: LocalizedLabel;
	external?: boolean;
};

export type FooterLinkGroup = {
	id: 'modules' | 'resources' | 'community';
	title: LocalizedLabel;
	links: FooterLink[];
};

export const mainNavItems: NavItem[] = [
	{ href: '/guide/', label: { 'zh-CN': 'Codex 指南', en: 'Codex Guide' }, prefix: '/guide' },
	{ href: '/prompts/', label: { 'zh-CN': '提示词', en: 'Prompts' }, prefix: '/prompts' },
	{ href: '/skills/', label: { 'zh-CN': 'Skills', en: 'Skills' }, prefix: '/skills' },
	{ href: '/cases/', label: { 'zh-CN': '实战案例', en: 'Cases' }, prefix: '/cases' },
];

export const footerBrand: {
	name: LocalizedLabel;
	tagline: LocalizedLabel;
} = {
	name: { 'zh-CN': 'Codex 指南手册', en: 'Codex Handbook' },
	tagline: {
		'zh-CN': '把任务说明、执行过程与验收结果沉淀成可复用的 Codex 方法。',
		en: 'Turn task briefs, execution notes, and review results into reusable Codex methods.',
	},
};

export const footerLinkGroups: FooterLinkGroup[] = [
	{
		id: 'modules',
		title: { 'zh-CN': '模块', en: 'Modules' },
		links: mainNavItems.map(({ href, label }) => ({ href, label })),
	},
	{
		id: 'resources',
		title: { 'zh-CN': '资源', en: 'Resources' },
		links: [
			{
				href: 'https://github.com/hopecyb/CodexHandbook',
				label: { 'zh-CN': 'GitHub 仓库', en: 'GitHub repository' },
				external: true,
			},
			{
				href: 'https://developers.openai.com/codex',
				label: { 'zh-CN': 'OpenAI Codex 官方文档', en: 'OpenAI Codex docs' },
				external: true,
			},
		],
	},
	{
		id: 'community',
		title: { 'zh-CN': '社区', en: 'Community' },
		links: [
			{
				href: '/guide/contributing/',
				label: { 'zh-CN': '参与贡献', en: 'Contributing' },
			},
			{
				href: '/guide/learning-paths/',
				label: { 'zh-CN': '学习路径', en: 'Learning paths' },
			},
			{
				href: '/guide/start-here/handbook-version-policy/',
				label: { 'zh-CN': '版本与声明', en: 'Version policy' },
			},
		],
	},
];

export const footerLegal = {
	site: 'codexhandbook.com',
};

/** Resolve display language from Starlight locale (root → zh-CN). */
export function getSiteLang(locale: string | undefined, localeLang?: string): SiteLang {
	if (!locale || locale === 'root') return 'zh-CN';
	if (localeLang === 'zh-CN' || localeLang === 'en') return localeLang;
	if (locale === 'en') return 'en';
	return 'en';
}

export function pickLabel(label: LocalizedLabel, lang: SiteLang): string {
	return label[lang] ?? label.en;
}
