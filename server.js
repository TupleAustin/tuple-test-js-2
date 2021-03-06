

// You may totally change any code in here.
// You may use any libraries you want.


var fs = require('fs');
var http = require('http');

var seed = require('./seed');
var db = require('./fake_db');

var indexFileLocation = './index.html';

http.createServer(function(req, res) {
  if (req.method == 'GET' && req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(indexFileLocation).pipe(res);
  } else if (req.method == 'GET' && req.url == '/todos') {
    // A sample call to the DB, should give you an idea of pattern
    db.list(10, function(err, list) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(list));
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
