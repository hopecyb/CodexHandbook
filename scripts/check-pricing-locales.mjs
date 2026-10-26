#!/usr/bin/env node
// Pricing copy is intentionally complete: missing locales must not silently fall back.
import fs from 'node:fs';

const dataRoot = new URL('../src/data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dataRoot), 'utf8'));
const routes = read('standaloneRoutes.json')['chatgpt-pricing'];
const locales = routes.supportedLocales.map(locale => locale === 'root' ? 'zh-CN' : locale === 'zh-tw' ? 'zh-TW' : locale);
const issues = [];
function checkShape(source, value, path) {
	if (typeof source === 'string') {
		if (typeof value !== 'string' || !value.trim()) issues.push(`${path}: missing or empty string`);
		return;
	}
	if (Array.isArray(source)) {
		if (!Array.isArray(value) || value.length !== source.length) {
			issues.push(`${path}: expected ${source.length} items`);
			return;
		}
		source.forEach((item, index) => checkShape(item, value[index], `${path}[${index}]`));
		return;
	}
	if (!value || typeof value !== 'object' || Array.isArray(value)) {
		issues.push(`${path}: missing copy object`);
		return;
	}
	if (Object.keys(source).sort().join(',') !== Object.keys(value).sort().join(',')) issues.push(`${path}: copy keys differ`);
	for (const key of Object.keys(source)) checkShape(source[key], value[key], `${path}.${key}`);
}
for (const name of ['chatgptPlanCopy.json', 'chatgptSnapshotCopy.json']) {
	const catalog = read(name);
	if (Object.keys(catalog).sort().join(',') !== [...locales].sort().join(',')) issues.push(`${name}: locale coverage differs from routes`);
	for (const locale of locales) {
		checkShape(catalog.en, catalog[locale], `${name}/${locale}`);
		if (name === 'chatgptPlanCopy.json' && catalog[locale]) {
			if (JSON.stringify(catalog[locale].rows?.map(row => row[0])) !== JSON.stringify(catalog.en.rows.map(row => row[0]))) issues.push(`${name}/${locale}: plan names or order changed`);
			for (const field of ['officialNote', 'historyNote']) {
				const dates = text => text?.match(/\d{4}-\d{2}-\d{2}/g) ?? [];
				if (JSON.stringify(dates(catalog[locale][field])) !== JSON.stringify(dates(catalog.en[field]))) issues.push(`${name}/${locale}.${field}: source dates changed`);
			}
		}
	}
}
console.log(`Pricing locale parity: ${locales.length} locales × 2 catalogs; ${issues.length} issues.`);
for (const issue of issues) console.error(`  - ${issue}`);
if (issues.length) process.exitCode = 1;
