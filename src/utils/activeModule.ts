export const MODULE_DIRS = ['guide', 'prompts', 'skills', 'cases', 'pets', 'theme', 'chatgpt-pricing'] as const;
export type ModuleDir = (typeof MODULE_DIRS)[number];

export function stripLocalePrefix(pathname: string, locale: string | undefined): string {
	if (!locale || locale === 'root') return pathname;
	const prefix = `/${locale}`;
	if (pathname === prefix || pathname === `${prefix}/`) return '/';
	if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
	return pathname;
}

export function getActiveModule(pathname: string, locale: string | undefined): ModuleDir | null {
	const path = stripLocalePrefix(pathname, locale);
	for (const mod of MODULE_DIRS) {
		if (path === `/${mod}` || path === `/${mod}/` || path.startsWith(`/${mod}/`)) {
			return mod;
		}
	}
	return null;
}

export function hrefBelongsToModule(href: string, module: ModuleDir, locale: string | undefined): boolean {
	const path = stripLocalePrefix(href, locale);
	return path === `/${module}` || path === `/${module}/` || path.startsWith(`/${module}/`);
}
