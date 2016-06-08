#!/usr/bin/env node

/**
 * dereserve: recast all ES3 reserved words to their safe alternatives.
 *
 * https://github.com/twada/dereserve
 *
 * Copyright (c) 2014-2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://twada.mit-license.org/2014-2016
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
