const fs = require('fs');
const filePath = './temporary/fileA.txt';

fs.writeFileSync(filePath, 'This is the first line.\n');

fs.writeFileSync(filePath, 'This is the second line.\n', { flag: 'a' });
fs.writeFileSync(filePath, 'This is the third line.\n', { flag: 'a' });

const fileContents = fs.readFileSync(filePath, 'utf8');

console.log(fileContents)