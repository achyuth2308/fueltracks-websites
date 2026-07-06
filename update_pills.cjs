const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const oldClass1 = /bg-sky-100 border border-sky-200 text-primary-700 text-xs font-semibold uppercase tracking-wider/g;
const oldClass2 = /bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold uppercase tracking-wider/g;
const oldClass3 = /text-xs font-semibold text-sky-600 uppercase tracking-widest/g;

const newClass = 'bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider';
const newClass3 = 'text-xs font-bold text-[#D9A94D] uppercase tracking-widest';

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(oldClass1, newClass)
    .replace(oldClass2, newClass)
    .replace(oldClass3, newClass3);
    
  // Also replace "India's toughest fleets." blue text in AboutSection
  newContent = newContent.replace(/text-primary-600([^>]*>India\\'s toughest fleets.)/g, 'bg-gradient-to-r from-[#D9A94D] to-[#DEA95A] bg-clip-text text-transparent');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log('Updated ' + file);
  }
}
