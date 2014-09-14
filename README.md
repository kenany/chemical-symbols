# chemical-symbols

[![Build Status](https://img.shields.io/travis/KenanY/chemical-symbols.svg)](https://travis-ci.org/KenanY/chemical-symbols)

Symbols of the chemical elements.

## Example

``` javascript
var symbols = require('chemical-symbols');
// =>[
// =>  'H',
// =>  'He',
// =>  'Li',
// =>  ...
// =>  'Lv',
// =>  'Uus',
// =>  'Uuo'
// =>]
```

## Installation

``` bash
$ npm install chemical-symbols
```

## API

``` javascript
var symbols = require('chemical-symbols');
```

### `symbols`

An _Array_ of chemical symbols (each a _String_). Adding `1` to the index of any
symbol will get you the element's atomic number!