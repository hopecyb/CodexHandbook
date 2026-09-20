"""Validate the delivered reference files. Rendering still needs human review."""
import hashlib
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'validation/manifest.json').read_text())
for name, digest in manifest['sha256'].items():
    assert hashlib.sha256((ROOT / name).read_bytes()).hexdigest() == digest, f'File changed: {name}'
ns = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main', 'p': 'http://schemas.openxmlformats.org/presentationml/2006/main'}
with ZipFile(ROOT / 'solution/source-backed-writing.pptx') as archive:
    assert archive.testzip() is None
    slides = [name for name in archive.namelist() if re.fullmatch(r'ppt/slides/slide\d+\.xml', name)]
    assert len(slides) == manifest['slide_count'] == 8
    for number in range(1, 9):
        tree = ET.fromstring(archive.read(f'ppt/slides/slide{number}.xml'))
        text = [node.text or '' for node in tree.findall('.//a:t', ns)]
        assert len(text) == manifest['native_text_runs'][number - 1]
        assert not tree.findall('.//p:pic', ns), 'Reference deck must not flatten text into pictures'
        notes = ET.fromstring(archive.read(f'ppt/notesSlides/notesSlide{number}.xml'))
        assert '合成' in ''.join(notes.itertext())
        assert (ROOT / f'previews/slide-{number:02}.png').is_file()
        if number == 6:
            joined = ''.join(text)
            assert '默认关闭' in joined and '默认开启' in joined and '尚未确认' in joined
print('PASS: eight slides, native text, notes, previews and file hashes. Visual and semantic review remain required.')
