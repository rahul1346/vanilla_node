'use strict';

var server = require('../http_server');

var currentDate = new Date();




module.exports = function(req, res) {
    if (req.method === 'POST') {
        var input = '';

        req.on('data', function(data) {
            input += data.toString('utf-8');
        });

        req.on('end', function() {
            var parsed = JSON.parse(input);
            parsed.msg = 'this was added on the server';
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.write(JSON.stringify(parsed));
            res.end();
        });
    }
    if  (req.method === 'GET' && req.url == '/time') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.write(JSON.stringify({
                time: currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()
            }));
        res.end();
    }
    if  (req.method === 'GET' && req.url == 'greet/'+ server.name) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.write(JSON.stringify({greet: "Hello " + server.name}));
        res.end();
    }
};


