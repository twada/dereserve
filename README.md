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

```
dereserve example.js > build/example.js 
```

```
car example.js | dereserve > build/example.js 
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
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.


[npm-url]: https://npmjs.org/package/dereserve
[npm-image]: https://badge.fury.io/js/dereserve.svg

[travis-url]: http://travis-ci.org/twada/dereserve
[travis-image]: https://secure.travis-ci.org/twada/dereserve.svg?branch=master

[depstat-url]: https://gemnasium.com/twada/dereserve
[depstat-image]: https://gemnasium.com/twada/dereserve.svg

[license-url]: http://twada.mit-license.org/
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg
