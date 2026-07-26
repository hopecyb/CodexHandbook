/** Locale path prefixes used in content entry IDs (excludes root). */
const CONTENT_LOCALE_PREFIXES = new Set([
	'en',
	'zh-tw',
	'fr',
	'ja',
	'ko',
	'es',
	'de',
	'pt',
	'vi',
]);

/**
 * Prefix absolute internal links with the content locale when rendering
 * localized docs (e.g. /guide/ → /en/guide/ for English pages).
 * Locale is inferred from the source file path under src/content/docs/<locale>/.
 */
export function rehypeLocaleInternalLinks() {
	return function transform(tree, file) {
		const filepath = String(file?.path || file?.history?.[0] || '');
		const normalized = filepath.replace(/\\/g, '/');
		const match = normalized.match(/\/content\/docs\/([^/]+)\//);
		const locale = match?.[1];
		if (!locale || !CONTENT_LOCALE_PREFIXES.has(locale)) return;

		const visit = (node) => {
			if (!node || typeof node !== 'object') return;

			if (node.type === 'element' && node.tagName === 'a' && typeof node.properties?.href === 'string') {
				const href = node.properties.href;
				if (
					href.startsWith('/') &&
					!href.startsWith('//') &&
					!href.startsWith(`/${locale}/`) &&
					href !== `/${locale}`
				) {
					if (
						!href.startsWith('/_') &&
						!href.startsWith('/favicon') &&
						!href.startsWith('/icon') &&
						!href.startsWith('/apple-touch') &&
						!href.startsWith('/cover')
					) {
						const first = href.split('/').filter(Boolean)[0];
						if (!first || !CONTENT_LOCALE_PREFIXES.has(first)) {
							node.properties.href = `/${locale}${href}`;
						}
					}
				}
			}

			if (Array.isArray(node.children)) {
				for (const child of node.children) visit(child);
			}
		};

		visit(tree);
	};
}
