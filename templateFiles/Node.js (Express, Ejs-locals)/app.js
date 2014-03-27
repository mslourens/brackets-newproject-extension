var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var engine = require('ejs-locals'); 
var routes = require('./routes');

var port = process.env.PORT || 3333;
var host = process.env.IP || "localhost";
var app = express();
var server = http.createServer(app);

app.configure(function() {
    app.set('port', port);
    app.engine('ejs', engine);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');    
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

//routes
app.get('/', routes.home);

server.listen(port, host, function(){
  var addr = server.address();
  console.log("Plotter app listening at", addr.address + ":" + addr.port);
});