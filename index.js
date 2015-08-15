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

module.exports = function transform (jsCode) {
    return es3safe.compile(jsCode);
};
