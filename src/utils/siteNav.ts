export type SiteLang =
	| 'zh-CN'
	| 'en'
	| 'zh-TW'
	| 'fr'
	| 'ja'
	| 'ko'
	| 'es'
	| 'de'
	| 'pt'
	| 'vi';

export type LocalizedLabel = Partial<Record<SiteLang, string>> & {
	'zh-CN': string;
	en: string;
};

export type NavItem = {
	href: string;
	label: LocalizedLabel;
	prefix: string;
	visibleIn?: SiteLang[];
};

export type FooterLink = {
	href: string;
	label: LocalizedLabel;
	external?: boolean;
	global?: boolean;
	visibleIn?: SiteLang[];
};

export type FooterLinkGroup = {
	id: 'modules' | 'resources' | 'community' | 'trust';
	title: LocalizedLabel;
	links: FooterLink[];
};

const LOCALE_LANG: Record<string, SiteLang> = {
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

const SITE_LANGS: SiteLang[] = [
	'zh-CN',
	'en',
	'zh-TW',
	'fr',
	'ja',
	'ko',
	'es',
	'de',
	'pt',
	'vi',
];

function isSiteLang(value: string): value is SiteLang {
	return SITE_LANGS.includes(value as SiteLang);
}

export const mainNavItems: NavItem[] = [
	{
		href: '/guide/',
		label: {
			'zh-CN': 'Codex 指南',
			en: 'Codex Guide',
			'zh-TW': 'Codex 指南',
			fr: 'Guide Codex',
			ja: 'Codex ガイド',
			ko: 'Codex 가이드',
			es: 'Guía Codex',
			de: 'Codex Leitfaden',
			pt: 'Guia Codex',
			vi: 'Hướng dẫn Codex',
		},
		prefix: '/guide',
	},
	{
		href: '/prompts/',
		label: {
			'zh-CN': '提示词',
			en: 'Prompts',
			'zh-TW': '提示詞',
			fr: 'Prompts',
			ja: 'プロンプト',
			ko: '프롬프트',
			es: 'Prompts',
			de: 'Prompts',
			pt: 'Prompts',
			vi: 'Prompts',
		},
		prefix: '/prompts',
	},
	{
		href: '/skills/',
		label: {
			'zh-CN': 'Skills',
			en: 'Skills',
			'zh-TW': 'Skills',
			fr: 'Skills',
			ja: 'Skills',
			ko: 'Skills',
			es: 'Skills',
			de: 'Skills',
			pt: 'Skills',
			vi: 'Skills',
		},
		prefix: '/skills',
	},
	{
		href: '/cases/',
		label: {
			'zh-CN': '实战案例',
			en: 'Cases',
			'zh-TW': '實戰案例',
			fr: 'Cas pratiques',
			ja: '実践ケース',
			ko: '실전 사례',
			es: 'Casos prácticos',
			de: 'Praxis-Fälle',
			pt: 'Casos práticos',
			vi: 'Case thực tế',
		},
		prefix: '/cases',
	},
	{
		href: '/pets/',
		label: {
			'zh-CN': 'Codex 宠物',
			en: 'Codex Pets',
			'zh-TW': 'Codex 寵物',
			fr: 'Mascottes Codex',
			ja: 'Codex ペット',
			ko: 'Codex 펫',
			es: 'Mascotas de Codex',
			de: 'Codex-Haustiere',
			pt: 'Pets do Codex',
			vi: 'Thú cưng Codex',
		},
		prefix: '/pets',
	},
	{
		href: '/theme/',
		label: {
			'zh-CN': 'Codex主题皮肤',
			en: 'Codex Theme',
			'zh-TW': 'Codex 主題皮膚',
			fr: 'Thèmes Codex',
			ja: 'Codex テーマスキン',
			ko: 'Codex 테마 스킨',
			es: 'Temas de Codex',
			de: 'Codex-Theme-Skins',
			pt: 'Temas do Codex',
			vi: 'Giao diện Codex',
		},
		prefix: '/theme',
	},
];

export const footerBrand: {
	name: LocalizedLabel;
	tagline: LocalizedLabel;
} = {
	name: {
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
	tagline: {
		'zh-CN': '把任务说明、执行过程与验收结果沉淀成可复用的 Codex 方法。',
		en: 'Turn task briefs, execution notes, and review results into reusable Codex methods.',
		'zh-TW': '把任務說明、執行過程與驗收結果沉澱成可複用的 Codex 方法。',
		fr: 'Transformez briefs, notes d’exécution et résultats de revue en méthodes Codex réutilisables.',
		ja: 'タスクの説明、実行プロセス、検証結果を再利用可能な Codex の方法にまとめます。',
		ko: '작업 설명, 실행 과정, 검증 결과를 재사용 가능한 Codex 방법으로 정리합니다.',
		es: 'Convierte briefs, notas de ejecución y resultados de revisión en métodos Codex reutilizables.',
		de: 'Verwandeln Sie Aufgabenbeschreibungen, Ausführungsnotizen und Prüfergebnisse in wiederverwendbare Codex-Methoden.',
		pt: 'Transforme briefs, notas de execução e resultados de revisão em métodos Codex reutilizáveis.',
		vi: 'Biến mô tả tác vụ, quá trình thực hiện và kết quả nghiệm thu thành phương pháp Codex tái sử dụng được.',
	},
};

export const footerLinkGroups: FooterLinkGroup[] = [
	{
		id: 'modules',
		title: {
			'zh-CN': '模块',
			en: 'Modules',
			'zh-TW': '模組',
			fr: 'Modules',
			ja: 'モジュール',
			ko: '모듈',
			es: 'Módulos',
			de: 'Module',
			pt: 'Módulos',
			vi: 'Mô-đun',
		},
		links: mainNavItems.map(({ href, label, visibleIn }) => ({ href, label, visibleIn })),
	},
	{
		id: 'resources',
		title: {
			'zh-CN': '资源',
			en: 'Resources',
			'zh-TW': '資源',
			fr: 'Ressources',
			ja: 'リソース',
			ko: '리소스',
			es: 'Recursos',
			de: 'Ressourcen',
			pt: 'Recursos',
			vi: 'Tài nguyên',
		},
		links: [
			{
				href: 'https://github.com/hopecyb/CodexHandbook',
				label: {
					'zh-CN': 'GitHub 仓库',
					en: 'GitHub repository',
					'zh-TW': 'GitHub 儲存庫',
					fr: 'Dépôt GitHub',
					ja: 'GitHub リポジトリ',
					ko: 'GitHub 저장소',
					es: 'Repositorio de GitHub',
					de: 'GitHub-Repository',
					pt: 'Repositório no GitHub',
					vi: 'Kho GitHub',
				},
				external: true,
			},
			{
				href: 'https://developers.openai.com/codex',
				label: {
					'zh-CN': 'OpenAI Codex 官方文档',
					en: 'OpenAI Codex docs',
					'zh-TW': 'OpenAI Codex 官方文件',
					fr: 'Documentation officielle OpenAI Codex',
					ja: 'OpenAI Codex 公式ドキュメント',
					ko: 'OpenAI Codex 공식 문서',
					es: 'Documentación oficial de OpenAI Codex',
					de: 'Offizielle OpenAI-Codex-Dokumentation',
					pt: 'Documentação oficial do OpenAI Codex',
					vi: 'Tài liệu chính thức OpenAI Codex',
				},
				external: true,
			},
		],
	},
	{
		id: 'community',
		title: {
			'zh-CN': '社区',
			en: 'Community',
			'zh-TW': '社群',
			fr: 'Communauté',
			ja: 'コミュニティ',
			ko: '커뮤니티',
			es: 'Comunidad',
			de: 'Community',
			pt: 'Comunidade',
			vi: 'Cộng đồng',
		},
		links: [
			{
				href: '/guide/contributing/',
				label: {
					'zh-CN': '参与贡献',
					en: 'Contributing',
					'zh-TW': '參與貢獻',
					fr: 'Contribuer',
					ja: 'コントリビューション',
					ko: '기여하기',
					es: 'Contribuir',
					de: 'Mitwirken',
					pt: 'Contribuir',
					vi: 'Đóng góp',
				},
			},
			{
				href: '/guide/learning-paths/',
				label: {
					'zh-CN': '学习路径',
					en: 'Learning paths',
					'zh-TW': '學習路徑',
					fr: 'Parcours d’apprentissage',
					ja: '学習パス',
					ko: '학습 경로',
					es: 'Rutas de aprendizaje',
					de: 'Lernpfade',
					pt: 'Trilhas de aprendizado',
					vi: 'Lộ trình học',
				},
			},
			{
				href: '/guide/start-here/handbook-version-policy/',
				label: {
					'zh-CN': '版本与声明',
					en: 'Version policy',
					'zh-TW': '版本與聲明',
					fr: 'Politique de version',
					ja: 'バージョンポリシー',
					ko: '버전 정책',
					es: 'Política de versiones',
					de: 'Versionsrichtlinie',
					pt: 'Política de versão',
					vi: 'Chính sách phiên bản',
				},
			},
		],
	},
	{
		id: 'trust',
		title: {
			'zh-CN': '信任',
			en: 'Trust',
			'zh-TW': '信任',
			fr: 'Confiance',
			ja: '信頼',
			ko: '신뢰',
			es: 'Confianza',
			de: 'Vertrauen',
			pt: 'Confiança',
			vi: 'Tin cậy',
		},
		links: [
			{
				href: '/contact/',
				global: true,
				label: {
					'zh-CN': '联系',
					en: 'Contact',
					'zh-TW': '聯絡',
					fr: 'Contact',
					ja: '連絡先',
					ko: '연락처',
					es: 'Contacto',
					de: 'Kontakt',
					pt: 'Contato',
					vi: 'Liên hệ',
				},
			},
			{
				href: '/privacy-policy/',
				global: true,
				label: {
					'zh-CN': '隐私政策',
					en: 'Privacy policy',
					'zh-TW': '隱私政策',
					fr: 'Confidentialité',
					ja: 'プライバシー',
					ko: '개인정보',
					es: 'Privacidad',
					de: 'Datenschutz',
					pt: 'Privacidade',
					vi: 'Quyền riêng tư',
				},
			},
			{
				href: '/terms/',
				global: true,
				label: {
					'zh-CN': '使用条款',
					en: 'Terms',
					'zh-TW': '使用條款',
					fr: 'Conditions',
					ja: '利用規約',
					ko: '약관',
					es: 'Términos',
					de: 'Nutzungsbedingungen',
					pt: 'Termos',
					vi: 'Điều khoản',
				},
			},
		],
	},
];

export const uiLabels = {
	mainNav: {
		'zh-CN': '主导航',
		en: 'Main navigation',
		'zh-TW': '主導覽',
		fr: 'Navigation principale',
		ja: 'メインナビゲーション',
		ko: '주요 탐색',
		es: 'Navegación principal',
		de: 'Hauptnavigation',
		pt: 'Navegação principal',
		vi: 'Điều hướng chính',
	},
	siteFooter: {
		'zh-CN': '站点页脚',
		en: 'Site footer',
		'zh-TW': '網站頁尾',
		fr: 'Pied de page du site',
		ja: 'サイトフッター',
		ko: '사이트 푸터',
		es: 'Pie de página del sitio',
		de: 'Seitenfußzeile',
		pt: 'Rodapé do site',
		vi: 'Chân trang',
	},
};

export function isNavItemVisible(item: { visibleIn?: SiteLang[] }, lang: SiteLang): boolean {
	return !item.visibleIn || item.visibleIn.includes(lang);
}

export const footerLegal = {
	site: 'codexhandbook.com',
};

/** Resolve display language from Starlight locale (root → zh-CN). */
export function getSiteLang(locale: string | undefined, localeLang?: string): SiteLang {
	if (localeLang && isSiteLang(localeLang)) return localeLang;
	if (locale && LOCALE_LANG[locale]) return LOCALE_LANG[locale];
	return 'zh-CN';
}

export function pickLabel(label: LocalizedLabel, lang: SiteLang): string {
	return label[lang] ?? label.en ?? label['zh-CN'];
}
