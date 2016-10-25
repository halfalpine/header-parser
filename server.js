var connect = require('connect');
var http = require('http');
var express = require('express');
var app = express();
var requestIp = require('request-ip');

app.use('/', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] 
  var lang = req.headers["accept-language"]
  var ua = req.headers['user-agent']
  res.send(ip, lang, ua)
  console.log(ip,lang, ua)
})


app.listen(8080, function(){
  console.log("Server listening at port 8080");
});
