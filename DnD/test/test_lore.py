"""Static lore regression checks; run with python -m unittest discover -s DnD/test."""
import re
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[2]
LORE = ROOT / 'DnD'
PAGES = list(LORE.glob('*.html')) + list((LORE / 'archive/campaign2').glob('*.html'))
REFERENCES = [path for path in PAGES if not path.name.endswith('_sheet.html')]


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.body_classes = []
        self.ids = []
        self.nav_links = []
        self.styles = []
        self.in_lore_nav = False
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'body':
            self.body_classes = attrs.get('class', '').split()
        if tag == 'link' and attrs.get('rel') == 'stylesheet':
            self.styles.append(attrs.get('href', ''))
        if tag == 'nav' and 'lore-nav' in attrs.get('class', '').split():
            self.in_lore_nav = True
        if tag == 'a' and self.in_lore_nav:
            self.nav_links.append(attrs.get('href', ''))

    def handle_endtag(self, tag):
        if tag == 'nav':
            self.in_lore_nav = False


class LoreTests(unittest.TestCase):
    def test_brand_logos_resolve_on_home_and_all_lore_pages(self):
        for path in [ROOT / 'index.html', *REFERENCES]:
            with self.subTest(page=path.relative_to(ROOT).as_posix()):
                source = path.read_text(encoding='utf-8')
                images = re.findall(r'<img\b[^>]*class(?:Name)?="brand-logo"[^>]*>', source)
                self.assertEqual(len(images), 2 if path == ROOT / 'index.html' else 1)
                for image in images:
                    src = re.search(r'src="([^"]+)"', image).group(1)
                    target = path.parent / unquote(urlsplit(src).path)
                    self.assertTrue(target.is_file(), src)
                    self.assertIn(target.name, ['White Logo.png', 'Dark Logo.png'])
                    self.assertIn('alt=""', image)  # Adjacent brand text supplies the accessible name.

    def test_all_lore_pages_opt_in_and_have_valid_styles(self):
        self.assertEqual(len(REFERENCES), 14)
        for path in REFERENCES:
            with self.subTest(page=path.name):
                doc = Document(path.read_text(encoding='utf-8'))
                self.assertIn('lore-modern', doc.body_classes)
                styles = [style for style in doc.styles if 'dnd-lore.css' in style]
                self.assertEqual(len(styles), 1)
                self.assertTrue((path.parent / urlsplit(styles[0]).path).is_file())
                self.assertEqual(len(doc.ids), len(set(doc.ids)), 'Duplicate static IDs')

    def test_reference_navigation_destinations_exist(self):
        for path in REFERENCES:
            if path.name == 'index.html':
                continue  # Hub navigation is rendered by React.
            doc = Document(path.read_text(encoding='utf-8'))
            with self.subTest(page=path.name):
                self.assertEqual(len(doc.nav_links), 3)
                for href in doc.nav_links:
                    self.assertTrue((path.parent / unquote(urlsplit(href).path)).is_file(), href)

    def test_all_original_hub_destinations_preserved(self):
        hub = (LORE / 'index.html').read_text(encoding='utf-8')
        hrefs = re.findall(r"href: '([^']+)'", hub)
        self.assertEqual(len(hrefs), 18)
        self.assertEqual(len(hrefs), len(set(hrefs)))
        for href in hrefs:
            self.assertTrue((LORE / href).is_file(), href)
        for path in REFERENCES:
            if path.name != 'index.html':
                self.assertIn(path.relative_to(LORE).as_posix(), hrefs)
        for path in LORE.glob('*_sheet.html'):
            self.assertIn(path.name, hrefs)

    def test_character_sheets_do_not_load_lore_theme(self):
        for path in LORE.glob('*_sheet.html'):
            source = path.read_text(encoding='utf-8')
            self.assertNotIn('dnd-lore.css', source)
            self.assertNotIn('lore-modern', Document(source).body_classes)

    def test_hero_is_optimized_and_responsive_guards_exist(self):
        image = ROOT / 'assets/images/auroran-lore-hero.webp'
        self.assertTrue(image.is_file())
        self.assertLess(image.stat().st_size, 300_000)
        css = (ROOT / 'assets/css/dnd-lore.css').read_text(encoding='utf-8')
        self.assertIn('../images/auroran-lore-hero.webp', css)
        self.assertNotIn('6K.jpg', css)
        self.assertIn('prefers-reduced-motion', css)
        self.assertIn(':focus-visible', css)
        self.assertIn('.archive-content[hidden]', css)
        self.assertIn('minmax(min(100%, 440px)', css)

    def test_hub_accessible_search_and_archive_contract(self):
        hub = (LORE / 'index.html').read_text(encoding='utf-8')
        for required in ['htmlFor="lore-search"', 'role="status"', 'aria-expanded={expanded}',
                         'aria-controls="archive-content"', 'hidden={!expanded}',
                         'No folios found', 'Clear search', 'Skip to the library']:
            self.assertIn(required, hub)


if __name__ == '__main__':
    unittest.main()