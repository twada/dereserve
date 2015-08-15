#!/usr/bin/env node

/**
 * dereserve
 *
 * https://github.com/twada/dereserve
 *
 * Copyright (c) 2014-2015 Takuto Wada
 * Licensed under the MIT license.
 *   http://twada.mit-license.org/
 */
'use strict';

var transform = require('..');
var concat = require('concat-stream');
var fs = require('fs');

var file = process.argv[2];
var input;

if (file && file !== '-') {
    input = fs.createReadStream(file);
} else {
    input = process.stdin;
} 

input.pipe(concat(function(buf) {
    console.log(transform(buf.toString('utf8')));
}));
