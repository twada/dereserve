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

var es3safe = require('es3-safe-recast');
var recast = require('recast');

module.exports = function transform (jsCode) {
    if (!es3safe.TEST_REGEX.test(jsCode)) {
        return jsCode;
    }
    var visitor = new es3safe.Visitor();
    var ast = recast.parse(jsCode);
    visitor.visit(ast);
    var result = recast.print(ast);
    return result.code;
};
