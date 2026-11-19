#!/usr/bin/env node
import fs from 'node:fs';
import yaml from 'js-yaml';

const document = yaml.load(fs.readFileSync(new URL('../glossary/terms.yml', import.meta.url), 'utf8')) ?? {};
const terms = Array.isArray(document.terms) ? document.terms : [];
const issues = [];
const ids = new Set();

for (const [index, term] of terms.entries()) {
	const label = term?.id ?? `entry ${index + 1}`;
	if (!term?.id) issues.push(`${label}: missing id`);
	else if (ids.has(term.id)) issues.push(`${label}: duplicate id`);
	else ids.add(term.id);
	for (const locale of ['en', 'zh-CN', 'zh-TW']) {
		if (typeof term?.[locale] !== 'string' || term[locale].trim() === '') {
			issues.push(`${label}: missing ${locale}`);
		}
	}
}

if (terms.length === 0) issues.push('terms.yml contains no terms');
console.log(`Checked ${terms.length} glossary terms; ${issues.length} issue(s).`);
for (const issue of issues) console.log(`  - ${issue}`);
if (issues.length > 0) process.exitCode = 1;
