const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

const goldClasses = 'bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D]';

const replacements = [
  { old: /bg-sky-50\/50 border border-sky-100\/80 text-primary-600/g, new: goldClasses },
  { old: /bg-surface-100\/50 border border-surface-200 text-surface-600/g, new: goldClasses },
  { old: /bg-surface-100 text-surface-600/g, new: goldClasses },
  { old: /bg-sky-100 border border-sky-200 text-accent-700/g, new: goldClasses },
  { old: /bg-white\/5 border border-white\/10 text-sky-300/g, new: goldClasses },
  { old: /bg-white\/10 border border-white\/10 text-surface-300/g, new: goldClasses },
  { old: /bg-white\/10 border border-white\/10 text-accent-300/g, new: goldClasses },
  { old: /bg-primary-100\/50 border border-primary-200 text-primary-700/g, new: goldClasses }
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const r of replacements) {
    content = content.replace(r.old, r.new);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
