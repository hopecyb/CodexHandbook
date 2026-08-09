import { createHash } from 'node:crypto';
import { dump, load } from 'js-yaml';
import OpenCC from 'opencc-js';

export const LOCALE_CODE = 'zh-tw';

export const CONTENT_LOCALE_PREFIXES = new Set([
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

const SKIP_CONVERT_KEYS = new Set([
	'locale',
	'source_locale',
	'source_revision',
	'translation_status',
	'translated_at',
	'reviewed_at',
	'icon',
	'variant',
	'template',
	'tag',
	'editUrl',
	'lastUpdated',
	'id',
	'official_basis',
	'reviewers',
	'status',
	'last_verified',
	'order',
]);

const LINK_KEYS = new Set(['link', 'href']);

export function createZhTwConverter() {
	return OpenCC.Converter({ from: 'cn', to: 'twp' });
}

export function sourceRevision(content) {
	return createHash('sha1').update(content).digest('hex').slice(0, 7);
}

export function shouldPrefixInternalPath(pathname) {
	if (!pathname.startsWith('/')) return false;
	if (pathname.startsWith('//')) return false;

	const segments = pathname.split('/').filter(Boolean);
	if (segments.length === 0) return false;
	if (CONTENT_LOCALE_PREFIXES.has(segments[0])) return false;
	if (pathname.startsWith('/_')) return false;
	if (pathname.startsWith('/favicon')) return false;
	if (pathname.startsWith('/icon')) return false;
	if (pathname.startsWith('/apple-touch')) return false;
	if (pathname.startsWith('/cover')) return false;
	if (pathname.startsWith('/brand')) return false;

	return true;
}

export function prefixInternalPath(pathname, locale = LOCALE_CODE) {
	if (!shouldPrefixInternalPath(pathname)) return pathname;
	return `/${locale}${pathname}`;
}

function protectSegments(text, patterns) {
	const placeholders = [];

	let protectedText = text;
	for (const pattern of patterns) {
		protectedText = protectedText.replace(pattern, (match) => {
			const token = `\u0000PH${placeholders.length}\u0000`;
			placeholders.push(match);
			return token;
		});
	}

	return { protectedText, placeholders };
}

function restoreSegments(text, placeholders) {
	return text.replace(/\u0000PH(\d+)\u0000/g, (_, index) => placeholders[Number(index)] ?? '');
}

export function convertTranslatableText(text, converter) {
	if (!text || !/[\u4e00-\u9fff]/.test(text)) return text;

	const { protectedText, placeholders } = protectSegments(text, [
		/```[\s\S]*?```/g,
		/~~~[\s\S]*?~~~/g,
		/`[^`\n]+`/g,
		/^import\s.+$/gm,
		/https?:\/\/[^\s"'`)>\]]+/g,
		/\/\/[^\n]*/g,
	]);

	const converted = converter(protectedText);
	return restoreSegments(converted, placeholders);
}

function convertFrontmatterValue(key, value, converter) {
	if (LINK_KEYS.has(key) && typeof value === 'string') {
		return prefixInternalPath(value);
	}

	if (SKIP_CONVERT_KEYS.has(key)) {
		return value;
	}

	if (typeof value === 'string') {
		return convertTranslatableText(value, converter);
	}

	if (Array.isArray(value)) {
		return value.map((item) => {
			if (item && typeof item === 'object' && !Array.isArray(item)) {
				return convertFrontmatterObject(item, converter);
			}
			if (typeof item === 'string') {
				return convertTranslatableText(item, converter);
			}
			return item;
		});
	}

	if (value && typeof value === 'object') {
		return convertFrontmatterObject(value, converter);
	}

	return value;
}

function convertFrontmatterObject(object, converter) {
	const result = {};
	for (const [key, value] of Object.entries(object)) {
		result[key] = convertFrontmatterValue(key, value, converter);
	}
	return result;
}

export function convertFrontmatter(frontmatter, converter, meta) {
	const converted = convertFrontmatterObject(frontmatter, converter);
	return {
		...converted,
		locale: 'zh-TW',
		source_locale: 'zh-CN',
		source_revision: meta.sourceRevision,
		translation_status: 'draft',
		translated_at: meta.translatedAt,
	};
}

function serializeFrontmatter(frontmatter) {
	return `---\n${dump(frontmatter, {
		indent: 2,
		lineWidth: -1,
		noRefs: true,
	}).trimEnd()}\n---`;
}

function localizeBodyLinks(body) {
	let localized = body.replace(/href="(\/[^"]*)"/g, (match, pathname) => {
		const next = prefixInternalPath(pathname);
		return next === pathname ? match : `href="${next}"`;
	});

	localized = localized.replace(/(^|\s)link:\s*(\/[^\s#]+)/gm, (match, prefix, pathname) => {
		const next = prefixInternalPath(pathname);
		return next === pathname ? match : `${prefix}link: ${next}`;
	});

	return localized;
}

function fixMdxImportDepth(body) {
	return body.replace(
		/from\s+['"]\.\.\/\.\.\/components\//g,
		"from '../../../components/",
	);
}

export function convertDocument(source, { converter, sourceRevision: revision, translatedAt }) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
	if (!match) {
		return convertTranslatableText(source, converter);
	}

	const frontmatter = load(match[1]);
	const body = source.slice(match[0].length);
	const convertedFrontmatter = convertFrontmatter(frontmatter ?? {}, converter, {
		sourceRevision: revision,
		translatedAt,
	});

	let convertedBody = convertTranslatableText(body, converter);
	convertedBody = localizeBodyLinks(convertedBody);
	convertedBody = fixMdxImportDepth(convertedBody);
	convertedBody = convertedBody
		.replaceAll('/diagrams/codex-capability-ladder-zh-cn.svg', '/diagrams/codex-capability-ladder-zh-tw.svg')
		.replaceAll('/diagrams/codex-capability-ladder-zh-cn.png', '/diagrams/codex-capability-ladder-zh-tw.png');

	return `${serializeFrontmatter(convertedFrontmatter)}\n${convertedBody}`;
}
