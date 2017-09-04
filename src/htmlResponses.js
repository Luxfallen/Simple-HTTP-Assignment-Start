const fs = require('fs'); // file system module

// readFileSync loads files synchronously (thread-blocking), but this is during startup
// so it's acceptable. __dirname refers to the name of the current directory (TY node!)
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(index);
  response.end();
};
const getPage2 = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(page2);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
