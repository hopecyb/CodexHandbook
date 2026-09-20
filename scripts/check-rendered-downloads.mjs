/** Check quoted download hrefs in generated HTML, after locale transforms. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function auditDownloads(directory) {
  const root = fs.realpathSync(directory);
  const failures = [];
  let checked = 0;
  const walk = (folder) => {
    for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
      const file = path.join(folder, entry.name);
      if (entry.isDirectory()) walk(file);
      else if (entry.isFile() && entry.name.endsWith('.html')) {
        const html = fs.readFileSync(file, 'utf8');
        // Astro emits quoted attributes; this intentionally checks rendered anchors,
        // not source Markdown, arbitrary HTML, external URLs or browser downloads.
        for (const match of html.matchAll(/<a\b[^>]*?\bhref\s*=\s*(["'])(.*?)\1/gi)) {
          const href = match[2];
          if (!href.startsWith('/') || href.startsWith('//') || !href.includes('/downloads/')) continue;
          checked++;
          const report = (reason) => failures.push({ file: path.relative(root, file), href, reason });
          if (!href.startsWith('/downloads/')) {
            report('Shared download has a locale or other unexpected prefix');
            continue;
          }
          let decoded;
          try { decoded = decodeURIComponent(href.split(/[?#]/, 1)[0]); }
          catch { report('Malformed URL encoding'); continue; }
          const target = path.resolve(root, '.' + decoded);
          const inside = (candidate) => candidate.startsWith(root + path.sep);
          if (!inside(target)) { report('Path escapes build directory'); continue; }
          if (!fs.existsSync(target)) { report('Download target does not exist'); continue; }
          const real = fs.realpathSync(target);
          if (!inside(real)) { report('Target symlink escapes build directory'); continue; }
          if (fs.statSync(real).isDirectory() && !fs.existsSync(path.join(real, 'index.html'))) {
            report('Directory has no index.html');
          }
        }
      }
    }
  };
  walk(root);
  if (!checked) failures.push({ reason: 'No download links found; verify the build output' });
  return { checked, failures };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = auditDownloads(process.argv[2] || 'dist');
    if (result.failures.length) {
      console.error(JSON.stringify(result, null, 2));
      process.exitCode = 1;
    } else console.log(`Checked ${result.checked} rendered download references; all targets exist without locale prefixes.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
