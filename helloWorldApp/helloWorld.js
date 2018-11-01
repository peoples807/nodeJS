var http = require('http');

var server = http.createServer(function(req, resp){
    console.log("Request received! This is a request for "+req.url);
    resp.writeHead(200,{"Content-Type":"text/plain"});
    resp.end("What's up?");
});

server.listen(3000);
//whenever a request is received on port 3000, the createServer function will execute
//and the req and resp variables will be accordingly populated