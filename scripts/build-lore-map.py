"""Build the decorative lore header from existing campaign artwork (requires Pillow)."""
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'DnD' / 'The Auroran Empire 6K.jpg'
TARGET = ROOT / 'assets' / 'images' / 'auroran-lore-hero.webp'


def main():
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(SOURCE) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        image.save(TARGET, 'WEBP', quality=78, method=6)
    print(f'{TARGET.name}: {TARGET.stat().st_size:,} bytes (source {SOURCE.stat().st_size:,})')


if __name__ == '__main__':
    main()