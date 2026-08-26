#!/usr/bin/env node
/**
 * Generate locale-specific SVG diagrams from the zh-CN source diagrams and
 * reviewed label dictionaries under scripts/i18n/.
 *
 * Usage:
 *   node scripts/generate-localized-diagrams.mjs
 *   node scripts/generate-localized-diagrams.mjs --check
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createZhTwConverter, convertTranslatableText } from './lib/zh-tw-convert.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const diagramsRoot = path.join(root, 'public/diagrams');
const dictionariesRoot = path.join(__dirname, 'i18n');
const checkOnly = process.argv.includes('--check');
const localeIndex = process.argv.indexOf('--locale');

const diagramNames = [
	'task-execution-loop',
	'codex-client-selection',
	'codex-work-system-architecture',
	'extension-selection-map',
	'verified-bug-fix-workflow',
	'hook-lifecycle-events',
	'scheduled-task-safety-loop',
	'sandbox-approval-flow',
	'subagent-orchestration',
];

const locales = ['en', 'fr', 'de', 'es', 'pt', 'vi', 'ja', 'ko'];
const requestedLocales =
	localeIndex >= 0
		? process.argv[localeIndex + 1]?.split(',').map((locale) => locale.trim()).filter(Boolean)
		: [...locales, 'zh-tw'];
if (!requestedLocales || requestedLocales.length === 0) {
	throw new Error('Pass one or more comma-separated locales after --locale.');
}
for (const locale of requestedLocales) {
	if (![...locales, 'zh-tw'].includes(locale)) throw new Error(`Unsupported diagram locale: ${locale}`);
}
const fontStacks = {
	en: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	fr: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	de: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	es: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	pt: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	vi: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	ja: '-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", sans-serif',
	ko: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
	'zh-tw': '-apple-system, BlinkMacSystemFont, "PingFang TC", "Microsoft JhengHei", sans-serif',
};
const fontScales = {
	en: 0.84,
	fr: 0.78,
	de: 0.76,
	es: 0.8,
	pt: 0.8,
	vi: 0.82,
	ja: 0.88,
	ko: 0.86,
	'zh-tw': 1,
};
const diagramFontScales = {
	'scheduled-task-safety-loop': {
		en: 0.76,
		fr: 0.67,
		de: 0.65,
		es: 0.7,
		pt: 0.7,
		vi: 0.68,
		ja: 0.86,
		ko: 0.84,
		'zh-tw': 1,
	},
};

function readDictionary(locale) {
	const filePath = path.join(dictionariesRoot, `diagram-labels.${locale}.json`);
	if (!fs.existsSync(filePath)) {
		throw new Error(`Missing diagram dictionary: ${path.relative(root, filePath)}`);
	}
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function escapeXmlText(value) {
	return String(value)
		.replace(/&(?!(?:amp|lt|gt|quot|apos);)/g, '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;');
}

function translateXmlText(svg, locale, translate) {
	const missing = new Set();
	const output = svg.replace(
		/<(title|desc|text)(\s[^>]*)?>([^<]*)<\/\1>/g,
		(match, tag, attributes = '', content) => {
			if (!/[\u3400-\u9fff]/.test(content)) return match;
			const translated = translate(content);
			if (translated === undefined || translated === null || translated === '') missing.add(content);
			return `<${tag}${attributes}>${escapeXmlText(translated)}</${tag}>`;
		},
	);

	if (missing.size > 0) {
		throw new Error(
			`Missing ${locale} labels:\n${[...missing].map((label) => `  - ${label}`).join('\n')}`,
		);
	}
	return output;
}

function localizePresentation(svg, locale, diagramName) {
	const fontStack = fontStacks[locale];
	const scale = diagramFontScales[diagramName]?.[locale] ?? fontScales[locale];
	let output = svg.replace('<svg ', `<svg lang="${locale}" `);
	output = output.replace(/text \{ font-family: [^;]+;/, `text { font-family: ${fontStack};`);
	if (scale !== 1) {
		output = output.replace(/font-size: (\d+(?:\.\d+)?)px/g, (_, size) => {
			const scaled = Math.max(9, Math.round(Number(size) * scale * 10) / 10);
			return `font-size: ${scaled}px`;
		});
	}
	return output;
}

function writeIfChanged(filePath, content) {
	if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8') === content) return false;
	if (!checkOnly) fs.writeFileSync(filePath, content, 'utf8');
	return true;
}

const dictionaries = Object.fromEntries(
	requestedLocales
		.filter((locale) => locale !== 'zh-tw')
		.map((locale) => [locale, readDictionary(locale)]),
);
const zhTwConverter = createZhTwConverter();
let written = 0;
let unchanged = 0;

for (const diagramName of diagramNames) {
	const sourcePath = path.join(diagramsRoot, `${diagramName}-zh-cn.svg`);
	const source = fs.readFileSync(sourcePath, 'utf8');

	for (const locale of requestedLocales) {
		const translate =
			locale === 'zh-tw'
				? (text) => convertTranslatableText(text, zhTwConverter)
				: (text) => dictionaries[locale][text];
		let output = translateXmlText(source, locale, translate);
		output = localizePresentation(output, locale, diagramName);
		const targetPath = path.join(diagramsRoot, `${diagramName}-${locale}.svg`);
		if (writeIfChanged(targetPath, output)) written += 1;
		else unchanged += 1;
	}
}

console.log(`localized diagram generation ${checkOnly ? '(check)' : 'complete'}`);
console.log(`  source diagrams: ${diagramNames.length}`);
console.log(`  locales:         ${requestedLocales.join(', ')}`);
console.log(`  locale variants: ${diagramNames.length * requestedLocales.length}`);
console.log(`  written:         ${written}`);
console.log(`  unchanged:       ${unchanged}`);

if (checkOnly && written > 0) process.exitCode = 1;
