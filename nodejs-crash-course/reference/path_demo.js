const path = require('path');

// Basename: Gets the base file Name
// console.log(path.basename(__filename));

// Directory Name
// console.log(path.dirname(__filename));

// File extension
// console.log(path.extname(__filename));

// Create path object
// console.log(path.parse(__filename).base);

// Concatenate paths
// ../text/hello.html
console.log(path.join(__dirname, 'test','hello.html'));
