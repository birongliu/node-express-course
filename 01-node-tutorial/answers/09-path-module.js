const { join, sep, resolve, basename } = require('path');

console.log(join(__dirname, 'content', 'subfolder', 'test.txt'));
console.log(sep);
console.log(resolve(__dirname, 'content', 'subfolder', 'test.txt'));
console.log(basename(join(__dirname, 'content', 'subfolder', 'test.txt')))