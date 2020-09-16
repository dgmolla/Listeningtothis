/* Load HTTP Library */
var http = require("http");

/* Create HTTP server for resposne handling */

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);
