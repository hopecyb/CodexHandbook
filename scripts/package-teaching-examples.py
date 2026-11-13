"""Build deterministic public downloads from reviewed teaching source packs."""
from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED
import shutil

ROOT = Path(__file__).resolve().parents[1]
PACKS = ['sales-weekly-report', 'source-backed-article', 'article-to-slides']
for name in PACKS:
    source = ROOT / 'examples/complete-workflows/creator' / name
    destination = ROOT / 'public/downloads' / name
    destination.mkdir(parents=True, exist_ok=True)
    with ZipFile(destination / f'{name}-1.0.0.zip', 'w', compression=ZIP_DEFLATED) as archive:
        for file in sorted(source.rglob('*')):
            if not file.is_file() or '__pycache__' in file.parts or file.suffix not in {'.md', '.csv', '.py', '.json', '.diff', '.pptx', '.pdf', '.png'}:
                continue
            item = ZipInfo(f'{name}/{file.relative_to(source).as_posix()}', (2026, 9, 18, 0, 0, 0))
            item.compress_type = ZIP_DEFLATED
            item.external_attr = 0o644 << 16
            archive.writestr(item, file.read_bytes())
            if name != 'sales-weekly-report':
                public_file = destination / file.relative_to(source)
                public_file.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(file, public_file)
    aliases = ['starter/sales.csv', 'solution/summary.md', 'validation/record.md'] if name == 'sales-weekly-report' else []
    for relative in aliases:
        shutil.copyfile(source / relative, destination / Path(relative).name)
    print(destination.relative_to(ROOT))

# Developer path handouts accompany the existing repository exercise.
# Only handouts are mirrored here; this directory is not advertised as a full code ZIP.
handouts = ROOT / 'examples/complete-workflows/developer/verified-bug-fix/path-materials'
handout_destination = ROOT / 'public/downloads/developer-path'
handout_destination.mkdir(parents=True, exist_ok=True)
for file in sorted(handouts.iterdir()):
    if file.is_file() and file.suffix in {'.md', '.json'}:
        shutil.copyfile(file, handout_destination / file.name)

# Skill packs are standalone, including their synthetic fixtures and validators.
for source in sorted((ROOT / 'examples/skills').glob('*')):
    if not (source / 'SKILL.md').is_file():
        continue
    destination = ROOT / 'public/downloads/skills' / source.name
    destination.mkdir(parents=True, exist_ok=True)
    with ZipFile(destination / f'{source.name}-1.0.0.zip', 'w', compression=ZIP_DEFLATED) as archive:
        for file in sorted(source.rglob('*')):
            if not file.is_file() or '__pycache__' in file.parts or file.suffix not in {'.md', '.py', '.json', '.csv', '.diff', '.html'}:
                continue
            relative = file.relative_to(source)
            item = ZipInfo(f'{source.name}/{relative.as_posix()}', (2026, 9, 18, 0, 0, 0))
            item.compress_type = ZIP_DEFLATED
            item.external_attr = 0o644 << 16
            archive.writestr(item, file.read_bytes())
            public_file = destination / relative
            public_file.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(file, public_file)

AUTHOR_ONLY_VALIDATION = {'first-project'}

# Standalone team, beginner and web exercises, with explicit validation boundaries.
standalone_sources = [source for category in ("team", "beginner", "web")
                      for source in (ROOT / "examples/complete-workflows" / category).glob("*")]
for source in sorted(standalone_sources):
    if not (source / 'README.md').is_file():
        continue
    destination = ROOT / 'public/downloads' / source.name
    destination.mkdir(parents=True, exist_ok=True)
    with ZipFile(destination / f'{source.name}-1.0.0.zip', 'w', compression=ZIP_DEFLATED) as archive:
        for file in sorted(source.rglob('*')):
            if not file.is_file() or '__pycache__' in file.parts or file.suffix not in {'.md', '.py', '.json', '.csv', '.html', '.diff', '.js', '.log', '.txt', '.sh'}:
                continue
            relative = file.relative_to(source)
            # Author-only validation material stays in examples/ and is not published.
            if source.name in AUTHOR_ONLY_VALIDATION and relative.parts[0] == 'validation':
                continue
            item = ZipInfo(f'{source.name}/{relative.as_posix()}', (2026, 9, 18, 0, 0, 0))
            item.compress_type = ZIP_DEFLATED
            item.external_attr = 0o644 << 16
            archive.writestr(item, file.read_bytes())
            public_file = destination / relative
            public_file.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(file, public_file)
