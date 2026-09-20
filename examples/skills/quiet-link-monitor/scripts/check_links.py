"""Read static HTML links without network access or source mutations."""
import argparse
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.links, self.ids, self.has_base = [], set(), False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'a' and attrs.get('name'):
            self.ids.add(attrs['name'])
        if tag == 'base' and 'href' in attrs:
            self.has_base = True
        key = 'href' if tag in {'a', 'link'} else 'src' if tag in {'img', 'script', 'iframe'} else None
        if key and key in attrs:
            self.links.append((self.getpos()[0], attrs[key]))


def audit(root):
    root = root.resolve()
    if not root.is_dir():
        raise ValueError('Site root is not a directory')
    documents = {}
    for path in sorted(root.rglob('*.html')):
        if not path.resolve().is_relative_to(root):
            raise ValueError('HTML symlink escapes site root')
        documents[path.resolve()] = Document(path.read_text(encoding='utf-8'))
    if not documents:
        raise ValueError('No HTML documents; build the site first')
    findings, unchecked, checked = [], [], 0
    for file, doc in documents.items():
        relative = file.relative_to(root).as_posix()
        if doc.has_base:
            raise ValueError(f'Unsupported base href in {relative}; resolve URLs before auditing')
        for line, url in doc.links:
            row = {'file': relative, 'line': line, 'url': url}
            parts = urlsplit(url)
            if parts.scheme or parts.netloc:
                unchecked.append(dict(row, reason='external-or-nonlocal-scheme'))
                continue
            checked += 1
            decoded = unquote(parts.path)
            if '\\' in decoded or '\x00' in decoded:
                findings.append(dict(row, reason='unsupported-path'))
                continue
            if not decoded:
                target = file
            else:
                target = ((root / decoded.lstrip('/')) if decoded.startswith('/') else file.parent / decoded).resolve()
            if not target.is_relative_to(root):
                findings.append(dict(row, reason='outside-site-root'))
                continue
            if target.is_dir():
                target = (target / 'index.html').resolve()
            if not target.is_relative_to(root):
                findings.append(dict(row, reason='outside-site-root'))
            elif not target.is_file():
                findings.append(dict(row, reason='missing-target'))
            elif parts.fragment:
                if target in documents:
                    if unquote(parts.fragment) not in documents[target].ids:
                        findings.append(dict(row, reason='missing-fragment'))
                else:
                    unchecked.append(dict(row, reason='fragment-in-non-html'))
    return {'scope': 'static-local-html', 'local_pass': not findings, 'html_files': len(documents),
            'checked_local_references': checked, 'findings': findings, 'unchecked': unchecked}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('site', type=Path)
    args = parser.parse_args()
    try:
        result = audit(args.site)
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return 0 if result['local_pass'] else 1
    except (OSError, UnicodeError, ValueError) as error:
        print(json.dumps({'scope': 'static-local-html', 'error': str(error)}, ensure_ascii=False))
        return 2


if __name__ == '__main__':
    sys.exit(main())
