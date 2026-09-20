/** @typedef {import('@astrojs/starlight/utils/routing/types').SidebarEntry} SidebarEntry */

const related = {
	beginner: ['/guide/getting-started/', '/guide/reference/troubleshooting/'],
	creator: ['/cases/write-an-article/', '/cases/create-a-slide-deck/', '/skills/examples/writing-skill/'],
	developer: ['/cases/understand-a-codebase/', '/cases/use-cases/software-development/fix-a-bug-with-verification/', '/cases/review-a-pr/'],
	team: ['/cases/use-cases/team-automation/issue-triage-suggestions/', '/cases/use-cases/team-automation/scheduled-link-check/', '/guide/quality/workflow-evaluation/'],
};

/** @param {SidebarEntry[]} entries @returns {Extract<SidebarEntry, {type:'link'}>[]} */
function links(entries) {
	return entries.flatMap((entry) => entry.type === 'group' ? links(entry.entries) : [entry]);
}

/**
 * Keep Chinese learning paths focused; reuse resolved Starlight links and current state.
 * Other languages and the reference manual retain the existing module sidebar.
 * @param {SidebarEntry[]} sidebar
 * @param {string} pathname
 * @param {string | undefined} locale
 * @returns {SidebarEntry[] | null}
 */
export function learningPathSidebar(sidebar, pathname, locale) {
	if (locale && locale !== 'root' && locale !== 'zh-tw') return null;
	const prefix = locale === 'zh-tw' ? '/zh-tw' : '';
	const base = `${prefix}/guide/learning-paths/`;
	if (!pathname.startsWith(base)) return null;
	const role = pathname.slice(base.length).split('/')[0];
	if (!Object.hasOwn(related, role)) return null;
	const roleBase = `${base}${role}/`;
	const all = links(sidebar);
	const normalize = (href) => `${href.replace(/\/$/, '')}/`;
	const currentPath = all.filter((entry) => normalize(entry.href).startsWith(roleBase))
		.sort((a, b) => {
			if (normalize(a.href) === roleBase) return -1;
			if (normalize(b.href) === roleBase) return 1;
			return a.href.localeCompare(b.href);
		})
		.map((entry) => {
			const step = normalize(entry.href).slice(roleBase.length).match(/^(\d+)-/);
			return step ? { ...entry, label: `${Number(step[1])}. ${entry.label}` } : entry;
		});
	if (!currentPath.length) return null;
	const overview = all.find((entry) => normalize(entry.href) === base);
	const resources = related[role].flatMap((href) => {
		const entry = all.find((item) => normalize(item.href) === prefix + href);
		return entry ? [entry] : [];
	});
	const traditional = locale === 'zh-tw';
	return [
		...(overview ? [{ ...overview, label: traditional ? '所有學習路徑' : '所有学习路径' }] : []),
		{ type: 'group', label: traditional ? '本路徑' : '本路径', entries: currentPath, collapsed: false, badge: undefined },
		...(resources.length ? [{ type: /** @type {const} */ ('group'), label: traditional ? '相關練習與幫助' : '相关练习与帮助', entries: resources, collapsed: false, badge: undefined }] : []),
	];
}
