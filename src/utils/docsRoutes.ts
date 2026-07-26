import { readdir } from 'node:fs/promises';
import { join, normalize, relative, sep } from 'node:path';

export const docsRoot = join(process.cwd(), 'docs');

async function collectMarkdownPaths(directory: string, base = ''): Promise<string[]> {
	const entries = await readdir(directory, { withFileTypes: true });
	const paths: string[] = [];

	for (const entry of entries) {
		const relativePath = base ? `${base}/${entry.name}` : entry.name;
		const fullPath = join(directory, entry.name);

		if (entry.isDirectory()) {
			paths.push(...(await collectMarkdownPaths(fullPath, relativePath)));
		} else if (entry.isFile() && entry.name.endsWith('.md')) {
			paths.push(relativePath);
		}
	}

	return paths;
}

export async function getMarkdownPaths(): Promise<string[]> {
	return collectMarkdownPaths(docsRoot);
}

export function resolveDocsPath(path = '') {
	const filePath = normalize(join(docsRoot, path));
	const relativePath = relative(docsRoot, filePath);
	const isInsideDocs = relativePath && !relativePath.startsWith('..') && !relativePath.startsWith(sep);

	if (!isInsideDocs || !filePath.endsWith('.md')) {
		return null;
	}

	return filePath;
}
