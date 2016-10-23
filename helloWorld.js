var swig = require('swig');
var path = require('path');
var http = require('http');
var express = require('express');
var swig = new swig.Swig();

var app = express();
app.set('view engine', 'html');
app.locals.pretty = true;
app.set('port', process.env.PORT || 8889 );
app.set('views', __dirname + '/app/public/html');

var basicfunc = function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World, This is a simple Web page number 1 ");
  basicfunc2(response);
};

var basicfunc2 = function(response) {
  response.write("\n");
  response.write("Hello World, This is a simple Web page 2.");
  response.end();
};

var basicfunc3 =  function(request, response) {
    var tmpl = swig.compileFile('/home/ingared/Documents/node-login/app/public/html/contacts.html');
    tmpl.render({pagename: 'My Contacts', authors: ['Paul', 'Jim', 'Jane'] });
};

var server = http.createServer(basicfunc3);
server.listen(app.get('port'));
