const fs = require('fs');
const filePath = './temporary/fileA.txt';

// Write the first line to the file
fs.writeFileSync(filePath, 'This is the first line.\n');

// Append additional lines to the file
fs.writeFileSync(filePath, 'This is the second line.\n', { flag: 'a' });
fs.writeFileSync(filePath, 'This is the third line.\n', { flag: 'a' });

// Read the contents of the file
const fileContents = fs.readFileSync(filePath, 'utf8');

// Log the contents to the console
console.log(fileContents);