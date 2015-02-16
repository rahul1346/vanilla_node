'use strict';

var http = require('http');
var routers = require('./lib/routes');

var name = '';

var routes = {};
routes['/time'] = routers;
routes['greet/' + 'name'] = routers;

var server = http.createServer(function(req, res) {
    if (typeof(routes[req.url]) === 'function') {
        routes[req.url](req, res);
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.write(JSON.stringify({msg: 'page not found'}));
        res.end();
    }
});

server.listen(3000, function() {
    console.log('server listening');
});

