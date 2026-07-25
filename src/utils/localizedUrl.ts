import config from 'virtual:starlight/user-config';
import type { AstroConfig } from 'astro';

function stripTrailingSlash(href: string) {
	if (href[href.length - 1] === '/') href = href.slice(0, -1);
	return href;
}

/** Get the equivalent of the passed URL for the passed locale. */
export function localizedUrl(
	url: URL,
	locale: string | undefined,
	trailingSlash: AstroConfig['trailingSlash'],
): URL {
	url = new URL(url);
	if (!config.locales) return url;
	if (locale === 'root') locale = '';
	const base = stripTrailingSlash(import.meta.env.BASE_URL);
	const hasBase = url.pathname.startsWith(base);
	if (hasBase) url.pathname = url.pathname.replace(base, '');
	const [_leadingSlash, baseSegment] = url.pathname.split('/');
	const htmlExt = '.html';
	const isRootHtml = baseSegment?.endsWith(htmlExt);
	const baseSlug = isRootHtml ? baseSegment?.slice(0, -1 * htmlExt.length) : baseSegment;
	if (baseSlug && baseSlug in config.locales) {
		if (locale) {
			url.pathname = url.pathname.replace(baseSlug, locale);
		} else if (isRootHtml) {
			url.pathname = '/index.html';
		} else {
			url.pathname = url.pathname.replace('/' + baseSlug, '');
		}
	} else if (locale) {
		if (baseSegment === 'index.html') {
			url.pathname = '/' + locale + '.html';
		} else {
			url.pathname = '/' + locale + url.pathname;
		}
	}
	if (hasBase) url.pathname = base + url.pathname;
	if (trailingSlash === 'never') url.pathname = stripTrailingSlash(url.pathname);
	return url;
}
