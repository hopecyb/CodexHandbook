#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.join(process.cwd(), 'src/content/docs');

const exists = (p) => fs.existsSync(p);
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, content) => {
	fs.mkdirSync(path.dirname(p), { recursive: true });
	fs.writeFileSync(p, content);
};
const remove = (p) => {
	if (!exists(p)) return;
	fs.rmSync(p, { recursive: true, force: true });
};

function mergeHub(hubPath, indexPath) {
	if (!exists(hubPath)) return;
	const hubBody = read(hubPath).replace(/^---[\s\S]*?---\s*/m, '').trim();
	if (!exists(indexPath)) {
		write(indexPath, read(hubPath));
		return;
	}
	const index = read(indexPath);
	const fm = index.match(/^---[\s\S]*?---/)?.[0] ?? '---\ntitle: Page\n---';
	const indexBody = index.replace(/^---[\s\S]*?---\s*/m, '').trim();
	write(indexPath, `${fm}\n\n${hubBody}\n\n${indexBody}\n`);
}

function moveInto(from, to) {
	if (!exists(from)) return;
	if (!exists(to)) {
		fs.mkdirSync(path.dirname(to), { recursive: true });
		fs.renameSync(from, to);
		return;
	}
	for (const name of fs.readdirSync(from)) {
		const src = path.join(from, name);
		const dest = path.join(to, name);
		if (exists(dest)) remove(dest);
		fs.renameSync(src, dest);
	}
	remove(from);
}

function replaceLinks(content) {
	const rules = [
		[/\/00-start-here\//g, '/guide/start-here/'],
		[/\/01-foundations\//g, '/guide/foundations/'],
		[/\/02-getting-started\//g, '/guide/getting-started/'],
		[/\/03-learning-paths\//g, '/guide/learning-paths/'],
		[/\/04-product-guides\/desktop-app\//g, '/guide/desktop-app/'],
		[/\/04-product-guides\/cli\//g, '/guide/cli/'],
		[/\/04-product-guides\/ide\//g, '/guide/ide/'],
		[/\/04-product-guides\/web-and-cloud\//g, '/guide/web-and-cloud/'],
		[/\/04-product-guides\/integrations\//g, '/guide/integrations/'],
		[/\/04-product-guides\/mobile-and-remote\//g, '/guide/mobile-and-remote/'],
		[/\/04-product-guides\//g, '/guide/'],
		[/\/05-core-capabilities\/prompting\//g, '/prompts/'],
		[/\/05-core-capabilities\/context\//g, '/guide/context/'],
		[/\/05-core-capabilities\/quality\//g, '/guide/quality/'],
		[/\/05-core-capabilities\/files-and-artifacts\//g, '/guide/files-and-artifacts/'],
		[/\/05-core-capabilities\/tools\//g, '/guide/tools/'],
		[/\/05-core-capabilities\/agent-work\//g, '/guide/agent-work/'],
		[/\/05-core-capabilities\//g, '/guide/'],
		[/\/06-customization\//g, '/guide/customization/'],
		[/\/07-extensions-automation\/skills\//g, '/skills/'],
		[/\/07-extensions-automation\/mcp\//g, '/skills/mcp/'],
		[/\/07-extensions-automation\/hooks\//g, '/skills/hooks/'],
		[/\/07-extensions-automation\/plugins\//g, '/skills/plugins/'],
		[/\/07-extensions-automation\/automations\//g, '/skills/automations/'],
		[/\/07-extensions-automation\//g, '/skills/'],
		[/\/08-developer-platform\//g, '/guide/developer-platform/'],
		[/\/09-workflows\//g, '/cases/workflows/'],
		[/\/10-use-cases\//g, '/cases/use-cases/'],
		[/\/11-team-enterprise\//g, '/guide/team-enterprise/'],
		[/\/12-reference\//g, '/guide/reference/'],
		[/\/13-contributing\//g, '/guide/contributing/'],
		[/\/prompts\/prompt-basics\//g, '/prompts/basics/'],
		[/\/prompts\/anatomy-of-a-good-task\//g, '/prompts/task-anatomy/'],
		[/\/prompts\/provide-goals-and-context\//g, '/prompts/goals-and-context/'],
		[/\/prompts\/define-constraints\//g, '/prompts/constraints-and-boundaries/'],
		[/\/prompts\/prompting-for-long-tasks\//g, '/prompts/long-running-tasks/'],
		[/\/prompts\/prompting-anti-patterns\//g, '/prompts/anti-patterns/'],
		[/\/skills\/skills-overview\//g, '/skills/overview/'],
		[/\/skills\/skill-security-and-versioning\//g, '/skills/security/'],
	];
	let out = content;
	for (const [from, to] of rules) out = out.replace(from, to);
	return out;
}

function walkReplace(target) {
	if (!exists(target)) return;
	const stat = fs.statSync(target);
	const files = stat.isDirectory()
		? fs
				.readdirSync(target, { withFileTypes: true })
				.flatMap((e) => {
					const full = path.join(target, e.name);
					if (e.isDirectory()) {
						if (e.name === 'node_modules' || e.name === '.astro') return [];
						return walkReplaceCollect(full);
					}
					return /\.(md|mdx)$/.test(e.name) ? [full] : [];
				})
		: [target];
	for (const file of files) {
		write(file, replaceLinks(read(file)));
	}
}

function walkReplaceCollect(dir) {
	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const full = path.join(dir, e.name);
		if (e.isDirectory()) {
			if (e.name === 'node_modules' || e.name === '.astro') return [];
			return walkReplaceCollect(full);
		}
		return /\.(md|mdx)$/.test(e.name) ? [full] : [];
	});
}

function migrateLocale(locale) {
	const root = locale ? path.join(docsRoot, locale) : docsRoot;
	const R = (...parts) => path.join(root, ...parts);

	const hubs = [
		['guide/start-here.md', '00-start-here/index.md'],
		['guide/desktop-app.md', '04-product-guides/desktop-app/index.md'],
		['guide/cli.md', '04-product-guides/cli/index.md'],
		['guide/ide.md', '04-product-guides/ide/index.md'],
		['guide/web-and-cloud.md', '04-product-guides/web-and-cloud/index.md'],
	];
	for (const [hub, index] of hubs) {
		mergeHub(R(hub), R(index));
		remove(R(hub));
	}

	const moves = [
		['00-start-here', 'guide/start-here'],
		['01-foundations', 'guide/foundations'],
		['02-getting-started', 'guide/getting-started'],
		['03-learning-paths', 'guide/learning-paths'],
		['04-product-guides/desktop-app', 'guide/desktop-app'],
		['04-product-guides/cli', 'guide/cli'],
		['04-product-guides/ide', 'guide/ide'],
		['04-product-guides/web-and-cloud', 'guide/web-and-cloud'],
		['04-product-guides/integrations', 'guide/integrations'],
		['04-product-guides/mobile-and-remote.md', 'guide/mobile-and-remote.md'],
		['05-core-capabilities/context', 'guide/context'],
		['05-core-capabilities/quality', 'guide/quality'],
		['05-core-capabilities/files-and-artifacts', 'guide/files-and-artifacts'],
		['05-core-capabilities/tools', 'guide/tools'],
		['05-core-capabilities/agent-work', 'guide/agent-work'],
		['06-customization', 'guide/customization'],
		['07-extensions-automation/mcp', 'skills/mcp'],
		['07-extensions-automation/hooks', 'skills/hooks'],
		['07-extensions-automation/plugins', 'skills/plugins'],
		['07-extensions-automation/automations', 'skills/automations'],
		['07-extensions-automation/capability-map.md', 'skills/capability-map.md'],
		['07-extensions-automation/choosing-an-extension-method.md', 'skills/choosing-an-extension-method.md'],
		['08-developer-platform', 'guide/developer-platform'],
		['09-workflows', 'cases/workflows'],
		['10-use-cases', 'cases/use-cases'],
		['11-team-enterprise', 'guide/team-enterprise'],
		['12-reference', 'guide/reference'],
		['13-contributing', 'guide/contributing'],
	];
	for (const [from, to] of moves) moveInto(R(from), R(to));

	// Drop duplicate pages already promoted to module root
	if (exists(R('guide/start-here/what-is-codex.md')) && exists(R('guide/what-is-codex.md'))) {
		remove(R('guide/start-here/what-is-codex.md'));
	}

	for (const dir of [
		'00-start-here',
		'01-foundations',
		'02-getting-started',
		'03-learning-paths',
		'04-product-guides',
		'05-core-capabilities',
		'06-customization',
		'07-extensions-automation',
		'08-developer-platform',
		'09-workflows',
		'10-use-cases',
		'11-team-enterprise',
		'12-reference',
		'13-contributing',
	]) {
		remove(R(dir));
	}
}

migrateLocale('');
migrateLocale('en');
walkReplace(docsRoot);
walkReplace(path.join(process.cwd(), 'src/content/docs/index.mdx'));
walkReplace(path.join(process.cwd(), 'src/content/docs/en/index.mdx'));

console.log('Migration complete.');
