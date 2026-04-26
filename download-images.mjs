import fs from 'fs';
import path from 'path';

const images = [
  { url: 'https://picsum.photos/seed/bajbkt1/800/600.jpg', file: 'public/images/dishes/01.jpg' },
  { url: 'https://picsum.photos/seed/bajbkt2/800/600.jpg', file: 'public/images/dishes/02.jpg' },
  { url: 'https://picsum.photos/seed/bajpasta/800/600.jpg', file: 'public/images/dishes/03.jpg' },
  { url: 'https://picsum.photos/seed/bajchicken/800/600.jpg', file: 'public/images/dishes/04.jpg' },
  { url: 'https://picsum.photos/seed/bajrice/800/600.jpg', file: 'public/images/dishes/05.jpg' },
  { url: 'https://picsum.photos/seed/bajcurry/800/600.jpg', file: 'public/images/dishes/06.jpg' },
  { url: 'https://picsum.photos/seed/bajsnack/800/600.jpg', file: 'public/images/dishes/07.jpg' },
  { url: 'https://picsum.photos/seed/bajdrink/800/600.jpg', file: 'public/images/dishes/08.jpg' },
  { url: 'https://picsum.photos/seed/bajcoffee/800/600.jpg', file: 'public/images/dishes/09.jpg' },
  { url: 'https://picsum.photos/seed/bajtea/800/600.jpg', file: 'public/images/dishes/10.jpg' },
  { url: 'https://picsum.photos/seed/bajset/800/600.jpg', file: 'public/images/dishes/11.jpg' },
  { url: 'https://picsum.photos/seed/bajhero/800/600.jpg', file: 'public/images/dishes/12.jpg' },
  { url: 'https://picsum.photos/seed/bajmarket/800/600.jpg', file: 'public/images/market/01.jpg' },
  { url: 'https://picsum.photos/seed/bajinterior/800/600.jpg', file: 'public/images/interior/01.jpg' },
];

async function download(url, dest) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

for (const img of images) {
  const dir = path.dirname(img.file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  try {
    await download(img.url, img.file);
    console.log(`✓ ${img.file}`);
  } catch (err) {
    console.error(`✗ ${img.file}: ${err.message}`);
  }
}
