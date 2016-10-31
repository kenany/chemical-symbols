var symbols = require('../');
var test = require('tape');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(symbols));
});

test('has all 118 elements', function(t) {
  t.plan(1);
  t.equals(symbols.length, 118);
});
