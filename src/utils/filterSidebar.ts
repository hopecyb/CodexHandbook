import type { SidebarEntry } from '@astrojs/starlight/utils/routing/types';
import { type ModuleDir, hrefBelongsToModule } from './activeModule';

function groupContainsModule(
	entries: SidebarEntry[],
	module: ModuleDir,
	locale: string | undefined,
): boolean {
	for (const entry of entries) {
		if (entry.type === 'link' && hrefBelongsToModule(entry.href, module, locale)) return true;
		if (entry.type === 'group' && groupContainsModule(entry.entries, module, locale)) return true;
	}
	return false;
}

/** Show only the sidebar group that matches the active top-level module. */
export function filterSidebarByModule(
	sidebar: SidebarEntry[],
	module: ModuleDir | null,
	locale: string | undefined,
): SidebarEntry[] {
	if (!module) return sidebar;

	for (const entry of sidebar) {
		if (entry.type === 'group' && groupContainsModule(entry.entries, module, locale)) {
			return entry.entries;
		}
	}

	return sidebar;
}

function sidebarIdentity(entries: SidebarEntry[]): string {
	return entries
		.map((entry) =>
			entry.type === 'link' ? entry.href : `${entry.label}:${sidebarIdentity(entry.entries)}`,
		)
		.join('|');
}

/** Hash for sidebar state persistence — mirrors Starlight's getSidebarHash. */
export function getSidebarHash(sidebar: SidebarEntry[]): string {
	let hash = 0;
	const identity = sidebarIdentity(sidebar);
	for (let i = 0; i < identity.length; i++) {
		hash = (hash << 5) - hash + identity.charCodeAt(i);
	}
	return (hash >>> 0).toString(36).padStart(7, '0');
}
