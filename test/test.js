'use strict';

var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;
var command = path.join(__dirname, '..', 'bin', 'cmd.js');
var assert = require('assert');

describe('dereserve command', function () {
    var expected = fs.readFileSync('test/expected/example.js', 'utf8');
    var doAssert = function (done) {
        return function(err, stdout, stderr) {
            if (err) return done(err);
            assert.equal(stdout.toString('utf8'), expected);
            return done();
        };
    };
    it('take filepath as an argument', function (done) {
        exec(command + ' ' + 'test/fixtures/example.js', doAssert(done));
    });
    it('take stdin', function (done) {
        exec('cat test/fixtures/example.js | ' + command, doAssert(done));
    });
    it('take stdin if filepath is `-`', function (done) {
        exec('cat test/fixtures/example.js | ' + command + ' -', doAssert(done));
    });
});
