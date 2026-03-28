const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'components', 'sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let fp = path.join(dir, file);
  let c = fs.readFileSync(fp, 'utf8');

  // Skip files that were not broken or don't have the broken class
  if (!c.includes('<section className=\"w-full \">')) {
     continue;
  }

  // Get original file from HEAD
  let original = execSync(`git show HEAD:components/sections/${file}`).toString();
  let match = original.match(/<section[^>]*className=\"([^\"]*)\"/);
  
  if (match) {
    let oldClass = match[1];
    if (!oldClass.includes('w-full')) {
       oldClass = 'w-full ' + oldClass;
    }
    // Update the broken file
    c = c.replace(/<section className=\"w-full \">/g, `<section className=\"${oldClass}\">`);
    // I also need to apply the padding reduction from py-14/16/20/28 down to their correct values just to be sure
    c = c.replace(/py-20 lg:py-28/g, 'py-16 lg:py-24');
    c = c.replace(/py-12 lg:py-16/g, 'py-10 lg:py-14');
    fs.writeFileSync(fp, c, 'utf8');
    console.log('Restored classes for ' + file + ' -> ' + oldClass);
  }
}
