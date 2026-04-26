import fs from 'fs';

let content = fs.readFileSync('src/data/menu.json', 'utf8');

const replacements = [
  ['https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop', '/images/dishes/12.jpg'],
  ['https://images.unsplash.com/photo-1607301406259-dfb34844a70c?w=800&h=600&fit=crop', '/images/dishes/02.jpg'],
  ['https://images.unsplash.com/photo-1541544744-375cfed75400?w=800&h=600&fit=crop', '/images/dishes/01.jpg'],
  ['https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&h=600&fit=crop', '/images/dishes/03.jpg'],
  ['https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop', '/images/dishes/04.jpg'],
  ['https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop', '/images/dishes/03.jpg'],
  ['https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop', '/images/dishes/05.jpg'],
  ['https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop', '/images/dishes/06.jpg'],
  ['https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop', '/images/dishes/05.jpg'],
  ['https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop', '/images/dishes/07.jpg'],
  ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop', '/images/dishes/07.jpg'],
  ['https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&h=600&fit=crop', '/images/dishes/07.jpg'],
  ['https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop', '/images/dishes/08.jpg'],
  ['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop', '/images/dishes/09.jpg'],
  ['https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&h=600&fit=crop', '/images/dishes/10.jpg'],
  ['https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop', '/images/dishes/08.jpg'],
];

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

fs.writeFileSync('src/data/menu.json', content);
console.log('Updated menu.json');
