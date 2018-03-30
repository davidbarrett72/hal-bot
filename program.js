var http = require('http');
var dotenv = require('dotenv');
dotenv.load();
var APIKEY = process.env.SLACK_TOKEN;

 
http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('Hello World\n ${APIKEY}');  }).listen(8124, "127.0.0.1"); 
    
console.log(APIKEY);