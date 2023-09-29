# chemical-symbols

Symbols of the chemical elements.

## Example

``` javascript
const symbols = require('chemical-symbols');
// =>[
// =>  'H',
// =>  'He',
// =>  'Li',
// =>  ...
// =>  'Lv',
// =>  'Ts',
// =>  'Og'
// =>]
```

## Installation

``` bash
$ npm install chemical-symbols
```

## API

``` javascript
const symbols = require('chemical-symbols');
```

### `symbols`

An _Array_ of chemical symbols (each a _String_). Adding `1` to the index of any
symbol will get you the element's atomic number!
