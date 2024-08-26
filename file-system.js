const fs = require('fs');

// Create and write to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and data written!');
});

// Read and log data from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data from file:', data);
});
