<<<<<<< HEAD
// just curious, will this be using express?
// will this be MEAN?
// is this standalone Node-centric Middleware?

// use passport for Auth
=======

>>>>>>> 4d4d5c22d9642d7754d3d1ad310c5248df909ace

// You may totally change any code in here.
// You may use any libraries you want.


var fs = require('fs');
var http = require('http');
<<<<<<< HEAD
var http = require('https');  // please sudo npm install https --save
var passport = require('passport'); // please sudo npm install passport --save

var seed = require('./seed');
var db = require('./fake_db');  // todo: will this use mongodb? seprate the layers to have a data layer with schemas and require('mongoose') / npm install mongoose --save

var indexFileLocation = './index.html';

//todo: define what environment to run in, defuault to DEV
// environment configuration can determine the port config, whether it is local,DEV, or PROD (8000 vs 80, 8443 vs 443)

console.log('Starting Server...');

http.createServer(function(req, res) {
  //export this out to a module called startServer();
  //startServer();

=======

var seed = require('./seed');
var db = require('./fake_db');

var indexFileLocation = './index.html';

http.createServer(function(req, res) {
>>>>>>> 4d4d5c22d9642d7754d3d1ad310c5248df909ace
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
<<<<<<< HEAD
}).listen(8000);  // todo: replace 8000 with config.port.  move port config to config.js

//  HTTPS - TLS/SSL
//https.createServer(function(req, res) {
  // todo: DRY - move into a seperate function
  // startServer();

//}).listen(8443);  // // todo: replace 8443 with config.port.  move port config to config.js


=======
}).listen(8000);
>>>>>>> 4d4d5c22d9642d7754d3d1ad310c5248df909ace

console.log('Server running at http://127.0.0.1:8000/');
