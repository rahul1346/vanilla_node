'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
require('../http_server');
require('./lib/routes');

chai.use(chaihttp);

var expect = chai.expect;

describe('get request to populate time', function() {
  var currentDate = new Date();
  var server = {name: 'ray'}
  it('responds to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/time')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql(currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds());
        done();
      });
  });
   it('responds to a get request to route name', function(done) {
    chai.request('localhost:3000')
      .get('/greet' + server.name)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('Hello' + server.name);
        done();
      });
  });
});