var symbols = require('../');
var test = require('tape');
var isArray = require('lodash.isarray');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(isArray(symbols));
});

test('has all 118 elements', function(t) {
  t.plan(1);
  t.equals(symbols.length, 118);
});