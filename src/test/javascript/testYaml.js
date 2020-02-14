const yaml = require('js-yaml');
const fs   = require('fs');

try {
  const doc = yaml.safeLoadAll(fs.readFileSync('src/test/resources/example.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}