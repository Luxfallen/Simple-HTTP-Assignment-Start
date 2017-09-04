const http = require('http');
const htmlHandler = require('./htmlResponses.js'); // Ensure that the files referred to
const textHandler = require('./textResponses.js'); // are local, not imported
const jsonHandler = require('./jsonResponses.js');

const imageHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000; // env helps w/ Heroku
const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.getSpongegar(request, response);
      break;
    case '/':
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`); // The ${ ... } is used to refer to a 
// var, but you have to use ` and not '
