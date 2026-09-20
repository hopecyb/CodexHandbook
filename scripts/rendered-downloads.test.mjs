import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { auditDownloads } from './check-rendered-downloads.mjs';

function fixture(t, html) {
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'rendered-download-'));
 t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 fs.mkdirSync(path.join(root,'downloads'));
 fs.writeFileSync(path.join(root,'downloads','pack.zip'),'fixture');
 fs.writeFileSync(path.join(root,'index.html'),html);
 return root;
}
test('shared file, encoded filename, queries and nested preview resolve',t=>{
 const r=fixture(t,`<a href="/downloads/pack.zip?download=1#top">ZIP</a><a href='/downloads/a%20b.md'>notes</a><a href="/downloads/preview/">Preview</a>`);
 fs.writeFileSync(path.join(r,'downloads','a b.md'),'notes');
 fs.mkdirSync(path.join(r,'downloads','preview'));
 fs.writeFileSync(path.join(r,'downloads','preview','index.html'),'<h1>Preview</h1>');
 assert.deepEqual(auditDownloads(r),{checked:3,failures:[]});
});
test('localized rendered URL fails even if original target exists',t=>{
 const r=fixture(t,'<a href="/zh-tw/downloads/pack.zip">ZIP</a>');
 assert.match(auditDownloads(r).failures[0].reason,/prefix/);
});
test('missing file, malformed encoding and empty directory are reported',t=>{
 const r=fixture(t,'<a href="/downloads/missing.zip">x</a><a href="/downloads/%ZZ">x</a><a href="/downloads/empty/">x</a>');
 fs.mkdirSync(path.join(r,'downloads','empty'));
 assert.equal(auditDownloads(r).failures.length,3);
});
test('escaping symlinks and paths are rejected',t=>{
 const r=fixture(t,'<a href="/downloads/out/file.zip">x</a><a href="/downloads/../../outside.zip">x</a>');
 const outside=fs.mkdtempSync(path.join(os.tmpdir(),'outside-download-'));
 t.after(()=>fs.rmSync(outside,{recursive:true,force:true}));
 fs.writeFileSync(path.join(outside,'file.zip'),'outside fixture');
 fs.symlinkSync(outside,path.join(r,'downloads','out'));
 const result=auditDownloads(r);
 assert.equal(result.failures.length,2);
 assert.match(result.failures[0].reason,/symlink/);
 assert.match(result.failures[1].reason,/escapes/);
});
test('empty build is not treated as passing',t=>{
 const r=fixture(t,'<a href="https://example.com/downloads/file.zip">external</a>');
 assert.equal(auditDownloads(r).checked,0);
 assert.equal(auditDownloads(r).failures.length,1);
});
