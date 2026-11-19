#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const examplesRoot = path.join(root, 'examples');
const index = fs.readFileSync(path.join(examplesRoot, 'README.md'), 'utf8');
const workflowsRoot = path.join(examplesRoot, 'complete-workflows');
const issues = [];

for (const audience of fs.readdirSync(workflowsRoot, { withFileTypes: true })) {
	if (!audience.isDirectory()) continue;
	const audienceRoot = path.join(workflowsRoot, audience.name);
	for (const workflow of fs.readdirSync(audienceRoot, { withFileTypes: true })) {
		if (!workflow.isDirectory()) continue;
		const readme = path.join(audienceRoot, workflow.name, 'README.md');
		if (!fs.existsSync(readme)) {
			issues.push(`${path.relative(root, readme)} is missing`);
			continue;
		}
		const link = path.relative(examplesRoot, readme).split(path.sep).join('/');
		if (!index.includes(link)) issues.push(`${link} is not listed in examples/README.md`);
	}
}

console.log(`Checked complete-workflow index; ${issues.length} issue(s).`);
for (const issue of issues) console.log(`  - ${issue}`);
if (issues.length > 0) process.exitCode = 1;
