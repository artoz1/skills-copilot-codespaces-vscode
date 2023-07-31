// Create web server that can listen on port 3000, or any other port that is passed from command line.
// When a request comes in, read the file comment.json and write the contents to the response.
// If the file does not exist, return a 404 error to the browser.

const http = require('http');
const fs = require('fs');
const port = process.argv[2];

const server = http.createServer((request, response) => {
    fs.readFile('comment.json', (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('404 Not Found\n');
        } else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(data);
        }
        response.end();
    });
});

server.listen(port);
console.log(`Server running at http://localhost:${port}/`);