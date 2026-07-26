/** Canonical locale order for language picker (aligned with README language links). */
export const SITE_LOCALE_ORDER = [
	'root',
	'en',
	'zh-tw',
	'fr',
	'ja',
	'ko',
	'es',
	'de',
	'pt',
	'vi',
] as const;

export type SiteLocaleCode = (typeof SITE_LOCALE_ORDER)[number];

export function orderedLocaleEntries(
	locales: Record<string, { label: string; lang?: string } | undefined>,
): Array<[string, { label: string; lang?: string }]> {
	const seen = new Set<string>();
	const ordered: Array<[string, { label: string; lang?: string }]> = [];

	for (const code of SITE_LOCALE_ORDER) {
		const locale = locales[code];
		if (!locale) continue;
		ordered.push([code, locale]);
		seen.add(code);
	}

	for (const [code, locale] of Object.entries(locales)) {
		if (!locale || seen.has(code)) continue;
		ordered.push([code, locale]);
	}

	return ordered;
}

/** Locale path prefixes used in content entry IDs (excludes `root`). */
export const CONTENT_LOCALE_PREFIXES = new Set(
	SITE_LOCALE_ORDER.filter((code) => code !== 'root'),
);
