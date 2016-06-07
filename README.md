dereserve
================================

CLI for es3-safe-recast

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]


DESCRIPTION
---------------------------------------

Provides `dereserve` command to recast all ES3 reserved words to their safe alternatives. Using [es3-safe-recast](https://github.com/stefanpenner/es3-safe-recast) under the hood.


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/twada/dereserve/blob/master/CHANGELOG.md)


USAGE
---------------------------------------

Run `dereserve example.js > build/example.js` or `cat example.js | dereserve > build/example.js`

transforms

```javascript
ajax('/asdf/1').catch(function(reason) {

}).finally(function() {

});
```

to

```javascript
ajax('/asdf/1')["catch"](function(reason) {

})["finally"](function() {

});
```


INSTALL
---------------------------------------

### via npm

Install locally,

    $ npm install --save-dev dereserve

and/or globally.

    $ npm install -g dereserve


AUTHOR
---------------------------------------
* [Takuto Wada](https://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](https://twada.mit-license.org/2014-2016) license.


[npm-url]: https://npmjs.org/package/dereserve
[npm-image]: https://badge.fury.io/js/dereserve.svg

[travis-url]: https://travis-ci.org/twada/dereserve
[travis-image]: https://secure.travis-ci.org/twada/dereserve.svg?branch=master

[depstat-url]: https://gemnasium.com/twada/dereserve
[depstat-image]: https://gemnasium.com/twada/dereserve.svg

[license-url]: https://twada.mit-license.org/2014-2016
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg
