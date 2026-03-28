const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'components', 'sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let fp = path.join(dir, file);
  let c = fs.readFileSync(fp, 'utf8');

  // Add w-full to all sections safely
  c = c.replace(/<section(.*?)className=\"([^\"]*?)\"/g, (match, beforeClass, classString) => {
    if (!classString.includes('w-full')) {
      return `<section${beforeClass}className=\"w-full ${classString}\"`;
    }
    return match;
  });

  fs.writeFileSync(fp, c, 'utf8');
  console.log('Fixed w-full in ' + file);
}
