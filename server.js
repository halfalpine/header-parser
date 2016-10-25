var connect = require('connect');
var http = require('http');
var express = require('express');
var app = express();
var requestIp = require('request-ip');

app.use('/', function(req, res, next) {
  var obj = {}
  obj.ip = req.headers['x-forwarded-for'] 
  obj.lang = req.headers["accept-language"]
  obj.ua = req.headers['user-agent'].match(/\(([^)]+)\)/)[1]
  res.send(obj)
  console.log(obj)
})


app.listen(8080, function(){
  console.log("Server listening at port 8080");
});
